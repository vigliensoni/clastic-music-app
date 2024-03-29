// Hydra
const hydra = new Hydra();

// Video 
const video = document.createElement("video");
video.id="clasticvideos";
video.crossOrigin = "anonymous";
video.loop = false;
video.muted = false;

let videotimeRemind;

// Audio & audio analyser

let analyser; 
let source;
let dataArray;
let loFreq;
let lomidFreq;
let midFreq;
let himidFreq;
let hiFreq;



// Play
const playButton = document.getElementById('audio');

playButton.addEventListener('mouseover', () => { 
  playButton.style.color = "#B19A74"; 
})
playButton.addEventListener('mouseleave', () => { 
  playButton.style.color = ""; 
})

playButton.addEventListener('click', () => {
  // Full screen, add title, and footer
  toggleFullScreen();
  document.getElementById('clastic-title').innerText = "CLASTIC MUSIC";
  document.getElementById("footer").style.visibility="visible";

  // Add audio stuff
  const context = new ( window.AudioContext || window.webkitAudioContext || false )();
  if ( context ) {
    context.resume();
    console.log('context');
    console.log(context.state)
    analyser = context.createAnalyser();
    source = context.createMediaElementSource(video);
    
    source.connect(analyser);
    analyser.connect(context.destination);
    
    analyser.fftSize = 32;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  
    but0();  
  } else {
    alert("WebAudio not supported in your browser.")
  }

  }
);


// FULL SCREEN
document.addEventListener("keypress", function(e) {
  // ENTER goes into full screen
  if (e.key === "Enter") {
    toggleFullScreen();
  } else if (e.key === "m") {
    mute();
  // } else if (e.key === "v") {
  //   if (video.paused) {
  //     video.play();
  //   }
  //   else {
  //     video.pause();
  //   }
  // } else if (e.key === "1") {
  //   render(o0)
  // } else if (e.key === "2") {
  //   render(o1)
  // } else if (e.key === "3") {
  //   render(o2)
  // } else if (e.key === "4") {
  //   render(o3) 
  // } else if (e.key === "0") {
  //   render()
  }

}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      const element = document.documentElement;
      if(element.requestFullscreen) {
        element.requestFullscreen();        // W3C spec
      }
      else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();     // Firefox
      }
      else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();  // Safari
      }
      else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();      // IE/Edge
      }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// function toggleFullScreen() {
//   let elem = document.documentElement;

//   if (!document.fullscreenElement) {
//     elem.requestFullscreen().catch(err => {
//       alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
//     });
//   } else {
//     document.exitFullscreen();
//   }
// }



let trackNo
scene = [but0, but1, but2, but3, but4, but5, but6, but7, but8, but9]

function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    loFreq = dataArray[0]/255;
    lomidFreq = dataArray[1]/255;
    midFreq = dataArray[2]/255;
    himidFreq = dataArray[3]/255;
    hiFreq = dataArray[4]/255;
    videotimeRemind = video.duration - video.currentTime
    // AUTOPLAY CONTROL if trackNo is 0 (but0) or -1 (but9)
    if ( videotimeRemind < 0.1 ) {
      scene[trackNo + 1]()
    }
    
};


// Audio muting
let muteButton = document.getElementById('mute');
let muted = false;
muteButton.addEventListener('click', () => mute() );

function mute(){
  if ( muted === false ) {
    // console.log('Muted');
    muted = true;
    video.muted = muted;
    muteButton.getElementsByTagName('img')[0].src = "media/icons/no-audio-50.png"
  }  
  else {
    // console.log('Unmuted');
    muted = false;
    video.muted = muted;
    muteButton.getElementsByTagName('img')[0].src = "media/icons/audio-50.png"
  }
};

// Normalizers 
function norm (val, min, max) { 
  return (val - min) / (max - min)
}
function scaler(value, minIn, maxIn, minOut, maxOut){
  value = Math.min(Math.max(value, minIn), maxIn);
  value = (value - minIn)/(maxIn - minIn) * (maxOut - minOut) + minOut;
  return value
}

track = { 1: "Siltstone", 2: "Breccia", 3: "Ooze", 4: "Claystone", 5: "Clastic", 
          6: "Fall In Sync", 7: "Telematic Awakening", 8: "Sandstone", 9: "Shale" }

function trackdefaultColor () {
  // Default all colors to white
  let tracks = document.getElementsByClassName('tableColumn');
  for (let t = 0; t < tracks.length; t++ ){
    tracks[t].style.color = "blanchedalmond";
  }
  albumTitle.style.color = "blanchedalmond";
}


// Album button
let albumTitle = document.getElementById("clastic-title");
albumTitle.addEventListener('click', () => { but0() })




