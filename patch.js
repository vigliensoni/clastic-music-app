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
playButton.addEventListener('click', () => {

  toggleFullScreen();
    const context = new ( AudioContext || webkitAudioContext )();
    analyser = context.createAnalyser();
    source = context.createMediaElementSource(video);
    
    source.connect(analyser);
    analyser.connect(context.destination);
    
    analyser.fftSize = 32;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  
  }
);



// FULL SCREEN
document.addEventListener("keypress", function(e) {
  // ENTER goes into full screen
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      // document.documentElement.webkitRequestFullscreen(); //SAFARI
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}



function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    loFreq = dataArray[0]/255;
    lomidFreq = dataArray[1]/255;
    midFreq = dataArray[2]/255;
    himidFreq = dataArray[3]/255;
    hiFreq = dataArray[4]/255;
    videotimeRemind = video.duration - video.currentTime
    // console.log("mX: " + mouse.x +  " | " + norm(mouse.x, 0, window.innerWidth))
    if ( videotimeRemind < 0.1 ) but0()
};


// Audio muting
let muteButton = document.getElementById('mute');
let muted = false;
muteButton.addEventListener('click', () => mute() );

function mute(){
  if ( muted == false ) {
    console.log('I will mute it');
    muted = true;
    video.muted = muted;
    muteButton.innerText="Unmute";
  }  
  else {
    console.log('I will unmute it');
    muted = false;
    video.muted = muted;
    muteButton.innerText="Mute";
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
}


// Track buttons
let trackTitle = document.getElementsByClassName("track-title")[0];

//  buttonHandler(element, id)

// function buttonHandler (element, id) {
//   let t1 = document.getElementById('but1');
//   element.addEventListener('mouseover', () => { element.style.textDecoration = "line-through"; })
//   element.addEventListener('mouseleave', () => { element.style.textDecoration = "none"; })
//   element.addEventListener('click', () => { 
//     trackdefaultColor();
//     element.style.color = "red";
//     but1(); 
//   })
// } 

let t0 = document.getElementById('audio')
// t1.addEventListener('mouseover', () => { t1.style.textDecoration = "line-through"; })
// t1.addEventListener('mouseleave', () => { t1.style.textDecoration = "none"; })
t0.addEventListener('click', () => { 
  trackdefaultColor();
  but0(); 
})


let t1 = document.getElementById('but1')
t1.addEventListener('mouseover', () => { t1.style.textDecoration = "line-through"; })
t1.addEventListener('mouseleave', () => { t1.style.textDecoration = "none"; })
t1.addEventListener('click', () => { 
  trackdefaultColor();
  t1.style.color = "red";
  but1(); 
})

let t2 = document.getElementById('but2')
t2.addEventListener('mouseover', () => { t2.style.textDecoration = "line-through"; })
t2.addEventListener('mouseleave', () => { t2.style.textDecoration = "none"; })
t2.addEventListener('click', () => { 
  trackdefaultColor();
  t2.style.color = "red";
  but2(); 
})

let t3 = document.getElementById('but3')
t3.addEventListener('mouseover', () => { t3.style.textDecoration = "line-through"; })
t3.addEventListener('mouseleave', () => { t3.style.textDecoration = "none"; })
t3.addEventListener('click', () => { 
  trackdefaultColor();
  t3.style.color = "red";
  but3(); 
})

let t4 = document.getElementById('but4')
t4.addEventListener('mouseover', () => { t4.style.textDecoration = "line-through"; })
t4.addEventListener('mouseleave', () => { t4.style.textDecoration = "none"; })
t4.addEventListener('click', () => { 
  trackdefaultColor();
  t4.style.color = "red";
  but4(); 
})

let t5 = document.getElementById('but5')
t5.addEventListener('mouseover', () => { t5.style.textDecoration = "line-through"; })
t5.addEventListener('mouseleave', () => { t5.style.textDecoration = "none"; })
t5.addEventListener('click', () => { 
  trackdefaultColor();
  t5.style.color = "red";
  but5(); 
})

let t6 = document.getElementById('but6')
t6.addEventListener('mouseover', () => { t6.style.textDecoration = "line-through"; })
t6.addEventListener('mouseleave', () => { t6.style.textDecoration = "none"; })
t6.addEventListener('click', () => { 
  trackdefaultColor();
  t6.style.color = "red";
  but6(); 
})

let t7 = document.getElementById('but7')
t7.addEventListener('mouseover', () => { t7.style.textDecoration = "line-through"; })
t7.addEventListener('mouseleave', () => { t7.style.textDecoration = "none"; })
t7.addEventListener('click', () => { 
  trackdefaultColor();
  t7.style.color = "red";
  but7(); 
})

let t8 = document.getElementById('but8')
t8.addEventListener('mouseover', () => { t8.style.textDecoration = "line-through"; })
t8.addEventListener('mouseleave', () => { t8.style.textDecoration = "none"; })
t8.addEventListener('click', () => { 
  trackdefaultColor();
  t8.style.color = "red";
  but8(); 
})

let t9 = document.getElementById('but9')
t9.addEventListener('mouseover', () => { t9.style.textDecoration = "line-through"; })
t9.addEventListener('mouseleave', () => { t9.style.textDecoration = "none"; })
t9.addEventListener('click', () => { 
  trackdefaultColor();
  t9.style.color = "red";
  but9(); 
})





// Scenes
function but0() {
  // console.log('home');
   
  s2.initImage("media/img/modelo3.gif")
  src(s2)
  .scrollX(()=> scaler(mouse.x, 0, window.innerWidth, -0.5, 0.5), 0.0)
  .scrollY(()=> scaler(mouse.y, 0, window.innerHeight, -0.05, 0.05), 0.0000)
  .scale( () => scaler(mouse.y, 0, window.innerHeight, 0.7, 0.394), scaler(mouse.y, 0, window.innerHeight, 0.9, 0.507))
  .scale([0.90, 1.10].smooth(1).fast(0.25))
  // .blend(o2).blend(o2)
  .out(o2)

  
  video.src = "./videos/00-cuadro.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}))
  
  src(s0)
  .scrollX(()=> scaler(mouse.x, 0, window.innerWidth, -0.04, 0.04), 0.0)
  .scrollY(()=> scaler(mouse.y, 0, window.innerHeight, -0.04, 0.04), 0.0000)
  .scale(()=> scaler(mouse.x, 0, window.innerWidth, 0.8, 1.2))
  .scale([1.05,0.95].smooth(1).fast(0.25))

  .layer(o2).blend(o0)
  .out(o0)
  render(o0)
  

}



function but1() {
  console.log('1 - e01 - window')

  video.src = "./videos/1-E01-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}))


  solid(1,1,1)
  .layer(osc(500).modulateScale(
      shape(100, () => Math.cos(time * 0.5), 1)
        .scale(1.1, 0.6),
        // .r(),
      1,
      1,
      () => (time * 1) % 2
    )).modulate(noise(4).scale(1.5,0.8,2).modulateScale(
      shape(100, () => Math.sin(time * 0.5), 1)
        .scale(1.1, 0.6),
        // .r(),
      -0.5,
      2,
      () => (time * 1) % 2
    ))
  .out()



    voronoi(()=>mouse.x/24 * .5,()=> midFreq*3+90,0)
    .mult(osc(3,()=> midFreq * 3 + 1.1,()=>Math.sin(time/15)*.3+.08).saturate(4).kaleid(200))
    .mult(o0).modulate(o1,0.5)
    .modulate(s0)
    .add(o1,0.8)
    .scrollY(-0.05)
    .scale(0.99)
    .modulate(o1)
    .modulate(noise(()=>Math.sin(time)*.07+.2),()=>Math.sin(time)*.02+.1)

    
    .blend(s0, () => himidFreq * 35)
    .blend(o2).blend(o2).blend(o2).blend(o2).blend(o2).blend(o2)

    .scrollX(()=> scaler(mouse.x, 0, window.innerWidth, -0.05, 0.05), 0.0000)
    .scrollY(()=> scaler(mouse.y, 0, window.innerHeight, -0.05, 0.05), 0.0000)
    

    .out(o2)

    render(o2)



  draw();
  }

function but2() {
  console.log('2 - bd08 - flesh')

  video.src = "./videos/2-BD08-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )


  src(s0)
    .scale(()=>dataArray[1]/255*1.1+.2)
    // .contrast(1.3)
    .saturate(()=>dataArray[3]/255* 2 + 0.2)

    // .rotate(({time})=> 6+time*.1)
    .modulate(o0,.02)
    .blend(o0)
    .scale(1.02, 1.02)
    .rotate (()=>mouse.x * .006 + .0002)
      .modulate(o1)
    // .modulate(o1)
    .out(o0)


voronoi(3)
.modulate(noise(()=>mouse.y/1236*6))
// .modulateRepeat(o1, .3,.3,()=>mouse.y/1236 * 0.01,()=>mouse.y/1236 * 0.1 )
.out(o1)


  render(o0)
  draw();
}

function but3() {
  console.log('3 - bd07 - salt')

  video.src = "./videos/3-BD07-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  // .saturate(.4)
  // .brightness (.6)
  // .contrast(1.6)
  // .rotate(()=>dataArray[3]*2)

  .scale(()=>dataArray[1]/255*.1+1)
  // .rotate(({time})=>5+2*Math.sin(time*.03),.01)
  .modulate((o2), ()=> dataArray[3]/255*2)
  .blend(o0)
  .out(o0)

   shape(99,.15,.5).color(0,1,2)
  .diff( shape(5,.5,0).scrollX(.05).scale( () => dataArray[3]/255*2+.8).rotate( () => dataArray[3]/255*4+4).color (() =>  .1 + mouse.x * 0.0005,0 + mouse.x * 0.0005),.5 + mouse.x * 0.0005).color(.1,.2,.5)
  .diff( shape(3,.4,.002).scrollX(.10).scale( () => dataArray[1]/255*-2,.8).rotate( ()=> dataArray[1]/255*-1.2-2).rotate(() => Math.sin(time)+1*-2).color(.1,0,.5) )
  .diff( shape(5,.3,.002).scrollX(.15).scale( () => dataArray[0]/255*2+.8).rotate( ()=> dataArray[3]/255*8+1).rotate(() => Math.sin(time)+3*2).color(.1,0.1,.5) )
  .diff( shape(5,.2,.002).scrollX(.20).scale( () => dataArray[3]/255*-2+1.8).rotate( ()=>dataArray[3]/255*-4-4).rotate(() => Math.sin(time)-1*-2).color(.3,0,.3) )
  .diff( shape(6,.1,.002).scrollX(.25).rotate( ()=>time/50 ).color(.1,0,.5) )

  .modulateScale(
    shape(3,.5,0).scrollX(.05).rotate( ()=>time/10 ), ()=>(Math.sin(time/3)*.2)+.2 )
  .scale(0.2, () => (1.05 + 0.1 * Math.sin(0.05*time)))
  .scale(()=> 0.7 + mouse.y * 0.0045,.6,1)
  .modulate(o2,.1)
  .mult(gradient(({time})=>0.2+.2*Math.sin(time*.03),({time})=>0.05+1*Math.sin(time*.01),({time})=>0.3+2*Math.sin(time*.05)))
 .saturate(()=> -.2 + mouse.x * .0008)

  .out(o2)

  src(o0)
  .diff(o2,.7)
  .modulateRotate(o0,.01)
  // .invert()
  .out(o3)

// src(s0)
// .out(o1)

  render(o3)


draw();

}

function but4() {
  console.log('4 - e02 - mass')

  video.src = "./videos/4-E02-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )


  src(s0)
  // .rotate (.1,() => Math.sin(time * 0.00008))
  .scale(1.4)
  .scale(  () => dataArray[3]/255*1+.2 )
  .add(o1,0.1)
  .modulate(s0,.025)
  .blend(o0)
  .modulate(o2,.03)
  .modulate(o1, .5)
  // .modulate(o1, .03)
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
  .repeat(()=>mouse.x/1236*3+1,3, ()=>dataArray[0]/255*2+1, ()=>dataArray[1]/255*5)
  .scrollY(.5,()=>dataArray[4]/255 * .005 + 0.01)
  .layer(
    src(o1)
    .mask(o0)
    .luma(.01, .1)
    .invert(.2)
  )

  .out(o2)




  render(o1)
  draw();

}

function but5() {
  console.log('5 - clastic - melt')

  video.src = "./videos/5-CLASTIC-crf22.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  // src(s0)
  // // .saturate(.4)
  // // .contrast(()=>mouse.x * .0006+.3 )
  // // .rotate(()=>dataArray[2]*4)
  // // .rotate(({time}) => 5.0+2*Math.sin(time*.03),.01)
  // // .modulate((o2), () => dataArray[0]*1.2)
  // // .blend(o0)
  // .out(o0)

  src(o0)
    .layer(
      src(s0)
        // .thresh(0.3,0.7)
        .contrast(1.1)
        .mask(shape([3,6,9,5]).luma(0.5,0.6)
  .scale([1.9,0.79].smooth())
  )
    )
    .scale(1.01)
    .out(o0)



  voronoi(2,0.3,0.2).shift(0.5)
  // .modulatePixelate(noise(4,0.2),32,2)
  .scale(()=>1+(Math.sin(time*.25)*0.05))
  .scale( () => 3*himidFreq, () => 3*himidFreq)
  .scale(()=> norm(0.25*mouse.x, 0, window.innerWidth),()=>mouse.y * 0.002 + 0.00001)

  .out(o1)


  src(o0)
  // .mask(o1,.4)
  // .modulateHue(o0,()=>dataArray[1]/255*.1+1)
  // .luma(.1)
   .modulate(o1, .4)
  .out(o3)



  render(o3)
  draw();

}

function but6() {
  console.log('6 - fall in sync - ripples')

  video.src = "./videos/6-FALL-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
    // .saturate(0.15)
    // .contrast(3)
    .add(src(o0)
          .scrollX([0.05,-0.05].fast(0.03).smooth(1))
          .scale([1.03,1.03].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1)),0.85)
          // .blend(o0)

    .out(o0)

  osc(7)
    .posterize (() => (.2 + mouse.x * 0.006)+1)
    .modulate(noise(()=>dataArray[3]/255*3+1.5))
    .out(o1)

  voronoi(()=>Math.sin(time*.01)*1.2+5, ()=>mouse.y * .0004+.05, 100)
    .scrollX(({time})=>Math.sin(time*.05)*-0.7-1)
    .scrollX(()=>dataArray[0]/255*-.3)
    .colorama(1)
    .diff(o1)
    .thresh()
    .out(o2)

  src(o0 )
  .modulate(o0)
    // .modulateRotate(o0)
    .modulate(o2,.1)
    .out(o3)

  render(o3)
  draw();

}

