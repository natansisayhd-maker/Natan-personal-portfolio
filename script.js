const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-buttons');
const themeSwitch= document.getElementById('theme-switch')
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

const enableDarkmode=()=>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode=()=>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if (localStorage.getItem('darkmode') === 'active') {
    enableDarkmode();
} else {
    disableDarkmode();
}
themeSwitch.addEventListener('click',()=>{
    if (document.body.classList.contains('darkmode')) {
        disableDarkmode();
    } else {
        enableDarkmode();
    }
})