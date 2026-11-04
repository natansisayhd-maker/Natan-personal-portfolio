const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-buttons');

// Open and close menu using the menu icon
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Close menu after clicking a navigation link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});