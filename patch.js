// Hydra
const hydra = new Hydra();

// Video 
const video = document.createElement("video");
video.id="allende";
video.autoplay = true;
video.crossOrigin = "anonymous";
video.loop = true;
video.muted = false;


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

    const context = new ( AudioContext || webkitAudioContext )();
    analyser = context.createAnalyser();
    source = context.createMediaElementSource(video);
    
    source.connect(analyser);
    analyser.connect(context.destination);
    
    analyser.fftSize = 32;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  
  }
);







function draw() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    loFreq = dataArray[0]/255;
    lomidFreq = dataArray[1]/255;
    midFreq = dataArray[2]/255;
    himidFreq = dataArray[3]/255;
    hiFreq = dataArray[4]/255;
};


// Video muting
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






// Scenes
// function but1() {

//     video.src = "./bd2-test.mp4"
//     video.play().then( () => s0.init({src:video, dynamic:true})) 
//     context.resume()

//     src(s0)
//     .rotate (.1,() => Math.sin(time * 0.00008))
//     .scale(1.4)
//     .scale(  () => fft[2]/256 )
//     .diff(o1,0.3)
//     .modulate(s0,.025)
//     .blend(o0)
//     .modulate(o2,.03)
//     .saturate( ()  => fft[5]/256 * 4 )
//     .out(o0)

//     render(o0) 

//     draw();

// }



function but1() {
  console.log('1 - e01 - window');

  // video.src = "./videos/e01-small.mp4"
  video.src = "./videos/1-E01-crf23.mp4"
  

  video.play().then( () => s0.init({src:video, dynamic:true}))



//   solid(0)
//
//   .add(
//     shape(3)
//      .rotate(0.4, 0.4)
//      .color(.1,.3,.4)
//
//      .modulateScale( noise(()=>lomidFreq * 15 + 3, ()=>lomidFreq * 15 + .6), ()=>lomidFreq * 5 + 0.4)
//     )
//
//   .blend(o1, .7)
//   .blend(o1, .5)
//   .modulate(s0)
// //   .blend(o0)
//
//   .out(o1)



solid(1,1,1)
.layer(osc(500).modulateScale(
    shape(100, () => Math.cos(time * 0.5), 1)
      .scale(1.1, 0.6)
      .r(),
    1,
    1,
    () => (time * 1) % 2
  )).modulate(noise(4).scale(1.5,0.8,2).modulateScale(
    shape(100, () => Math.sin(time * 0.5), 1)
      .scale(1.1, 0.6)
      .r(),
    -0.5,
    2,
    () => (time * 1) % 2
  ))
.out()


// .mult(osc(3,()=> midhiFreq * 3 + 1.1,()=>Math.sin(time/15)*.3+.08).saturate(4).kaleid(200))

  voronoi(()=>mouse.x/4 * .5,()=> midFreq*3+90,0)
  .mult(osc(3,()=> 0 * 3 + 1.1,()=>Math.sin(time/15)*.3+.08).saturate(4).kaleid(200))
  .mult(o0).modulate(o1,0.5)
  .modulate(s0)
  .add(o1,0.8)
  .scrollY(-0.05)
  .scale(0.99)
  .modulate(o1)
  .modulate(noise(()=>Math.sin(time)*.07+.2),()=>Math.sin(time)*.02+.1)

  .blend(s0, ()=>mouse.y * .0009)
  .blend(o2).blend(o2)

  .scrollX(()=>mouse.x * .0000005,.00001)
  .scrollY(()=>mouse.y * .00000051,.000001)

  .out(o2)

  render(o2)



draw();
}

