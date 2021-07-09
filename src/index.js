import introduction from "./homepage";
import menu from "./menu";
import contact from "./contact";

let nav = document.createElement('nav');
let navHomepage = document.createElement('a');
let navMenu = document.createElement('a');
let navContact = document.createElement('a');
navHomepage.textContent = 'Home';
navMenu.textContent = 'Menu';
navContact.textContent = 'Contact';

content.appendChild(nav);
nav.appendChild(navHomepage);
nav.appendChild(navMenu);
nav.appendChild(navContact);

let navLinks = document.querySelectorAll('a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        console.log('0')
    })
})
introduction();
