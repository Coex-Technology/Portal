const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('active');
    btnSwitch.classList.toggle('dark');
});