function but7() {
  console.log('7 - telematic - copper')

  video.src = "./videos/7-TELEMATIC_crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)

  .scale(()=> dataArray[2]/255*.2+1)
  .color(()=>Math.sin(time*0.03),()=>Math.sin(time*0.17),()=>Math.sin(time*0.07))
  // .rotate(()=>mouse.x*.0003+.000001,Math.sin(time) )
  .color(()=>mouse.y * 0.001,()=>mouse.y * 0.0008)
  .brightness(()=>mouse.x * .00015 + 0.0000001)

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
  console.log('8 - bd01 - asociaciones')

  video.src = "./videos/8-BD01-crf23.mp4"
  //  "./videos/9-BD02-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

// AGUA
  osc(0.50,1.25).mult(shape(12,20.09).rotate(()=>Math.random()*15))
    .diff(osc(() => loFreq ))
    .add(shape(3,22).rotate(()=>Math.random()*15).blend(gradient(1.6)))
    .modulate(noise(6)
              .modulate(noise(2).scrollY(()=> himidFreq * 5, 0.0625)))
    .color(17,-90.5,0.75).hue(()=>time*.005)
    .out(o1)


// VIDEO
  src(s0)
  .kaleid(()=>mouse.y*.01+.03)
  .scale( () => scaler(mouse.x, 0, window.innerWidth, 0.25, 1.5), scaler(mouse.x, 0, window.innerWidth, 0.25, 1.5))
  .scrollX(({time})=>4+3*Math.sin(time*.002))
  .modulate(o1)
  .mult(o1,.6)

  .saturate(1.5)
  .modulate(o2,.002)

  
  .out(o2)

render(o2)
draw();

}




