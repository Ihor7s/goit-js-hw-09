
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.classList.add('btn-start');
refs.stopBtn.classList.add('btn-stop');

const styleTimer = {
    intervalId: null,
    isActive: false,

    onClickBtnStart() {

        if (this.isActive) {
            return;
        }

        this.isActive = true;
        refs.startBtn.disabled = true;
        refs.stopBtn.disabled = false;

        this.intervalId = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    },

    onClickBtnStop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.disabled = false;
        refs.stopBtn.disabled = true;
    },
};

refs.startBtn.addEventListener('click', e => {
    styleTimer.onClickBtnStart();
})

refs.stopBtn.addEventListener('click', e => {
    styleTimer.onClickBtnStop();
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}