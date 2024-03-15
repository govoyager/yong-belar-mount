const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};


// navbar

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 5){
        headerElement.classList.add('scrolled');
    }
    else{
        headerElement.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);

function openMenu() {
    document.getElementById("mobile-menu-content").classList.add("open");
}
function closeMenu(){
    document.getElementById("mobile-menu-content").classList.remove("open");
}

function openMore() {
    document.getElementById("more-content").classList.add("open");
    
}
window.onclick = (event) =>{
    if(event.target.matches('.more-btn') === !true){
        if(document.getElementById("more-content").classList.contains("open")){
            document.getElementById("more-content").classList.remove("open");
        }   
    }
    console.log("window clicked clicked clicked");
}
// Home page yong belar scroll effect
const animatedEls = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const animation = entry.target.getAttribute("data-animation");

		if (entry.isIntersecting) {
			entry.target.classList.add("animated", `${animation}`);
		} else {
			entry.target.classList.remove("animated", `${animation}`);
		}
	});
});

animatedEls.forEach((el) => observer.observe(el));

// Accomodation image slider
const SLIDER_WIDTH = 5;

let coreUrl = '/assets/accommodation';
let images = [
  `${coreUrl}1.jpeg`,
  `${coreUrl}2.jpeg`,
  `${coreUrl}3.jpeg`,
  `${coreUrl}4.jpeg`,
  `${coreUrl}5.jpeg`,
  `${coreUrl}7.jpeg`,
  `${coreUrl}8.jpeg`,
  `${coreUrl}9.jpeg`,
  `${coreUrl}10.jpeg`,
  `${coreUrl}11.jpeg`,
  `${coreUrl}12.jpeg`,
  `${coreUrl}13.jpeg`,
  `${coreUrl}14.jpeg`,
  `${coreUrl}15.jpeg`,
  `${coreUrl}16.jpeg`,
  `${coreUrl}17.jpeg`,
  `${coreUrl}18.jpeg`,
  `${coreUrl}19.jpeg`,
  `${coreUrl}20.jpeg`
];


if(document.getElementById('leftBtn') !== null){
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
    // to hide 2 image boxes in mobile
    slider.getElementsByTagName('img')[0].classList.add('screen-sm-hidden');
    slider.getElementsByTagName('img')[4].classList.add('screen-sm-hidden');
}

permuteToRight = () => {
  let tmp = images[0];
    for(let i = 0; i < images.length - 1; i++) {
        images[i] = images[i+1]
    }
    images[images.length - 1] = tmp;
}

permuteToLeft = () => {
   let tmp = images[images.length - 1];
    for(let i = images.length - 1; i > 0; i--) {
        images[i] = images[i-1]
    }
    images[0] = tmp;
}

// Accomodation room slider
let dormRooms = ['/assets/dorm-01.jpg', '/assets/dorm-02.jpg'];
let chimneyRooms = ['/assets/chimney-01.jpg', '/assets/chimney-02.jpg'];
let _4doorsRooms = ['/assets/4doors-01.jpg', '/assets/4doors-02.jpg'];

let slideIndex = 0;

// Next-previous control
function nextSlide(n) {
  slideIndex++;
  showSlides(n);
  timer = _timer;
}

function prevSlide(n) {
  slideIndex--;
  showSlides(n);
  timer = _timer;
}


function showSlides(n) {
    let slides = document.querySelector(".mySlides" + n);

    if(slideIndex < 0)  slideIndex *= -1;
    slideIndex %= 2; 
  
    if(n===1)
        slides.getElementsByTagName('img')[0].src = dormRooms[slideIndex];
    if(n===2)
        slides.getElementsByTagName('img')[0].src = chimneyRooms[slideIndex];
    if(n===3)
        slides.getElementsByTagName('img')[0].src = _4doorsRooms[slideIndex];

}
// autoplay slides --------
let timer = 4; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide(1);
    nextSlide(2);
    nextSlide(3);
    timer = _timer; // reset timer
  }
}, 1000);
}

                                                    // Hiking page 
// Accordion
if(document.getElementById('hiking-page-accordion') !== null){
document.addEventListener('DOMContentLoaded',() => {
    const accordions = document.querySelectorAll('.accordion-item');
    
    accordions.forEach(element => {
        element.addEventListener('click', (event) =>{
            const self = event.currentTarget;
            const control = self.querySelector('.accordion-control');
            const content = self.querySelector('.accordion-content');
    
            self.classList.toggle('open');
    
            if(self.classList.contains('open')){
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'rem';
            }else{
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
        });
    })

    // for name tabs
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => tabClicked(tab));
    })

    function tabClicked(tab) {
    
    tabButtons.forEach(tab => {
        tab.classList.remove('active')
    })
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    
    contents.forEach((content) => {
        content.classList.remove('show');
    })
    
    const contentId = tab.getAttribute('content-id');
    const contentSelected = document.getElementById(contentId);
    
    contentSelected.classList.add('show');
    //console.log(contentId)
    // for fixed view while changing the plan options
    const activeButtonChanger = contentSelected.getElementsByClassName('content-tab-btn');
    activeButtonChanger[0].classList.add('active');
    activeButtonChanger[1].classList.remove('active');

    const activeButtonChanger2 = contentSelected.getElementsByClassName('details');
    activeButtonChanger2[0].classList.add('show');
    activeButtonChanger2[1].classList.remove('show');
    }
    
    // for content tabs
    
    const contentTabButtons = document.querySelectorAll('.content-tab-btn');

        contentTabButtons.forEach((contentTab) => {
            contentTab.addEventListener('click', () => contentTabClicked(contentTab));
        })

        function contentTabClicked(contentTab) {
        
        contentTabButtons.forEach(contentTab => {
            contentTab.classList.remove('active')
        })
        contentTab.classList.add('active');    
        const details = document.querySelectorAll('.details');
        
        details.forEach((detail) => {
            detail.classList.remove('show');
        })
        
        const detailId = contentTab.getAttribute('detail-id');
        const detailSelected = document.getElementById(detailId);
        
        detailSelected.classList.add('show');
        //console.log(contentId)
        }
}
