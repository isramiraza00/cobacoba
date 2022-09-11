const menuToogle = document.querySelector('.menu-toogle input');
const header = document.querySelector('header ul');

menuToogle.addEventListener('click', function() {
	header.classList.toggle('slide');
});