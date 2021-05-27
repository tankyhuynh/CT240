const signal = window.vCall.signal;
const socket = {
    on: (type, handle, options ={}) => {
        socket[type] = handle;
        signal.on((data) => {
                console.log("console ????");
                if(socket[data.type]) socket[data.type](data);
                if(options.onetime === true){ 
                    socket[data.type] = null;
                }
            });    
    },
    emit: (type, data) => {
        signal.emit({ type, ...data });
    },
}

let to = window.vCall.to;
let from = window.vCall.from;
let isCaller = !(!to);


const btnCall = document.querySelector("#btnCall");
const btnEnd = document.querySelector("#btnEnd");
const btnReceive = document.querySelector("#btnReceive");

let localStream = null;
navigator.mediaDevices.getUserMedia({video:true, audio: true }).then(
    (stream) => {
        console.log("localStream run");
        localStream = stream;
        localVideo.srcObject = localStream;
        // remoteVideo.srcObject = localStream; // view code time
    }
);


let isSetup = false;
async function setup(){
    if(!isSetup) {
        isSetup = true;
        await setupCall();
    }
}


const timeOver = 30000;
let callTimeOver = window.setTimeout(()=> {
    this.close();
}, timeOver)
window.onbeforeunload = ()=> {
    if(isSetup) {
        socket.emit("call:end", {to: isCaller?to:from});
    }
}
socket.on("call:end", ()=> {
    console.log("window close handle");
    window.close();
});

btnReceive.onclick = async () => {
    await setup();
    window.clearTimeout(callTimeOver);
    socket.emit("call:accept", { to: from });
};
socket.on("call:accept", async (data) => {
    console.log("call:accept run!");
    to = data.from;
    window.clearTimeout(callTimeOver);
    await setup();
}, {onetime: true},)

const remoteVideo = document.querySelector('#frVideo');
const localVideo = document.querySelector('#meVideo');




/** function to setup for WebRTC transform */
let remoteStream = new MediaStream();
remoteVideo.srcObject = remoteStream;

const configuration = { 'iceServers': [{urls: "stun:stun.services.mozilla.com"},{ 'urls': 'stun:stun.l.google.com:19302' }] }
    const peerConnection = new RTCPeerConnection(configuration);
    peerConnection.addEventListener('connectionstatechange', event => {
        console.log(peerConnection.connectionState);
        if (peerConnection.connectionState === 'connected') {
            console.log("Peer to peer connect complete");
        }
    });
    peerConnection.addEventListener('track', async (event) => {
        console.dir(event.track);
        remoteStream.addTrack(event.track, remoteStream);
    });
    peerConnection.addEventListener('icecandidate', event => {
        if (event.candidate) {
            socket.emit('media:iceCandidate', { to, iceCandidate: event.candidate });
            console.dir(event.candidate);
        }
    });

    

    socket.on("media:request", async message => {
        to = message.from;
        if (message.offer) {
            console.log("media:request receivered");
            let answer;
            try {
                peerConnection.setRemoteDescription(new RTCSessionDescription(message.offer));
                answer = await peerConnection.createAnswer();
                await peerConnection.setLocalDescription(answer);
            } catch { 
                return;
            }
            socket.emit("media:response", { to: message.from, 'answer': answer });
        }
    }, {onetime: true},);

    // Listen for remote ICE candidates and add them to the local RTCPeerConnection
    socket.on('media:iceCandidate', async message => {
        if (message.iceCandidate) {
            // try {
                await peerConnection.addIceCandidate(message.iceCandidate);
            // } catch (e) {
            //     console.error('Error adding received ice candidate', e);
            // }
        }
    });
socket.on("media:response", async message => {
    if (message.answer) {
        const remoteDesc = new RTCSessionDescription(message.answer);
        try {
            await peerConnection.setRemoteDescription(remoteDesc);
        } catch { }
    }
}, {onetime: true},);


   


async function setupCall() {
    console.log("setup call");
    localStream.getTracks().forEach(track => {
        console.log("local track");
        console.dir(track);
        peerConnection.addTrack(track, localStream);
    });
    if (!isCaller) { } else {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit("media:request", { to, 'offer': offer });
    }
}



