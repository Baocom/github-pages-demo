const button = document.querySelector('#alert');

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.alert('Hi :)');
});
