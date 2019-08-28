import '../scss/style.scss';

console.log('Works!');

let mainBlock = document.querySelector('.page');
let mainArea = mainBlock.querySelector('main')
let sidebarMain = document.querySelector("#main-sidebar");
let toggleSidebarButton = document.querySelector("#toggle-sidebar");
let closeSidebarButton = sidebarMain.querySelector('#close-sidebar');

let expandIntroTextLink = mainBlock.querySelector('#intro-link');
expandIntroTextLink.addEventListener('click', () => {
  let expandedText = mainBlock.querySelector('#intro-text');
  expandedText.classList.remove('info--hide');
  expandIntroTextLink.classList.add('info--hide');
});

let closeSidebar = () => {
  sidebarMain.classList.remove('main-sidebar--show');
  mainBlock.classList.remove('page--inactive');
}

toggleSidebarButton.addEventListener('click', () => {
  sidebarMain.classList.add('main-sidebar--show');
  mainBlock.classList.add('page--inactive');
});

closeSidebarButton.addEventListener('click', () => {
  closeSidebar();
});

mainArea.addEventListener('click', () => {
  if (sidebarMain.classList.contains('main-sidebar--show')) {
    closeSidebar();
  }
});


// set the more brands expand
let expandBrandLink = mainBlock.querySelector('#more-brands');
let brandsArea = mainBlock.querySelector('#swiper-brand');
let brandCount = brandsArea.querySelectorAll('.swiper-slide').length;
mainBlock.querySelector('#brands-count').innerHTML = `Показать все(${String(brandCount)})`;
expandBrandLink.addEventListener('click', () => {
  if (brandsArea.classList.contains('swiper-container--mob--expand')) {
    mainBlock.querySelector('#brands-count').innerHTML = `Показать все(${String(brandCount)})`;
    brandsArea.classList.remove('swiper-container--mob--expand');
    expandBrandLink.classList.remove('more-info__hide');
  } else {
    mainBlock.querySelector('#brands-count').innerHTML = `Свернуть`;
    expandBrandLink.classList.add('more-info__hide');
    brandsArea.classList.add('swiper-container--mob--expand');
  }
});
