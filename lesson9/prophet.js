const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets(){
  let response = await fetch(requestURL);
  if(response.ok){
    let data = await response.json();
    //console.log(data);
    buildcards(data);
  }else{
    throw Error(response.statusText);
  }
}

function buildcards(data){
  data.prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let image = document.createElement('img');

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date of Birth: ${prophet.birthdate} <br>Place of Birth: <strong>${prophet.birthplace}</strong>`;
   
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);

    card.append(h2);
    card.append(p);
    card.append(image);
    cards.append (card);


  });
}
  getProphets();