function buttonHandler (element, id) {
  element.addEventListener('mouseover', () => { element.style.textDecoration = "line-through"; })
  element.addEventListener('mouseleave', () => { element.style.textDecoration = "none"; })
  element.addEventListener('click', () => { 
    trackdefaultColor();
    element.style.color = "red";
    scene[id]();
    $('.navbar-collapse').collapse('hide');
  })
} 

let t0 = document.getElementById('clastic-title'); buttonHandler (t0, 0)
let t1 = document.getElementById('but1'); buttonHandler (t1, 1)
let t2 = document.getElementById('but2'); buttonHandler (t2, 2)
let t3 = document.getElementById('but3'); buttonHandler (t3, 3)
let t4 = document.getElementById('but4'); buttonHandler (t4, 4)
let t5 = document.getElementById('but5'); buttonHandler (t5, 5)
let t6 = document.getElementById('but6'); buttonHandler (t6, 6)
let t7 = document.getElementById('but7'); buttonHandler (t7, 7)
let t8 = document.getElementById('but8'); buttonHandler (t8, 8)
let t9 = document.getElementById('but9'); buttonHandler (t9, 9)



// Scenes
function but0() {
  // console.log('home');

  trackdefaultColor ()
  video.pause()

  s0.initImage("media/img/cuadro3.jpg")
  s1.initImage("media/img/chooseasong.png")
  s2.initImage("media/img/modelo3.gif")
  
  src(s2)
  .scrollX( () => scaler(mouse.x, 0, window.innerWidth, -0.5, 0.5), 0.0 )
  .scrollY( () => scaler(mouse.y, 0, window.innerHeight, -0.05, 0.05), 0.0 )
  .scrollY(0.334, 0)
  .scale( () => scaler(mouse.y, 0, window.innerHeight, 0.7, 0.394) )
  .scale( () => 1.05 + 0.1 * Math.sin(0.25*time) )
  .blend(o2)
  .out(o2)
  
  src(s1)
  .scrollY(1.1, -0.01)
  .out(o1)
 
  src(s0)
  .scrollX( () => scaler(mouse.x, 0, window.innerWidth, -0.04, 0.04), 0.0 )
  .scrollY( () => scaler(mouse.y, 0, window.innerHeight, -0.04, 0.04), 0.0 )
  .scale( () => scaler(mouse.x, 0, window.innerWidth, 0.8, 1.2) )
  .scale( () => 1.05 - 0.1 * Math.sin(0.25*time) )
  .layer(o2).blend(o0)
  .layer(o1).blend(o0)
  .out(o0)

  render(o0)
  draw()

}

function but1() {
  // console.log('1 - siltstone')
  trackNo = 1

  trackdefaultColor();
  t1.style.color = "red";

  s1.initImage("media/img/blank.png")

  video.src = "./videos/1-E01-crf22.mp4"
  video.playsInline = true
  video.play().then( () => s0.init({src:video, dynamic:true}))

  solid(1,1,1)
  .layer(osc(500).modulateScale(
      shape(100, () => Math.cos(time * 0.5), 1)
      .scale(1.1, 0.6), 1, 1, () => (time * 1) % 2))
      .modulate(noise(4).scale(1.5,0.8,2).modulateScale( shape(100, () => Math.sin(time * 0.5), 1 )
      .scale(1.1, 0.6), -0.5, 2, () => (time * 1) % 2) )
  .out()

  // solid().out(o1)

  voronoi(() => mouse.x/24 * .5, () => midFreq*3+90,0)
  .mult(osc(3,() => midFreq * 3 + 1.1, () => Math.sin(time/15)*.3+.08).saturate(4).kaleid(200) )
  .mult(o0).modulate(o1,0.5)
  .modulate(s0)
  .add(o1,0.8)
  .scrollY(-0.05)
  .scale(0.99)
  .modulate(o1)
  .modulate( noise(() => Math.sin(time)*.07+.2), () => Math.sin(time)*.02+.1 )
  .blend(s0, () => himidFreq * 35)
  .blend(o2).blend(o2).blend(o2).blend(o2).blend(o2).blend(o2)
  .scrollX(() => scaler(mouse.x, 0, window.innerWidth, -0.05, 0.05), 0.0000)
  .scrollY(() => scaler(mouse.y, 0, window.innerHeight, -0.05, 0.05), 0.0000)
  .out(o2)

  render(o2)
  draw();
}

