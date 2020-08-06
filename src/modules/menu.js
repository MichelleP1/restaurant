function menu() {
	let content = document.querySelector('#content');
	content.innerHTML = "";
	let menuContent = document.createElement('div');
	content.appendChild(menuContent);

	let menuHeader = document.createElement('h1');
	menuHeader.innerHTML = 'Menu';
	menuContent.appendChild(menuHeader);

	let pineapple = document.createElement('p');
	pineapple.innerHTML = "pineapple";
	menuContent.appendChild(pineapple);
}

export {menu};