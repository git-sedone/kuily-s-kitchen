
// code for video

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const bar = document.getElementById('bar');
const video = document.getElementById('video');
const stamp = document.getElementById('stamp');


video.addEventListener('click', function toggleVideo(){
    if(video.paused){
        video.play();
    }else{ 
        video.pause();
    }
});

video.addEventListener('pause', function updateBtn(){
    if(video.paused){
        startBtn.innerHTML= '<i class="fa fa-play fa-2x"></i>'
    }else{
        startBtn.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }

});
video.addEventListener('play', function updateBtn(){
    if(video.paused){
        startBtn.innerHTML= '<i class="fa fa-play fa-2x"></i>'
    }else{
        startBtn.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }
});

video.addEventListener('timeupdate', function updateBar(){
    bar.value = (video.currentTime / video.duration) *100;
    var min = Math.floor(video.currentTime/60);
    if(min<10){
        min = '0' + String(min);
    }
    var sec = Math.floor(video.currentTime%60)
    if(sec<10){
        sec = '0' + String(sec);
    }
    stamp.innerHTML = `${min}:${sec}`;
});

startBtn.addEventListener('click', function toggleVideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
});

stopBtn.addEventListener('click', function stopVideo(){
    video.currentTime =0;
    video.pause();
})

// code for toggle the video button

const toggleVideo = document.getElementById('video-btn');
const disappear = document.getElementById('toggling-body');

toggleVideo.addEventListener('click', function openVideo(){
    disappear.classList.toggle('open-video');
})