// new window
const signal = window.vCall.signal;
let to = window.vCall.to;
let from = window.vCall.from;
let isCaller = !(!to);



signal.on((data) => {
    if (socket[data.type] && (data.from === from || data.from === to)) { 
        socket[data.type](data); 
    } 
});


// global var

let setRemoteDsp = false;
let listIceCandidate = [];
let called = false;

// ui component
const btnCall = document.querySelector("#btnCall");
const btnEnd = document.querySelector("#btnEnd");
const btnReceive = document.querySelector("#btnReceive");

const remoteVideo = document.querySelector('#frVideo');
const localVideo = document.querySelector('#meVideo');

/** set remote video*/
let remoteStream = new MediaStream();
remoteVideo.srcObject = remoteStream;

// set local Video
let localStream = null;
async function setLocalStream(stream){
    localStream = stream;
    if(called){
        console.log("resetup!");
        called = false;
        await setup();
    }
}


// timeover component
const timeOver = 30000;
let callTimeOver = window.setTimeout(() => { this.close(); }, timeOver)
const clearCallOver = () => {
    window.clearTimeout(callTimeOver);
}

const socket = {
    on: (type, handle) => {
        socket[type] = handle;
    },
    emit: (type, data) => {
        signal.emit({ type, ...data });
    },
}


// remove window
window.onbeforeunload = () => {
    if(!(isCaller ? to : from )) { } else {
        socket.emit("call:end", { to: isCaller ? to : from });
    }
}



// receive call
btnReceive.onclick = async () => {
    clearCallOver();
    await setup();
};




// Ket thuoc cuoc goi
socket.on("call:end", () => {
    console.log("window close handle");
    window.close();
});

async function setup() {
    console.log("setup")
    if (!called) {
        called = true;
        if(!localStream) {
            return 
        } else {
            socket.emit("call:accept", { to: from });
        }
        if (!isCaller) { } else {
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            socket.emit("media:request", { to, 'offer': offer });
        }
    } 
}


// peertopeer config
const configuration = {
    iceServers: [{
        urls: ["stun:ss-turn2.xirsys.com"]
    }, {
        urls: [{'urls': 'stun:stun.l.google.com:19302'}
        ]
    }]
}
const peerConnection = new RTCPeerConnection(configuration);
peerConnection.onconnectionstatechange = event => {
    console.log(peerConnection.connectionState);
    if (peerConnection.connectionState === 'connected') {
        console.log("Peer to peer connect complete");
    }
};
peerConnection.ontrack = async (event) => {
    console.dir(event.track);
    remoteStream.addTrack(event.track, remoteStream);
};
peerConnection.onicecandidate = event => {
    if (event.candidate) {
        console.log("emit a media:iceCandidate")
        socket.emit('media:iceCandidate', { to, iceCandidate: event.candidate });
    }
};

socket.on("media:request", async message => {
    to = message.from;
    if (message.offer) {
        let answer;
        try {
            peerConnection.setRemoteDescription(new RTCSessionDescription(message.offer));
            setRemoteDsp = true;
            await handleAddIceCandidate({});
            answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
        } catch {
            return;
        }
        socket.emit("media:response", { to: message.from, 'answer': answer });
    }
});
socket.on("media:response", async message => {
    if (message.answer) {
        const remoteDesc = new RTCSessionDescription(message.answer);
        try {
            await peerConnection.setRemoteDescription(remoteDesc);
            setRemoteDsp = true;
            await handleAddIceCandidate({});
        } catch { }
    }
});

// Listen for remote ICE candidates and add them to the local RTCPeerConnection
async function handleAddIceCandidate(message) {
    console.log("handleAddIceCandidate run! ----------------");
    if (!setRemoteDsp && called) {
        listIceCandidate.push(message.iceCandidate);
    } else {
        for (let i = 0; i < listIceCandidate.length; i++) {
            await peerConnection.addIceCandidate(listIceCandidate[i]);
        }
        listIceCandidate = [];
        console.log("start add ice-candidate");
        if (message.iceCandidate) {
            await peerConnection.addIceCandidate(message.iceCandidate);
        }
    }
}
socket.on('media:iceCandidate', async message => {
    await handleAddIceCandidate(message);
});



navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(async (stream) => {
        localVideo.srcObject = stream;
        stream.getTracks().forEach(track => {
            peerConnection.addTrack(track, stream);
        })
        await setLocalStream(stream);
});
        // nhan phan hoi cuoc goi

socket.on("call:accept", async (data) => {
    console.log("call:accept run!");
    to = data.from;
    clearCallOver();
    await setup();
});
