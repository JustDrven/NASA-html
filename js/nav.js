/*
    Navigation bar button 
*/

const button = document.getElementById('button');
const nav = document.querySelector('nav ul');

button.addEventListener('click', () => {
    nav.classList.toggle('active');
});

/* 
    Loading screen
*/

const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    loading.classList.add('active')
});