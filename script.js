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

// Opening the model on clicking the button.
for(let i =0; i < btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click', openModel)
};

// closing model on clicking the close button. 
btnCloseModal.addEventListener('click', closeModel);
// closing event on clicking outside the overlay(model area).
overlay.addEventListener('click', closeModel);

// closing the model on clicking an perticular key when model is open.
document.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModel();
    }
});