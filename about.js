console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Successful submission!");
}

// const catCompliments = document.querySelector('#mouse-passing-over');

// catCompliments.addEventListener('mouseover', () => {
//     catCompliments.onmousemove;
// });

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);