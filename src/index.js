// alert('hello world');
const donuts = require('./donuts.png');
require('./style.css');

home_btn = document.getElementById('home');
menu_btn = document.getElementById('menu');
contact_btn = document.getElementById('contact');
header = document.createElement('h1');
    header.innerHTML = 'Welcome to donuts Restaurant!';
    welcome = document.createElement('p');
    welcome.innerHTML = 'We serve the best donuts in town!';
    const donuts_img = new Image();
    donuts_img.src = donuts;
    content.appendChild(header);
    content.appendChild(welcome);
    content.appendChild(donuts_img);
home_btn.addEventListener('click', () => {
    content.innerHTML = '';
    header = document.createElement('h1');
    header.innerHTML = 'Welcome to donuts Restaurant!';
    welcome = document.createElement('p');
    welcome.innerHTML = 'We serve the best donuts in town!';
    const donuts_img = new Image();
    donuts_img.src = donuts;
    content.appendChild(header);
    content.appendChild(welcome);
    content.appendChild(donuts_img);
    });

menu_btn.addEventListener('click', () => {
    content.innerHTML = '';
    header = document.createElement('h1');
    header.innerHTML = 'Our Menu';
    menu = document.createElement('p');
    menu.innerHTML = 'We serve the best donuts in town!';
    content.appendChild(header);
    content.appendChild(menu);
    }

);

contact_btn.addEventListener('click', () => {
    content.innerHTML = '';
    header = document.createElement('h1');
    header.innerHTML = 'Contact Us';
    contact = document.createElement('p');
    contact.innerHTML = 'We are located at 123 Donuts Street, Donutsville, Donutland';
    content.appendChild(header);
    content.appendChild(contact);
    }

);

// content = document.getElementById('content');
// header = document.createElement('h1');
// header.innerHTML = 'Welcome to donuts Restaurant!';
// welcome = document.createElement('p');
// welcome.innerHTML = 'We serve the best donuts in town!';

// const donuts_img = new Image();
// donuts_img.src = donuts;
// content.appendChild(header);
// content.appendChild(welcome);
// content.appendChild(donuts_img);
