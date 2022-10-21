const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const box = document.querySelector('.error');
    box.classList.toggle('active');
});