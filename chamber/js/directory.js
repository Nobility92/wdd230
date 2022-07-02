const direct = 'https://nobility92.github.io/wdd230/chamber/data.json';
const comp = document.querySelector('#company');

async function getCompany(){
    let response = await fetch(direct);
    if(response.ok){
      let data = await response.json();
      //console.log(data);
      buildcompany(data);
    }else{
      throw Error(response.statusText);
    }
  }

  function buildcompany(data){
    data.company.forEach(details => {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let image = document.createElement('img');

      image.setAttribute('src', details.logo);
      image.setAttribute('alt', `picture of ${details.name}`);
      h3.innerHTML = `${details.name}`;
      p.innerHTML = `<strong>Address: ${details.address} <br>Phone Number: ${details.phoneNumber} <br> Website: ${details.website}</strong>`;
      card.style.backgroundColor = '#89A1EF';
      card.style.border = '1px solid #333';
      

      
     // image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
  
      card.append(image);
      card.append(h3);
      card.append(p);
      
      comp.append(card);
  
    });
  }
  getCompany();