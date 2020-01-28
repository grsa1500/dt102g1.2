"use strict"

//Läser in variabler
var menu = document.getElementById('menu-btn');
var nav = document.getElementById('nav');
var open = false;

//Eventlistener vid klick på meny
menu.addEventListener('click', openMenu);


//Kollar om menyn är öppen. Om inte öppen, öppnas den. Om öppen, stängs den.
function openMenu() {

	if (!open) {
		nav.style.display = "block";
		menu.innerHTML = "Stäng";
		open = true;
	}

	else {
		nav.style.display = "none";
		menu.innerHTML = "Meny";
		open = false;
	}
}