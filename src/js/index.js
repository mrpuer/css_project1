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
