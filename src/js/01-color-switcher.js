const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let colorRandom;

refs.startBtn.addEventListener('click', e => {
  colorStart();
  refs.startBtn.disabled = !e.target.checked;
});

refs.stopBtn.addEventListener('click', e => {
  colorStop();
  refs.startBtn.disabled = e.target.checked;
});

const colorStart = () => {
  colorRandom = setInterval(() => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.background = color;
  }, 1000);
};

const colorStop = () => {
  clearInterval(colorRandom);
};
