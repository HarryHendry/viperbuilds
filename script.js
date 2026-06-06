const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const Navbar = document.querySelector('.navbar');
    Navbar.classList.toggle('active');
})