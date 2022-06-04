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

