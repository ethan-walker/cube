const bg_input = document.querySelector("#bg-upload");

const cube = document.querySelector(".cube");

bg_input.onchange = function() {
	files = bg_input.files
	url = URL.createObjectURL(files[0]);
	console.log(url);
	cube.style.setProperty("--bg", `url(${url})`)
}