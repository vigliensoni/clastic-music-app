// Hydra
const hydra = new Hydra()

function but1() {
    // Video stuff
    const video = document.createElement("video")
    video.id="allende"
    video.autoplay = true
    video.crossOrigin = "anonymous"
    video.loop = true
    video.muted = false


    video.src = "./bd2-test.mp4"
    // playVideo()
    video.play().then( () => s0.init({src:video, dynamic:true})) 
    // console.log(video)


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

    // console.log(a.fft[3])

    var context = new ( AudioContext || webkitAudioContext )();
    var analyser = context.createAnalyser();
    var source = context.createMediaElementSource(video);

    source.connect(analyser);
    analyser.connect(context.destination);


    analyser.fftSize = 32;
    var bufferLength = analyser.frequencyBinCount;
    // console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);


    // Get a canvas defined with ID "oscilloscope"
    // const WIDTH = 300
    // const HEIGHT = 150
    // var canvas = document.getElementById("oscilloscope");
    // var canvasCtx = canvas.getContext("2d");
    // canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    function draw() {
        drawVisual = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        // canvasCtx.fillStyle = 'rbg(0, 0, 0)';
        // canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        // var barWidth = (WIDTH / bufferLength) * 1;
        // var barHeight;
        // var x = 0;
        // document.getElementById('values').innerText=dataArray[0]+", "+dataArray[1];

        // for(var i = 0; i < bufferLength; i++) {
        //     barHeight = dataArray[i] / 2;

        //     canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        //     canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        //     x += barWidth + 1;
        // }
    };
        
        


    draw();



}
