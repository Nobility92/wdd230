const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('#t');
const wcondition = document.querySelector('#condition');
const humidity = document.querySelector('#h');

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98358531123399&lon=-77.09546743732618&appid=063dbb4eea74383c891a7e335525315b&units=imperial";

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
    temp.innerHTML = `<strong>${weatherdata.current.temp.toFixed(1)}</strong>`;
    humidity.innerHTML = `${weatherdata.current.humidity.toFixed(1)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png`;
    wcondition.innerHTML = `<strong>${weatherdata.current.weather[0].description}</strong>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather condition');


    weatherIcon.innerHTML = wcondition ;
    

}