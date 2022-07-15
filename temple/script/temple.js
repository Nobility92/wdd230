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
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', details.image);
        image.setAttribute('alt', `picture of ${details.name}`);
        h3.innerHTML = `${details.name}`;
        h4.innerHTML = `Address: ${details.address}`;
        p.innerHTML = `<strong> Announced: ${details.announced} <br> Groundbreaking: ${details.groundbreaking} <br> Dedicated: ${details.dedication} </strong>`;
        card.append(image);
        card.append(h3);
        card.append(h4);
        card.append(p);
        
        temp.append(card);
       
    });
}
getTemple();
