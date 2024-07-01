const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.primary-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    }
    else {
        primaryNav.setAttribute('data-visible', false);
    }
});