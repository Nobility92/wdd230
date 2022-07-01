const direct = 'https://nobility92.github.io/wdd230/chamber/data.json';
const company = document.querySelector('#company');

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
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let image = document.createElement('img');

      image.setAttribute('src', company.logo);
      h2.innerHTML = `${company.name}`;
      p.innerHTML = `Address: ${company.address} <br>Phone Number: ${company.phoneNumber} <br> Website: ${company.website}`;
     
      
      image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
  
      card.append(image);
      card.append(h2);
      card.append(p);
      
      company.append(card);
  
    });
  }
  getCompany();