const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};


// navbar
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
})


// function openMenu() {
//     document.getElementById("menu").classList.add("show");
// }
// window.onclick = (event) =>{
//     if(!event.target.matches('.menu-btn')){
//         if(document.getElementById("menu").classList.contains("show")){
//             document.getElementById("menu").classList.remove("show");
//         }
//     }
//     console.log("window clicked clicked clicked");
// }
// menu.addEventListener('click', event => event.stopPropagation());
  
// Accomodation image slider
const SLIDER_WIDTH = 5;

let coreUrl = '/assets/hotels';
let images = [
  `${coreUrl}1.jpg`,
  `${coreUrl}2.jpg`,
  `${coreUrl}3.jpg`,
  `${coreUrl}4.jpeg`,
  `${coreUrl}5.jpg`,
  `${coreUrl}6.jpg`
];



document.getElementById('leftBtn').addEventListener('mouseup', () => {
    permuteToLeft();
    insertToDom();
});

document.getElementById('rightBtn').addEventListener('mouseup', () => {
    permuteToRight();
    insertToDom();
})



insertToDom = () => {
  let slider = document.getElementById('slider');
  let seperateView = document.getElementById('seperate-view');
    for(let i = 0; i < SLIDER_WIDTH; i++) {
        slider.getElementsByTagName('img')[i].src = images[i];
    }
    slider.getElementsByTagName('img')[2].style.transform = 'scale(1.2)';
    slider.getElementsByTagName('img')[2].style.margin = '6rem';
    seperateView.getElementsByTagName('img')[0].src = images[2];
}

permuteToLeft = () => {
  let tmp = images[0];
    for(let i = 0; i < images.length - 1; i++) {
        images[i] = images[i+1]
    }
    images[images.length - 1] = tmp;
}

permuteToRight = () => {
   let tmp = images[images.length - 1];
    for(let i = images.length - 1; i > 0; i--) {
        images[i] = images[i-1]
    }
    images[0] = tmp;
}