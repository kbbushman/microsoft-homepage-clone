console.log('Hello Dave...');

document.querySelector('.menu-btn').addEventListener('click', (event) => {
  document.querySelector('.main-menu').classList.toggle('show');
});
