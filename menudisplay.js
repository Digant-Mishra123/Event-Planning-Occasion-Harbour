// const closeMenu = () => {
//   const menu = document.querySelector('.menu-items');
//   menu.classList.remove('show-menu');
// };

// const toggleMenu = () => {
//   const menu = document.querySelector('.menu-items');
//   menu.classList.toggle('show-menu');
// };
// document.querySelector('.hamburger').addEventListener('click', toggleMenu);
// document.querySelector('.cross').addEventListener('click', closeMenu);

const closeMenu = () => {
  const menu = document.querySelector('.menu-items');
  menu.classList.remove('show-menu');
  document.querySelector('.hamburger').style.display = 'block'; // Show hamburger icon
  document.querySelector('.cross').style.display = 'none'; // Hide cross icon
};

const toggleMenu = () => {
  const menu = document.querySelector('.menu-items');
  menu.classList.toggle('show-menu');
  document.querySelector('.hamburger').style.display = 'none'; // Hide hamburger icon
  document.querySelector('.cross').style.display = 'block'; // Show cross icon
};

document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.cross').addEventListener('click', closeMenu);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.event-link').addEventListener('click', function(event) {
    event.preventDefault();
    const cardsSection = document.getElementById('cards');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.explore').addEventListener('click', function() {
    const cardsSection = document.getElementById('cards');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
