const activeNavItem = document.querySelector('.nav-link');

if (activeNavItem) {
	activeNavItem.onClick = function () {
		activeNavItem.classList.remove('active');
		activeNavItem.classList.add('active');
	};
}

function onClickMenu() {
	document.getElementById('menu').classList.toggle('change');
	document.getElementById('nav').classList.toggle('change');
	document.getElementById('menu-bg').classList.toggle('change-bg');
	document.getElementById('content').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
}

function onClickBtn1() {
	document.getElementById('project-bg').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project2').classList.toggle('blur');
	document.getElementById('project3').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
	document.getElementById('project-bg-2').classList.add('hide');
	document.getElementById('project-bg-3').classList.add('hide');
}

function onCloseBtn1() {
	document.getElementById('project-bg').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project2').classList.toggle('blur');
	document.getElementById('project3').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
}

function onClickBtn2() {
	document.getElementById('project-bg-2').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project1').classList.toggle('blur');
	document.getElementById('project3').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
	document.getElementById('project-bg').classList.add('hide');
	document.getElementById('project-bg-3').classList.add('hide');
}

function onCloseBtn2() {
	document.getElementById('project-bg-2').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project1').classList.toggle('blur');
	document.getElementById('project3').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
}

function onClickBtn3() {
	document.getElementById('btn3').classList.toggle('change');
	document.getElementById('project-bg-3').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project2').classList.toggle('blur');
	document.getElementById('project1').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
	document.getElementById('project-bg').classList.add('hide');
	document.getElementById('project-bg-2').classList.add('hide');
}

function onCloseBtn3() {
	document.getElementById('btn3').classList.toggle('change');
	document.getElementById('project-bg-3').classList.toggle('project-change');
	document.getElementById('title').classList.toggle('blur');
	document.getElementById('circles-grid').classList.toggle('blur');
	document.getElementById('footer').classList.toggle('blur');
	document.getElementById('project2').classList.toggle('blur');
	document.getElementById('project1').classList.toggle('blur');
	document.getElementById('btn1').classList.toggle('blur');
	document.getElementById('btn2').classList.toggle('blur');
	document.getElementById('btn3').classList.toggle('blur');
	document.getElementById('logo').classList.toggle('blur');
	document.getElementById('menu').classList.toggle('blur');
}
