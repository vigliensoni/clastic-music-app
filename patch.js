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
const context = new ( AudioContext || webkitAudioContext )();
const analyser = context.createAnalyser();
const source = context.createMediaElementSource(video);

source.connect(analyser);
analyser.connect(context.destination);

analyser.fftSize = 32;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);


function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
};


function but1() {

    video.src = "./bd2-test.mp4"
    video.play().then( () => s0.init({src:video, dynamic:true})) 

    src(s0)
    .rotate (.1,() => Math.sin(time * 0.00008))
    .scale(1.4)
    .scale(  () => dataArray[2]/256 )
    .diff(o1,0.3)
    .modulate(s0,.025)
    .blend(o0)
    .modulate(o2,.03)
    .saturate( ()  => dataArray[5]/256 * 4 )
    .out(o0)

    render(o0) 

    draw();

}
