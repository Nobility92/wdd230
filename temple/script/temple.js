//for hamburger menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

//for last modified
const d = new Date();
let datetime = d.getFullYear()+'/'+d.getMonth()+'/'+d.getDate()+ '  ' + d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
document.getElementById("update").innerHTML = datetime;

//for temple page display
const temple = 'https://nobility92.github.io/wdd230/temple/temple.json';
const temp = document.querySelector('#temple-grid');

async function getTemple(){
    let response = await fetch(temple);
    if(response.ok){
        let data = await response.json();
        //console.log(data);
        displayTemple(data);
    }else{
        throw Error(response.statusText);
    }
}
function displayTemple(data){
    data.temples.forEach(details => {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', details.image);
        image.setAttribute('alt', `picture of ${details.name}`);
        h3.innerHTML = `${details.name}`;
        p1.innerHTML = `<strong>Address:</strong> ${details.address}`;
        p3.innerHTML = `<strong>Email:</strong> ${details.email}`;
        p2.innerHTML = `<strong> Announced: ${details.announced} <br> Groundbreaking: ${details.groundbreaking} <br> Dedicated: ${details.dedication} </strong>`;
        p4.innerHTML = `<strong>Services:</strong> ${details.services}`;
        p5.innerHTML = `<strong>Closure:</strong> ${details.closure}`;
        p6.innerHTML = `<strong>Notice:</strong> ${details.notice}`;
       
        card.append(image);
        card.append(h3);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        card.append(p6);
        
        temp.append(card);
        
    });
}

getTemple();
