let imgload = document.querySelectorAll("img[data-src]");

const imgopt = {
    threshold: 0,
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
  
  