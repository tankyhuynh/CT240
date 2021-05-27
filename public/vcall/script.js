// let dW = window.outerWidth - window.innerWidth;
// let dH = window.outerHeight - window.innerHeight;

// const frVideo = document.querySelector("#frVideo");
// autoResizeWithVideo(frVideo);


// if(window.vCall && window.vCall.to) {
//     document.querySelector("#btnReceive").style.display = "none";
// } else {
//     document.querySelector("#btnEnd").style.display = "none";
//     document.querySelector("#btnReceive").addEventListener("click", ()=> {
//         document.querySelector("#btnReceive").style.display = "none";
//     })
// }

// // navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream=>{
// //     // frVideo.srcObject = stream;
// //     document.querySelector("#meVideo").srcObject = stream;
// // });


// function autoResizeWithVideo(frVideo){
//     frVideo.onresize = (event)=>{
//         setWindowSize(event.target.clientWidth, event.target.clientHeight)
//     }
//     function setWindowSize(innerWidth, innerHeight){
//         window.resizeTo(dW+innerWidth, innerHeight+dH);
//     }
    
// }