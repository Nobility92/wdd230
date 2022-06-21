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

// for the banner that displays every Monday and Tuesday
const banner = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
const forwed = '🤝🏼 Come join us for the chamber meet and greet Today at 7:00 p.m.';
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = weekday[d.getDay()];

if (day == weekday[1] || day == weekday[2]){
    document.getElementById("banner").innerHTML = banner;
 } else if(day == weekday[3]){
        document.getElementById("banner").innerHTML = forwed;
    }else{
        document.getElementById("banner").innerHTML = '';
    }

    //for lazy load images
    let imgload = document.querySelectorAll("img[data-src]");

const imgopt = {
    threshold: 2,
    rootMargin: "0px 0px 50px 0px"
};
const loadimg = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttibute('data-src');
    };
};
imgload.forEach((img) => {
    loadimg(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
      });
    }, imgopt);

    imgload.forEach((img) => {
      observer.observe(img);
    });
  } else {
    
        loadimg(img);
      }