function but2() {
  console.log('2 - bd08 - flesh')

  // video.src = "./videos/bd08-small.mp4"
  video.src = "./videos/2-BD08.mp4"

  video.play().then( () => s0.init({src:video, dynamic:true}) )


  src(s0)
    .scale(()=>dataArray[1]/255*1.5+.2)
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

  // video.src = "./videos/bd07-small.mp4"
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

  // video.src = "./videos/e02-small.mp4"
  video.src = "./videos/4-E02-crf23.mp4"

  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  // .rotate (.1,() => Math.sin(time * 0.00008))
  .scale(1.4)
  .scale(  () => dataArray[3]/255*1.2+.5 )
  .add(o1,0.1)
  .modulate(s0,.025)
  .blend(o0)
  .modulate(o2,.03)
  .modulate(o1, .5)
  // .modulate(o1, .03)
  .out(o0)

  src(s0)


  shape(()=>Math.sin(time)+1*3, .5,.01)
  .repeat(5,3, ()=>dataArray[0]/255*2, ()=>dataArray[1]/255*2)
  .scrollY(.5,0.1)
  .layer(
    src(o1)
    .mask(o0)
    .luma(.01, .1)
    .invert(.2)
  )
  .modulate(o0,.02)

  .out(o2)


  shape(3)
  .scale(()=>mouse.y * 0.0008 + .1 )
  .repeat(8,3)
  .modulateScale(osc(8).rotate(Math.sin(time)),.5)
  .scale(  () => dataArray[2]/255*5)
  .modulateRotate(osc(20, 0).thresh(0.1, 0.84), () => 0.1 + mouse.x * 0.002)
  .modulate(o1,.001)
  .blend(o1)
  .out(o1)

  shape(2,.001).luma(.8).thresh().invert().modulate(noise(10,.2),.01)

        .layer(shape(2,.001).luma(.8).thresh().invert().scrollY(.025).modulate(noise(9,.1),.025))

         .layer(shape(2,.001).luma(.8).thresh().invert().scrollY(-.025).modulate(noise(7,.3),.025))

         .rotate(Math.PI/2)

         .kaleid(10).scale(.75,100,1).color(0,0,0)

        .out(o3)

  //hush()

  >>


  render(o0)
  draw();

}

function but5() {
  console.log('5 - clastic - melt')

  // video.src = "./videos/clastic-small.mp4"
  video.src = "./videos/5-CLASTIC-crf23.mp4"

  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  // .saturate(.4)
  // .contrast(()=>mouse.x * .0006+.3 )
  // .rotate(()=>dataArray[2]*4)
  // .rotate(({time}) => 5.0+2*Math.sin(time*.03),.01)
  // .modulate((o2), () => dataArray[0]*1.2)
  // .blend(o0)
  .out(o0)





  voronoi(2,0.3,0.2).shift(0.5)
  .modulatePixelate(voronoi(4,0.2),32,2)
  .scale(()=>1+(Math.sin(time*12.5)*0.05))
  .scale(()=>dataArray[1]/255 * .8 + .751)
  .scale(()=>mouse.x * 0.002 + 0.2,()=>mouse.y * 0.002 + 0.1)

  .out(o1)


  osc(4, ()=> dataArray[0]/255*.2-.1, 10)
  .scrollY( ()=>0.5 + mouse.y * 0.04,.6,.1)
  .out(o2)


  src(o0)
  .mult(o2,.4)
  // .modulateHue(o0,()=>dataArray[1]/255*.1+1)
  .luma(.1)
  .modulateScrollY(o1, .4)
  .out(o3)



  render(o3)
  draw();

}

