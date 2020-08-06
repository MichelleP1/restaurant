import {load} from './pageload';
import {contact} from './modules/contact';
import {menu} from './modules/menu';

let tabs = document.createElement('div');
let content = document.querySelector('#content');
document.body.insertBefore(tabs, content);

let homeButton = document.createElement('button');
homeButton.innerHTML = 'Home';
tabs.appendChild(homeButton);
homeButton.addEventListener('click', load);

let menuButton = document.createElement('button');
menuButton.innerHTML = 'Menu';
tabs.appendChild(menuButton);
menuButton.addEventListener('click', menu);

let contactButton = document.createElement('button');
contactButton.innerHTML = 'Contact';
tabs.appendChild(contactButton);
contactButton.addEventListener('click', contact);

load();



micronesia
vanuatu




