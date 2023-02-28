
 import '../styles/main.scss'
 import '../index.html'
  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';
  // import styles bundle
  import 'swiper/css/bundle';


  const sliderWrapper = document.querySelector('.slider__wrapper');
  let parallax 
  for (let i=1; i<=103; i++){
  i%2 == 0 ? parallax = 20 : parallax = 10
  const sliderWrapperContent = sliderWrapper.innerHTML
  sliderWrapper.innerHTML = 
  `${sliderWrapperContent}<div class="swiper-slide slider__item"><img class="img" data-swiper-parallax="${parallax}%" src="./images/${i}.jpeg" alt="IMG ${i}" loading="lazy"></div>`
   }

   const sliderWrapper2 = document.querySelector('.slider__wrapper2');
   for (let i=1; i<=103; i++){
   const sliderWrapperContent2 = sliderWrapper2.innerHTML
   sliderWrapper2.innerHTML = 
   `${sliderWrapperContent2}<div class="swiper-slide slider__item2"><img class="img" src="./images/${i}.jpeg" alt="IMG ${i}" loading="lazy"></div>`
    }
  


//   // init Swiper:
  const sliderMain = new Swiper('.slider_main',{
    speed : 3000,
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
		enabled: true,
		sensitivity: 10
	},
    parallax: true,
    breakpoints:{
        0:{
           slidesPerView: 2,
           spaceBetween: 10
        },
        680:{
            slidesPerView: 3,
            spaceBetween: 30 
        },
        1440:{
          slidesPerView: 3,
          spaceBetween: 60 
      },
    }
     
  });

  //   // init Swiper:
  const sliderBg = new Swiper('.slider_bg',{
    centeredSlides: true,
    spaceBetween: 20, 
    slidesPerView: 3, 
  });

  sliderMain.controller.control = sliderBg


  const slide = document.querySelectorAll('.slider__item')
    let oldslide = slide[0]
    slide.forEach(curslide =>{
        curslide.addEventListener('click', (e) =>{
            if (oldslide !== curslide){
                oldslide.classList.remove('opened')
                oldslide = curslide;
                curslide.classList.add('opened')
            }
            else{
                curslide.classList.toggle('opened')
                oldslide = curslide;
            }
        })
    })


  
  const desc = document.querySelector('.description')
  sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
  })