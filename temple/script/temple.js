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

//for temple homepage display
const temple = 'https://nobility92.github.io/wdd230/temple/temple.json';
const temp = document.querySelector('#temple-display');

async function getTemple(){
    let response = await fetch(temple);
    if(response.ok){
        let data = await response.json();
        console.log(data);
    }else{
        throw Error(response.statusText);
    }
}