console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form is submitted successfully!');
}

let logo = document.querySelector(`#img`)
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

logo.addEventListener(`mouseover`, () => {
alert(`Awesome user!`)
})