function but6() {
  console.log('6 - fall in sync - ripples')

  // video.src = "./videos/fall-small.mp4"
  video.src = "./videos/6-FALL-crf23.mp4"
  
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
    // .saturate(0.15)
    // .contrast(3)
    .add(src(o0)
          .scrollX([0.05,-0.05].fast(0.1).smooth(1))
          .scale([1,1].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1)),0.85)
          // .blend(o0)

    .out(o0)

  osc(7)
    .posterize (() => (1 + mouse.x * 0.006)+1)
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

  // video.src = "./videos/telematic-small.mp4"
  video.src = "./videos/7-TELEMATIC_crf23.mp4"

  
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  src(s0)
  .scale(()=> dataArray[2]/255*.2+1)
  .color(()=>Math.sin(time*0.03),()=>Math.sin(time*0.17),()=>Math.sin(time*0.07))
  // .rotate(()=>mouse.x*.0003+.000001,Math.sin(time) )
  .color(()=>mouse.y * 0.001,()=>mouse.y * 0.0008)
  .out(o0)

  src(o0)
  .diff(src(o3)
  .scrollY(0, [-.0001, 0.1].fast(0.004)))
  .brightness([-0.029, -.17].smooth().fast(0.21))
  .out(o3)

  render(o3)
  draw();

}


function but8() {
  console.log('8 - bd01 - asociaciones')

  // video.src = "./videos/bd01-small.mp4"
  video.src = "./videos/8-BD01-crf23.mp4"
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  osc(3,()=> dataArray[4]/255*.03 )
  .rotate(1.4,.2)
  .add(osc(3,.2))
  .out(o0)

  osc(0.50   ,1.25).mult(shape(12,20.09).rotate(()=>Math.random()*15))
    .diff(osc(()=>dataArray[0]/255*.1+03))
    .add(shape(3,22).rotate(()=>Math.random()*15).blend(gradient(1.6)))
    .modulate(noise(6)
              .modulate(noise(2).scrollY(()=> dataArray[2]/255*5,0.0625)))
     .blend(o0)
    .color(17,-90.5,0.75)
    .out(o1)

  src(s0)
  .blend(src(o0).rotate(Math.PI/2).scale(1,1.8,1).invert().repeat(10,10),.1)
  .scale(() =>  mouse.x * 0.002+ .3)
  .rotate(()=>dataArray[3]/255*.002*Math.sin(time*.2)+.003)
  .modulate(o1)
  .rotate(()=> dataArray[0]/255*-.3+-.3 )
  .kaleid(()=>mouse.y*.001+1)
  .scrollX(({time})=>4+3*Math.sin(time*.002))
  .saturate(0.2)
  // .contrast(2)
  .modulateRotate(noise(.2, ()=> dataArray[3]/255*-.02 ))
  .modulate(o2,.002)
  // .blend(o3)
  .out(o2)

  gradient(.2,.03,2)
  .color(.2,.1,.4)
  .saturate(()=>dataArray[1]/255*.6+0.2)
  .mask(o1)
  .out(o3)

render()
draw();



}
function but9() {
  console.log('9 - bd02 - ensamblaje')

  // video.src = "./videos/bd02-small.mp4"
  video.src = "./videos/9-BD02-crf23.mp4"
  
  video.play().then( () => s0.init({src:video, dynamic:true}) )

  osc(({time})=>5.0+2*Math.sin(time*.03),.02)
  .scrollX(() => dataArray[0]/255*4+5 )
  .modulateRepeat(o1)
  .modulateScale(osc(2,4))
  .blend(o0)
  .out(o0)

  osc(({time})=>4+3*Math.sin(time*.05),.02)
  .scale(  () => dataArray[0]/255*2.5+.5 )
  .scrollX(() => dataArray[3/255]*-.1+.2 )
  .rotate (({time})=> time*.01)
  .rotate (() => mouse.y *.008 + 1.5)
  .blend(o1,.25)
  .out(o1)

  osc(3,.7,() => mouse.x * 0.0028 )
  .kaleid()
  .mask(o0)
  .out(o2)

  src(s0)
  .scale(() => dataArray[3]/255*.8+1.3)
  .scrollX(({time})=>4+3*Math.sin(time*.2))
  .saturate(0.2)
  .contrast(2)
  .modulate(s0, .08)
  .mult(o2,()=>mouse.y*.001+.2)
  .modulate(s0, .03)
  .out(o3)


render(o3)
draw();

speed=.15

}

