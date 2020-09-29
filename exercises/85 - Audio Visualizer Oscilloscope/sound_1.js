const WIDTH = 1500;
const HEIGHT = 1500;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvas_width = WIDTH;
const canvas_height = HEIGHT;

let analyser;

function handleError(err) {
  console.log(`You must give the browser access to your microphone!`);
}

async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);
  analyser.fftSize = 2 ** 10;
  const timeData = new Uint8Array(analyser.frequencyBinCount);
  console.log(timeData);
}

getAudio();
