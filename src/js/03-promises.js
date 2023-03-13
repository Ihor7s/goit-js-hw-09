// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]'),
  formInput: document.querySelectorAll('input[type="number"]'),
};

for (let i = 0; i < refs.formInput.length; i += 1) {
  refs.formInput[i].classList.add('form-input');
};

refs.formEl.addEventListener('submit', submitCreatePromise);

function submitCreatePromise(e) {
  refs.button.disabled = true;
  e.preventDefault();

  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  const timeOut = delay + step * amount;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay} ms`);
         // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay} ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
    reset(timeOut);
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function reset(timeOut) {
  setTimeout(() => {
    refs.formEl.reset();
    refs.button.disabled = false;
  }, timeOut);
};