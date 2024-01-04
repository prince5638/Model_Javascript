'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = ()=>{
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i =0; i < btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click', openModel)
}

btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);