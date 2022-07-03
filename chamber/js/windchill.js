const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('#t');
const speed = document.querySelector('#s');
const wcondition = document.querySelector('#condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Ibadan&units=Imperial&appid=3ed69c908e59f998daab448e2c715f0e';

apiFetch(url);

async function apiFetch(apiUrl){
        const response = await fetch(apiUrl);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
           displayResults(data);
           windChill(t, s);
        }else{
            throw Error(await response.text());
        }
}

function displayResults(weatherdata){
    temp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(1)}</strong>`;
    speed.innerHTML = `${weatherdata.wind.speed}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    wcondition.innerHTML = weatherdata.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', wcondition);
    
   const cap = wcondition.split(" ");

    for (var i = 0; i < cap.length; i++) {
        cap[i] = cap[i].toUpperCase() + cap[i].slice(1);
    }
    wcondition.innerHTML = cap;
    

}


function windChill(t, s){
    return;
}

let t = parseFloat(document.getElementById("t").innerHTML);
    let s = parseFloat(document.getElementById("s").innerHTML);
    let windchill;

    if (t < 50 && s > 3){
        windchill = windChill(t, s);
        windchill = Math.round(35.74 + 0.6215 * t - 35.75 * s**0.16 + 0.4275 * t * s**0.16);
    }else{
        windchill = "N/A";
    }
    document.getElementById("w").innerHTML = windchill;