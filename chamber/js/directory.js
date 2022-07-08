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
      let h4 = document.createElement('h4');
      let h5 = document.createElement('h5');
      let h6 = document.createElement('h6');
      let p = document.createElement('p');
      let image = document.createElement('img');

      image.setAttribute('src', details.logo);
      image.setAttribute('alt', `picture of ${details.name}`);
      h3.innerHTML = `${details.name}`;
      h4.innerHTML = `${details.address}`;
      h5.innerHTML = `${details.phoneNumber}`;
      h6.innerHTML = `${details.website}`;
      p.innerHTML = `<strong>${details.level} </strong>`;
      //card.style.backgroundColor = '#89A1EF';
      card.style.border = '2px solid #89A1EF';
      h3.style.textShadow = '0 0 20px #001011';
      card.style.padding = '.75rem';
      h6.style.fontSize = '15px';
  
      card.append(image);
      card.append(h3);
      card.append(h4);
      card.append(h5);
      card.append(h6);
      card.append(p);
      
      comp.append(card);
  
    });
  }
  getCompany();

  //for the grid and list view

  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
//const display = document.querySelector("#company");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	comp.classList.add("grid");
	comp.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	comp.classList.add("list");
	comp.classList.remove("grid");
}
//for spotlight

