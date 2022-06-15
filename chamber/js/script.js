const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const d = new Date();
let datetime = d.getFullYear()+'/'+d.getMonth()+'/'+d.getDate()+ '  ' + d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
document.getElementById("update").innerHTML = datetime;


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thurday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var banner = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
var day = weekday[now.getDay()];
if (day = weekday[1] || weekday[2]){
    document.getElementById("banner").innerHTML = banner;
}