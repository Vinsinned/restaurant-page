import "./style.css";

function introduction() {
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    let specialPara = document.createElement('p');
    let image = document.createElement('img');
    let biography = document.createElement('p');
    let description = document.createElement('p');
    header.textContent = 'Emancipation';
    header.className = 'title';
    specialPara.textContent = 'What Freedom Tastes Like';
    specialPara.className = 'title';
    specialPara.id = 'special-paragraph'
    image.id = 'george-washington';
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
    image.alt = 'George Washington, Executive Chef';
    biography.textContent = `George Washington, born Feburary 22, 1732, was most notably known for being the 1st president of the United 
    States of America, freeing America from the British with the Revolutionary War and also making the four year terms for every President.
    Although George Washington owned slaves, and tried to assimilate Native Americans, in an alternate universe, he is the 
    greatest chef to grace America and free the people. He is most notably known for surpassing french techiniques and liberating food art while oppressing them.`;
    description.textContent =  `Here at Emancipation, we will take you through the history of America through foods from different times and decades during the United States' life. From slavery and racism
    against African people to calling Middle Easterns terrorists and Donald's Trump racism against China, this will be a one of a kind experience that everyone must try
    at least once in their life. You will be seated at the White House's most extravagent chair and will be served food on a golden plate fit for only the richest. Whilst
    eating to your heart's content, you will have the luxury to look down upon minorities and middle class citizens to flavor your food. Taste freedom and power now.`;
    let footer = document.createElement('footer');
    let signature = document.createElement('p');
    let chefName = document.createElement('p');
    signature.textContent = 'Signed, The Founding Fathers';
    chefName.textContent = 'Executive Chef: John Smith';
    content.appendChild(header);
    content.appendChild(specialPara);
    content.appendChild(image);
    content.appendChild(biography);
    content.appendChild(description);
    content.appendChild(footer);
    footer.appendChild(signature);
    footer.appendChild(chefName);
}

export default introduction