function contact() {
	let content = document.querySelector('#content');
	content.innerHTML = "";
	let contactDiv = document.createElement('div');
	content.appendChild(contactDiv);

	let contactHeader = document.createElement('h1');
	contactHeader.innerHTML = 'Contact Us';
	contactDiv.appendChild(contactHeader);

	let email = document.createElement('p');
	email.innerHTML = "Email: this@that.com";
	contactDiv.appendChild(email);
}

export {contact};