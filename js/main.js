"use strict";

function linkHide() {
	let link = document.getElementById("link-1");
	link.onclick = () => {
		link.innerHTML = "";
	};
}
linkHide();

//АНИМАЦИЯ ЦИФР ТАМ ГДЕ ЦЕНЫ 

// "elem" место где число будет менятся
// "n" старт отсчета
// "num" конечное число
// "step "размер шага изменения
// "time" время за которое будет происходить изменение
function showPrice(elem, n, num, step, time) {
	let p = document.querySelector('#' + elem);
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		p.innerHTML = n;
		if (n == num) {
			clearInterval(interval);
		}
	}, t);

}

window.addEventListener('scroll', function () {
	
	if (pageYOffset > 4000 && pageYOffset < 4050 || 
		pageYOffset > 5500 && pageYOffset < 5600 ||
		pageYOffset > 8870 && pageYOffset < 8970 ||
		pageYOffset > 9500 && pageYOffset < 9550) {

		showPrice('p-consul', 350, 630, 10, 4000);
		showPrice('p-viza', 15, 55, 5, 1000);
		showPrice('p-contract', 700, 1000, 10, 4000);
		showPrice('p-all', 1100, 1800, 50, 5000);
	}
});