import "./style.css";

function menu() {
    let content = document.querySelector('#content');

    let nav = document.createElement('nav');
    let homepage = document.createElement('a');
    let menu = document.createElement('a');
    let contact = document.createElement('a');
    homepage.textContent = 'Home';
    menu.id = 'current';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    content.appendChild(nav);
    nav.appendChild(homepage);
    nav.appendChild(menu);
    nav.appendChild(contact);

    let header = document.createElement('h1');
    let specialPara = document.createElement('p');
    header.textContent = 'Menu';
    specialPara.id = 'special-paragraph';
    specialPara.textContent = 'Taste the Freedom';

    content.appendChild(header);
    content.appendChild(specialPara)

    const foodItems = (image, alt, name, description, classs) => {
        const createMenu = () => {
            let div = document.createElement('div');
            let foodImage = document.createElement('img');
            let foodName = document.createElement('p');
            let foodDescription = document.createElement('p');
            div.className = 'menu';
            foodImage.src = image;
            foodImage.alt = alt;
            foodImage.className = classs;
            foodName.textContent = name;
            foodName.className = 'food-item';
            foodDescription.textContent = description;
            content.appendChild(div);
            div.appendChild(foodImage);
            div.appendChild(foodName);
            div.appendChild(foodDescription);
        }
        return {createMenu}
    }
    let spam = foodItems('https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-classic-12oz-420x420.png', 
    'A picture of a Spam can', 'World War II Spam',
    `During World War II, over 150 million pounds of spam were used in war,
    with soldiers using them for their main diet and also using the oil to lubricate guns
    and waterproof their boots. Spam was also a famous recipe back in the day,
    especially during the Great Depression when it was easy and cheap to make.`, 'image-left');
    let jello = foodItems('https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2016/06/22132117/DSC4156-728x509.jpg', 
    'A picture of a Jell-O shrimp', 'Vintage Shrimp Jello',
    `A classic 1950's recipe, this recipe is just as the name stated, shrimp covered by jello.
    Jello was definitely a favorite in the 50's as many recipe calls for this flavored gelatin 
     dessert. Not many restaurants will serve it nowadays, so be sure to enjoy this dish in it's most
      classical form!.`, 'image-right');
    let bbq = foodItems('https://cdn.vox-cdn.com/thumbor/mtU8UhpI-zsB_kolN7bzFirTB0Q=/0x0:2000x1333/1200x800/filters:focal(395x379:715x699)/cdn.vox-cdn.com/uploads/chorus_image/image/69096232/untitled_6564.0.jpg', 
    'A picture of a beef brisket', 'Texas BBQ Brisket',
    `Very fatty and unhealthy, the Texas style brisket is the epitome of modern U.S. cuisine.
    The fat makes the meat feel like that it's melting inside your mouth, and the hours of smoking 
    will make your brisket full of flavor the moment it is ready to be served.`, 'image-left');
    let applePie = foodItems('https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg', 
    'A picture of a person holding an apple pie', 'Mama\'s Apple Pie',
    `A comfort food to many American children, the famous apple pie brings you back into the dining table
    where you ate most of your childhood meals (hopefully). The apple pie is second to none to soul food,
     and it brings many comfort when eaten.`, 'image-right');
    let friedChicken = foodItems('https://www.melissassouthernstylekitchen.com/wp-content/uploads/2019/02/SouthernFriedChicken002.jpg', 
    'A picture of a fried chicken', 'Southern Fried Chicken',
    `A close rival with your mom's apple pie, Mama's fried chicken is a very fatty and 
    calming food that will make you want your mom's presence again. The crispy and crunchy exterior along with the
    juicy and flavorful interior will quickly make you a fan of this dish.`, 'image-left');
    spam.createMenu();
    jello.createMenu();
    bbq.createMenu();
    applePie.createMenu();
    friedChicken.createMenu();

    let footer = document.createElement('footer');
    let footerPara = document.createElement('p');
    footer.id = 'menu-footer';
    footerPara.textContent = 'More dishes coming soon...';

    content.appendChild(footer);
    footer.appendChild(footerPara)
}
export default menu