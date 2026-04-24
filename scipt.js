window.addEventListener("load", ()=>{

    const video = document.createElement("video");
    const divVideo = document.querySelector(".divVideo")

    video.src = "img/video-monstrinho-azul.mp4";
    video.autoplay = true;
    video.muted = true; 
    video.playsInline = true;
    video.loop = true;
    video.playbackRate = 1.2;

    divVideo.appendChild(video);
    
})

