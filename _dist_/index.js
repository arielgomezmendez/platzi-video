//Player video

const selecVideo = document.querySelector('video');

// Selected elements
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const mutedButton = document.getElementById("mute-btn");
<<<<<<< HEAD
const volumePlusButton = document.getElementById("vol-btn-plus");
const volumeLessButton = document.getElementById("vol-btn-less");

=======
const volumeButton = document.getElementById("volume-btn");
>>>>>>> ad9ad2b005da1224a7aec4f6bb4aa80610216418

//Properties: play(), pause(), mute()
// Functions
//Play
const playVideo = () => {
    selecVideo.play();
}

//Pause
const pauseVideo = () => {
    selecVideo.pause();
    
}
//Mute
const muteVideo = () => {
    if(selecVideo.muted === false){
        selecVideo.muted = true;
    }
    else{
        selecVideo.muted = false;  
    } 
}
// Volume plus
const volumePlusVideo = () => {
    alert(selecVideo.volume);
}
 //Volume less



//Actions or events of DOM for videos
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
mutedButton.addEventListener("click", muteVideo);
volumePlusButton.addEventListener("click", volumePlusVideo);


//selecVideo.play();
//selecVideo.pause();

