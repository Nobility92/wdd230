const visitDisplay = document.querySelector(".visit");
const todayDisplay = document.querySelector(".timestp");

let numVisits = Number(window.localStorage.getItem("visit"));

if( numVisits !== 0){
    visitDisplay.textContent = numVisits;
}else{
    visitDisplay.textContent = "This is your first visit";
}
numVisits++;
localStorage.setItem("visit", numVisits);
todayDisplay.textContent = Date.now();