function but2() {
  // console.log('2 - breccia')
  trackNo = 2

  trackdefaultColor();
  t2.style.color = "red";

  video.src = "./videos/2-BD08-crf22.mp4"
  video.playsInline = true
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .scale(()=>dataArray[1]/255*1.1+.2)
  .contrast(1.3)
  .saturate(()=>dataArray[3]/255* 2 + 0.2)
  .modulate(o0, () => scaler(mouse.y, 0, window.innerHeight, 0, 0.5))
  .blend(o0)
  .scale(1.02, 1.02)
  .rotate(() => scaler(mouse.x, 0, window.innerWidth, -0.75, 0.75) )
  .modulate(o1)
  .out(o0)

  shape(4, 4, 0).scale(0.5,0.5)
  .diff(src(o1).scale(0.999).rotate(() => scaler(mouse.y, 0, window.innerWidth, 0, 4)))
  .repeat(1.08,1)
  .blend(src(o1), () => scaler(mouse.y, 0, window.innerHeight, 0, 5))
  .add(src(o1).scrollY(-0.001),0.3)
  .modulateScale(src(o0),-0.005)
  .blend(o0).blend(o0).blend(o0).blend(o0)
  .out(o1)

  render(o1)
  draw();
}

function but3() {
  // console.log('3 - ooze')
  trackNo = 3

  trackdefaultColor();
  t3.style.color = "red";

  video.src = "./videos/3-BD07-crf22.mp4";
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .scale(()=>dataArray[1]/255*.1+1)
  .modulate((o2), ()=> dataArray[3]/255*2)
  .blend(o0)
  .out(o0)

  shape(99,.15,.5).color(0,1,2)
  .diff( shape(5,.5,0).scrollX(.05).scale( () => dataArray[3]/255*2+.8).rotate( () => dataArray[3]/255*4+4).color (() => 0.1 + mouse.x * 0.0005,0 + mouse.x * 0.0005),.5 + mouse.x * 0.0005).color(.1,.2,.5)
  .diff( shape(3,.4,.002).scrollX(.10).scale( () => dataArray[1]/255*-2,.8).rotate( () => dataArray[1]/255*-1.2-2).rotate(() => Math.sin(time)+1*-2).color(.1,0,.5) )
  .diff( shape(5,.3,.002).scrollX(.15).scale( () => dataArray[0]/255*2+.8).rotate( () => dataArray[3]/255*8+1).rotate(() => Math.sin(time)+3*2).color(.1,0.1,.5) )
  .diff( shape(5,.2,.002).scrollX(.20).scale( () => dataArray[3]/255*-2+1.8).rotate( () =>dataArray[3]/255*-4-4).rotate(() => Math.sin(time)-1*-2).color(.3,0,.3) )
  .diff( shape(6,.1,.002).scrollX(.25).rotate( ()=>time/50 ).color(.1,0,.5) )
  .modulateScale( shape(3,.5,0).scrollX(.05).rotate( () => time/10 ), () => (Math.sin(time/3)*.2)+.2 )
  .scale(0.2, () => (1.05 + 0.1 * Math.sin(0.05*time)))
  .scale(()=> 0.7 + mouse.y * 0.0045,.6,1)
  .modulate(o2,.1)
  .mult(gradient(({time}) => 0.2+.2*Math.sin(time*.03), ({time}) => 0.05+1*Math.sin(time*.01),({time}) => 0.3+2*Math.sin(time*.05)))
  .saturate(() => -0.2 + mouse.x * .0008)
  .out(o2)

  src(o0)
  .diff(o2,.7)
  .modulateRotate(o0,.01)
  .out(o3)

  render(o3)
  draw();
}

function but4() {
  // console.log('4 - claystone')
  trackNo = 4
  
  trackdefaultColor();
  t4.style.color = "red";

  video.src = "./videos/4-E02-crf22.mp4";
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .scale(1.4)
  .scale(  () => dataArray[3]/255*1+.2 )
  .add(o1,0.1)
  .modulate(s0,.025)
  .blend(o0)
  .modulate(o2,.03)
  .modulate(o1, .5)
  .out(o0)

  src(s0)
  .mult(osc([950,-950]
  .smooth(1).fast(.15),0.013)
  .contrast(14)
  .brightness(-6))
  .modulate(o2,.5)
  .out(o1)

  src(s0)
  shape(() => Math.sin(time)+1*3, () => mouse.y/1236*0.8+.18,.01)
  .repeat(() => mouse.x/1236*3+1,3, () => dataArray[0]/255*2+1, () => dataArray[1]/255*5)
  .scrollY(.5,() => dataArray[4]/255 * .005 + 0.01)
  .layer(src(o1).mask(o0).luma(.01, 0.1).invert(0.2))
  .out(o2)

  render(o1)
  draw();
}

