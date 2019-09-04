import '../scss/style.scss';

console.log('Works!');

let mainBlock = document.querySelector('.page');
let mainArea = mainBlock.querySelector('main');
// let sidebarMain = document.querySelector("#sidebar-main");
// let toggleSidebarButton = document.querySelector("#toggle-sidebar");
// let closeSidebarButton = sidebarMain.querySelector('#close-sidebar');
//
// let expandIntroTextLink = mainBlock.querySelector('#open-intro');
// expandIntroTextLink.addEventListener('click', () => {
//   let expandedText = mainBlock.querySelector('#intro-text');
//   expandedText.classList.remove('info--hide');
//   expandIntroTextLink.classList.add('info--hide');
// });
//
// let closeSidebar = () => {
//   sidebarMain.classList.remove('sidebar--show');
//   mainBlock.classList.remove('page--inactive');
// }
//
// toggleSidebarButton.addEventListener('click', () => {
//   sidebarMain.classList.add('sidebar--show');
//   mainBlock.classList.add('page--inactive');
// });
//
// closeSidebarButton.addEventListener('click', () => {
//   closeSidebar();
// });
//
// mainArea.addEventListener('click', () => {
//   if (sidebarMain.classList.contains('sidebar--show')) {
//     closeSidebar();
//   }
// });

let readMoreButton = mainArea.querySelector('#open-full');
readMoreButton.addEventListener('click', () => {
  let fullTextArea = mainArea.querySelector('#all-text');
  if (fullTextArea.classList.contains('info__full--show')) {
    fullTextArea.classList.remove('info__full--show');
  } else {
    fullTextArea.classList.add('info__full--show');
  }

});

let closeSidebar = (element) => {
  element.classList.remove(`sidebar--show`);
  mainBlock.classList.remove('page--inactive');
};

let openSidebar = (element) => {
  element.classList.add(`sidebar--show`);
  mainBlock.classList.add('page--inactive');
};

let sidebarCollapse = (openElement, sidebarBlock, closeElement) => {
  let showElement = document.querySelector(openElement);
  let collapsedBlock = document.querySelector(sidebarBlock);
  showElement.addEventListener('click', () => {
    if (collapsedBlock.classList.contains(`sidebar--show`)) {
      closeSidebar(collapsedBlock);
    } else {
      openSidebar(collapsedBlock);
    }
  });
  let blockCloseElement = collapsedBlock.querySelector(closeElement);
  blockCloseElement.addEventListener('click', () => {
    closeSidebar(collapsedBlock);
  });
  mainArea.addEventListener('click', () => {
    if (collapsedBlock.classList.contains(`sidebar--show`)) {
      closeSidebar(collapsedBlock);
    }
  })
};

// blocks hide
let swiperCollapse = (key) => {
  let expandBrandLink = mainBlock.querySelector(`#open-${key}`);
  let brandsArea = mainBlock.querySelector(`#swiper-${key}`);
  let brandCount = brandsArea.querySelectorAll('.swiper-slide').length;
  mainBlock.querySelector(`#${key}-count`).innerHTML = `Показать все(${String(brandCount)})`;
  expandBrandLink.addEventListener('click', () => {
    if (brandsArea.classList.contains(`swiper-container--${key}--expand`)) {
      mainBlock.querySelector(`#${key}-count`).innerHTML = `Показать все(${String(brandCount)})`;
      brandsArea.classList.remove(`swiper-container--${key}--expand`);
      expandBrandLink.classList.remove('more-info__hide');
    } else {
      mainBlock.querySelector(`#${key}-count`).innerHTML = `Свернуть`;
      expandBrandLink.classList.add('more-info__hide');
      brandsArea.classList.add(`swiper-container--${key}--expand`);
    }
  });
};


swiperCollapse('brand');
swiperCollapse('service');
sidebarCollapse('#open-main', '#sidebar-main', '#main-close');
sidebarCollapse('#open-phone-header', '#sidebar-phone', '#phone-close');
sidebarCollapse('#open-phone', '#sidebar-phone', '#phone-close');
sidebarCollapse('#open-feedback-header', '#sidebar-feedback', '#feedback-close');
sidebarCollapse('#open-feedback', '#sidebar-feedback', '#feedback-close');

let swiper = new Swiper('#swiper-nav', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
let swiper2 = new Swiper('#swiper-brand', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: '#pagination-brand',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

let swiper3 = new Swiper('#swiper-service', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: '#pagination-service',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

let swiper4 = new Swiper('#swiper-price', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: '#pagination-price',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