function but9() {
  console.log('9 - bd02 - ensamblaje')

  video.src = "./videos/9-BD02-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  // osc(({time})=>5.0+2*Math.sin(time*.03),.02)
  // .scrollX(() => dataArray[0]/255*4+5 )
  // .modulateRepeat(o1)
  // .modulateScale(osc(2,4))
  // .blend(o0)
  // .out(o0)


  src(s0)
  // .contrast(()=>mouse.x/1236*0.01+.03)
  .color(1,0,0)
  // .scrollX(0.03,0.1)
  // .scrollX(()=>dataArray[0]*.0004+0.00004, ()=>dataArray[0]*-.0004-0.00004)
  .scrollX(()=> himidFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0)
  .scrollY(()=> himidFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0)
  // .scrollX(()=> 0.1 * himidFreq, 0)

  .add(src(s0).color(0,1,0)
  .scrollX(()=> 4 * hiFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0)
  .scrollY(()=> 4 * hiFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0)
  // .scale(()=>dataArray[0]*0.0007+.1)
  // .modulate(src(s0),.03)
)
  .add(src(s0).color(.5,.5,0)
  .scrollX(()=> 2 * loFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0)
  .scrollY(()=> 3 * loFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0)
  // .scrollX( () => -0.1* loFreq, 0)
    )

  .add(src(s0).color(0,0,1)
    // .scrollX(-0.03,0.3)
    .scrollX(()=> midFreq * scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1), 0)
    .scrollY(()=> 3 *  midFreq * scaler(mouse.y, 0, window.innerHeight, -0.1, 0.1), 0)
    )
  .out(o0)


  src(o0)
  // .modulate(o0)
    // .modulateRotate(o0, scaler(mouse.x, 0, window.innerWidth, -0.1, 0.1))

  //  .modulate(o0,()=>mouse.y/1236*.002+.0001)

.out(o2)



  src(o0)
  .scale(() => dataArray[3]/255*.3+1.3)
  // .scrollX(({time})=>4+3*Math.sin(time*.2))
  .blend(o1,6)
  .saturate(0.2)
  .contrast(2)
  // .mult(o2,()=>mouse.y*.001+.2)
  .modulate(s0, .03)
  .out(o3)


render(o2)
draw();

speed=.15

}