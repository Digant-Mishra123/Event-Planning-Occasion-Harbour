
function closeMenu() {
    const menu = document.querySelector('.menu-items');
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    
    menu.classList.remove('show-menu');
    hamburger.style.display = 'block';
    cross.style.display = 'none';
}
  

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu-items');
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    
  
    if (!menu.contains(event.target) && event.target !== hamburger && event.target !== cross) {
        closeMenu(); 
    }
});
  

document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.menu-items');
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    
    menu.classList.toggle('show-menu');
    hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
    cross.style.display = cross.style.display === 'none' ? 'block' : 'none';
});
  

document.querySelector('.cross').addEventListener('click', function() {
    closeMenu(); 
});

document.addEventListener('DOMContentLoaded', function() {
    // const exploreButton = document.getElementById('explore');
    const cardsContainer = document.querySelector('.container');

    exploreButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (cardsContainer) {
            cardsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.getElementById('eventlink').addEventListener('click', function(event) {
    event.preventDefault();
    
    const container = document.querySelector('.container');
    
    if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
    }
});