function but5() {
  // console.log('5 - clastic')
  trackNo = 5

  trackdefaultColor();
  t5.style.color = "red";

  video.src = "./videos/5-CLASTIC-crf22.mp4";
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(o0)
  .layer(
    src(s0)
      .contrast(1.1)
      .mask(shape([3,6,9,5].fast(140/120))
      .scrollX( () => scaler(mouse.x, 0, window.innerWidth, -1, 1) )
      .scrollY( () => scaler(mouse.y, 0, window.innerHeight, -1, 1) )
      .scale( () => 0.05 + Math.sin(1.166667*time/10) * himidFreq, () => 1.0 + 0.5 * himidFreq)
      .saturate(1.5)
      )
      )
  .scale(1.01)
  .out(o0)

  voronoi(2, 0.3, 0.2).shift(0.5)
  .scale(() => 1 + (Math.sin(time*.25)*0.05))
  .scale( () => scaler(mouse.x, 0, window.innerWidth, 1.5, 3.5), () => scaler(mouse.x, 0, window.innerWidth, 1.5, 3.0))
  .out(o1)

  src(o0)
  .modulate(o1, .4)
  .out(o3)

  render(o0)
  draw();
}

function but6() {
  // console.log('6 - fall in sync')
  trackNo = 6

  trackdefaultColor();
  t6.style.color = "red";

  video.src = "./videos/6-FALL-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .add(
    src(o0)
    .scrollX([0.05,-0.05].fast(0.03).smooth(1))
  .scale([1.03,1.03].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1)),0.85)
  .out(o0)

  osc(7)
  .posterize ( () => (.2 + mouse.x * 0.006) + 1 )
  .modulate( noise(() => dataArray[3]/255*3+1.5) )
  .out(o1)

  voronoi( () => Math.sin(time*.01)*1.2+5, () => mouse.y * .0004+.05, 100 )
  .scrollX( ({time}) => Math.sin(time*.05) * (-0.7) - 1 )
  .scrollX( () => dataArray[0]/255*(-0.3) )
  .colorama(1)
  .diff(o1)
  .thresh()
  .out(o2)

  src(o0)
  .modulate(o0)
  .modulate(o2,.1)
  .out(o3)

  render(o3)
  draw();
}

function but7() {
  // console.log('7 - telematic')
  trackNo = 7

  trackdefaultColor();
  t7.style.color = "red";

  video.src = "./videos/7-TELEMATIC-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .scale( () => dataArray[2]/255 * 0.2 + 1 )
  .color( () => Math.sin(time*0.03),() => Math.sin(time*0.17),() => Math.sin(time*0.07) )
  .color( () => mouse.y * 0.001,() => mouse.y * 0.0008 )
  .brightness( () => mouse.x * 0.00015 + 0.0000001 )
  .out(o0)

  src(o0)
  .diff(src(o3)
  .scrollY(0, [-.0001, 0.04].fast(0.004)))
  .brightness([-0.029, -.17].smooth().fast(0.21))
  .out(o3)

  render(o3)
  draw();
}

function but8() {
  // console.log('8 - sandstone')
  trackNo = 8

  trackdefaultColor();
  t8.style.color = "red";

  video.src = "./videos/8-BD01-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(o0)
  .repeat(1,0.999)
  .modulate(o0,0.001)
  .scale(1.001)
  .rotate(() => scaler(mouse.y, 0, window.innerHeight, -.017, .017))
  .layer(src(s0)
    .scale(1,0.95)
    .saturate(.4)
    .contrast(() => scaler(mouse.y, 0, window.innerHeight, 1, 4))
    .modulateScale(noise(()=>himidFreq* 0.6+0.00011,0))
    .luma (()=> scaler(mouse.x, 0, window.innerWidth, 0.1, 0.9), scaler(mouse.x, 0, window.innerWidth, 0.5, 1.0))
    )
  .out()

  render(o0)
  draw();

render(o0)
draw();

}




function but9() {
  // console.log('9 - shale')
  trackNo = -1 // just to go to but0 (home)

  trackdefaultColor();
  t9.style.color = "red";

  video.src = "./videos/9-BD02-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  solid().out(o0)
  solid().out(o1)
  solid().out(o2)
  solid().out(o3)

  src(s0)
  .color(1,0,0)
  .scrollX( () => himidFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0 )
  .scrollY( () => himidFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0 )
  .add(src(s0).color(0,1,0)
    .scrollX( () => 4 * hiFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0 )
    .scrollY( () => 4 * hiFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0 )
    )
  .add(src(s0).color(.5,.5,0)
    .scrollX( () => 2 * loFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0 )
    .scrollY( () => 3 * loFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0 )
    )

  .add(src(s0).color(0,0,1)
    .scrollX( () => midFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0 )
    .scrollY( () => 3 *  midFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0 )
    )
  .out(o0)

  src(o0)
  .out(o2)

  src(o0)
  .scale(() => dataArray[3]/255*.3+1.3)
  .blend(o1,6)
  .saturate(0.2)
  .contrast(2)
  .modulate(s0, .03)
  .out(o3)

  render(o2)
  draw();
}