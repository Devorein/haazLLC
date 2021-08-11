var colors = ['#FDD79F',
	'#F5F5F5',
	'#797A7D',
	'#3B6A6C',
	'#354567',
	'#2589BD',
	'#FCB040',
	'#6A8E8F',
	'#C7C7C7'];

var allPaths = document.querySelectorAll('span.circle');

function reloadColors(elem) {
	allPaths.forEach(function recolor(elem) {
	elem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
}

function resetSpeed(elem) {
	allPaths.forEach(function speed(elem) {
			elem.style.animationDuration  = (Math.random() * (2 - 1) + 1) + "s";
			elem.style.animationDelay   = (Math.random() * (1 - 0) + 0) + "s";
		
	});
}

function stopMovement(elem) {
	clearInterval(autoReload)
	allPaths.forEach(function speed(elem) {
		elem.style.animation  = "none";
	});
}

reloadColors();
resetSpeed();

var randInterval = Math.floor(Math.random() * 3500) + 800;

console.log("Reloading every " + randInterval / 1000 + " seconds");

autoReload = setInterval(reloadColors, randInterval);
