const bar = document.getElementById('bar');
const nav = document.querySelector('#header ul');
const close = document.querySelector('#header .close');

bar.onclick = () => {
    nav.classList.add('active');
}
close.onclick = () => {
    nav.classList.remove('active');
}


