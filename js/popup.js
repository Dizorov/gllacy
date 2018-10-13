var writeUs = document.querySelector('.modal-write-us__container_overlay'),
	writeUsOpener = document.querySelector('.contacts-block__button'),
	writeUsCloser = document.querySelector('.modal-write-us__close-button');

writeUsOpener.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.add('modal-write-us_is-showed');
})

writeUsCloser.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.remove('modal-write-us_is-showed');
})