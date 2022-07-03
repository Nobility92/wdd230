// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=3ed69c908e59f998daab448e2c715f0e';

apiFetch(url);

async function apiFetch(apiUrl){
        const response = await fetch(apiUrl);
        if (response.ok){
            const data = await response.json();
           // console.log(data);
           displayResults(data);
        }else{
            throw Error(await response.text());
        }
}

function displayResults(weatherdata){
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(1)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    const cap = desc.split(" ");

    for (var i = 0; i < cap.length; i++) {
        cap[i] = cap[i][0].toUpperCase() + cap[i].substr(1);
    }
    captionDesc.innerHTML = cap;
    

}

