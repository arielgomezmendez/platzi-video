//Player video

const selecVideo = document.querySelector('video');

// Selected elements
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const mutedButton = document.getElementById("mute-btn");

//Properties: play(), pause(), mute()
// Functions
const playVideo = () => {
    selecVideo.play();
}

const pauseVideo = () => {
    selecVideo.pause();
    
}

const muteVideo = () => {
    if(selecVideo.muted === false){
        selecVideo.muted = true;
    }
    else{
        selecVideo.muted = false;  
    } 
}
const volumeVideo = () => {
    
}


//Actions or events of DOM for videos
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
mutedButton.addEventListener("click", muteVideo);

//selecVideo.play();
//selecVideo.pause();

