'use strict';
const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (audio) {
        audio.currenTime = 0;
        audio.play();
        drum.classList.add('playing');
    }
}

const removeTransition = (e) => {
    if (e.propertyName === 'transform') 
        e.target.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);