import './style.css';

function contact() {
    let content = document.querySelector('#content');

    content.appendChild(nav);
    nav.appendChild(homepage);
    nav.appendChild(menu);
    nav.appendChild(contact);

    let header = document.createElement('h1');
    let note = document.createElement('p');
    let location = document.createElement('p');
    let image = document.createElement('img');
    let phoneNumber = document.createElement('p');
    let email = document.createElement('p');

    header.textContent = 'Contact Us';
    note.textContent = `We truly care about your experience here at Emancipation,
    so don't hesitate and call us now for any questions that might hinder
     this truly spectacular experience we will give you, and have fun!`;
    location.id = 'location';
    location.textContent = '1600 Pennsylvania Avenue NW Washington, D.C.';
    image.id = 'white-house';
    image.src = 'https://scontent.flas1-1.fna.fbcdn.net/v/t1.6435-9/140608661_108562901212562_2964454821707755021_n.png?_nc_cat=1&ccb=1-3&_nc_sid=973b4a&_nc_ohc=SklLCdq0I94AX8GVIuR&_nc_ht=scontent.flas1-1.fna&oh=b4ca9c816c50393c88e6c8e89eb24ea7&oe=60ED6D63';
    image.alt = 'A picture of the White House';
    phoneNumber.textContent = '702-IDK-WEST';
    email.textContent = 'emancipationofproclamation@gmail.com'

    content.appendChild(header);
    content.appendChild(note);
    content.appendChild(location);
    content.appendChild(image);
    content.appendChild(phoneNumber);
    content.appendChild(email);
}

export default contact