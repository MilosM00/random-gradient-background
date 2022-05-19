"use strict";


const buttonChangeBackground = document.querySelector(`.change-background`);
const inputFirst = document.querySelector(`.input-first`);
const inputSecond = document.querySelector(`.input-second`);
const buttonCopyFirst = document.querySelector(`.copy-first`);
const buttonCopySecond = document.querySelector(`.copy-second`);
const body = document.querySelector(`body`);


const randomNumers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const radnomColorOne = () => {
    return `rgb(${randomNumers(0, 255)}, ${randomNumers(0, 255)}, ${randomNumers(0, 255)})`;
};

const radnomColorTwo = () => {
    return `rgb(${randomNumers(0, 255)}, ${randomNumers(0, 255)}, ${randomNumers(0, 255)})`;
};

buttonChangeBackground.addEventListener(`click`, () =>{
    body.style.background = `linear-gradient(to right, ${radnomColorOne()}, ${radnomColorTwo()})`;
    inputFirst.value = radnomColorOne();
    inputSecond.value = radnomColorTwo();
});

buttonCopyFirst.addEventListener(`click`, () =>{
    inputFirst.select();
    document.execCommand(`copy`);
});

buttonCopySecond.addEventListener(`click`, () =>{
    inputSecond.select();
    document.execCommand(`copy`);
});