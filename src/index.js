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

function createNav() {
    content.appendChild(nav);
    nav.appendChild(navHomepage);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);
}

createNav();
navHomepage.classList.add('current');

let navLinks = document.querySelectorAll('a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('current')) {
            if (link.textContent == 'Home') {
                content.innerHTML = '';
                createNav();
                introduction();
                navHomepage.className = 'current';
                navMenu.className = '';
                navContact.className = '';
            } else if (link.textContent == 'Menu') {
                content.innerHTML = '';
                createNav();
                menu();
                navHomepage.className = '';
                navMenu.className = 'current';
                navContact.className = '';
            } else if (link.textContent == 'Contact') {
                content.innerHTML = '';
                createNav();
                contact();
                navHomepage.className = '';
                navMenu.className = '';
                navContact.className = 'current';
            }
        }
    })
})
introduction();
