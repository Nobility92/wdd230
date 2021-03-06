
const weatherIcon = document.querySelector('#weather-icon');
const temp1 = document.querySelector('#t');
const wcondition = document.querySelector('#condition');
const humidity = document.querySelector('#h');
const day1  = document.querySelector('#day1');
const day2  = document.querySelector('#day2');
const day3  = document.querySelector('#day3');

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98358531123399&lon=-77.09546743732618&exclude=minutely,hourly&appid=3ed69c908e59f998daab448e2c715f0e&units=imperial";

apiFetch(url);

async function apiFetch(apiUrl){
        const response = await fetch(apiUrl);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
           displayResults(data);
        }else{
            throw Error(await response.text());
        }
}
function displayResults(weatherdata){
    temp1.innerHTML = `<strong>${weatherdata.current.temp.toFixed(1)}</strong>`;
    humidity.innerHTML = `<strong>${weatherdata.current.humidity.toFixed(1)}</strong>`;
    day1.innerHTML = `<strong>${weatherdata.daily[1].temp.day.toFixed(1)}</strong>`;
    day2.innerHTML = `<strong>${weatherdata.daily[2].temp.day.toFixed(1)}</strong>`;
    day3.innerHTML = `<strong>${weatherdata.daily[3].temp.day.toFixed(1)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png`;
    wcondition.innerHTML = `<strong>${weatherdata.current.weather[0].description}</strong>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', wcondition);

    weatherIcon.innerHTML = wcondition;
    

}