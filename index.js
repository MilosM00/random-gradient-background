"use strict";


const buttonChangeBackground = document.querySelector(`.change-background`);
const inputFirst = document.querySelector(`.input-first`);
const inputSecond = document.querySelector(`.input-second`);
const buttonCopyFirst = document.querySelector(`.copy-first`);
const buttonCopySecond = document.querySelector(`.copy-second`);
const body = document.querySelector(`body`);

let x;
let y;
const randomNumers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const radnomColorOne = () => {
    x = `rgb(${randomNumers(0, 255)}, ${randomNumers(0, 255)}, ${randomNumers(0, 255)})`;
};

const radnomColorTwo = () => {
    y = `rgb(${randomNumers(0, 255)}, ${randomNumers(0, 255)}, ${randomNumers(0, 255)})`;
};

buttonChangeBackground.addEventListener(`click`, () =>{
    changeBackground();
});

body.addEventListener(`keypress`, (e) =>{
    if (e.key === 'Enter') {
        changeBackground();
      }
});

buttonCopyFirst.addEventListener(`click`, () =>{
    inputFirst.select();
    document.execCommand(`copy`);
});

buttonCopySecond.addEventListener(`click`, () =>{
    inputSecond.select();
    document.execCommand(`copy`);
});

const changeBackground = () =>{
    radnomColorOne();
    radnomColorTwo();

    body.style.background = `linear-gradient(to right, ${x}, ${y})`;
    inputFirst.value = x;
    inputSecond.value = y;
}