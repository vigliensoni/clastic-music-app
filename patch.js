// Hydra
const hydra = new Hydra()

// Video stuff
const video = document.createElement("video")
video.id="allende"
video.autoplay = true
video.crossOrigin = "anonymous"
video.loop = true
video.muted = false

// Video muting
let muted = false

function mute(){
  if ( muted == false ) {
    console.log('I will mute it')
    muted = true
    video.muted = muted
  }  
  else {
    console.log('I will unmute it')
    muted = false
    video.muted = muted
  }
}


// Audio
let context = new ( AudioContext || webkitAudioContext )();
let analyser = context.createAnalyser();
let source = context.createMediaElementSource(video);
source.connect(analyser);
analyser.connect(context.destination);
analyser.fftSize = 32;
let bufferLength = analyser.frequencyBinCount;
let fft = new Uint8Array(bufferLength);    

// Resume audio context after user gesture
function audio() {
    context.resume();
    document.getElementById('audio').style.display = 'none';
}

// fft
function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(fft);
};

// Play
// const playButton = document.getElementById('audio');
// playButton.addEventListener('click', () => playButton.style.display = "none" )


// Scenes
function but1() {

    video.src = "./bd2-test.mp4"
    video.play().then( () => s0.init({src:video, dynamic:true})) 

    src(s0)
    .rotate (.1,() => Math.sin(time * 0.00008))
    .scale(1.4)
    .scale(  () => fft[2]/256 )
    .diff(o1,0.3)
    .modulate(s0,.025)
    .blend(o0)
    .modulate(o2,.03)
    .saturate( ()  => fft[5]/256 * 4 )
    .out(o0)

    render(o0) 

    draw();

}
