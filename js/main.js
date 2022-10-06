const mobileNavButton = document.querySelector('.mobile-nav');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const closeNavMenuButton = document.querySelector('.close-button');

// Clicking on burger button
mobileNavButton.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileNavMenu.classList.toggle('mobile-nav-menu-active');

});

// Clicking on close button
closeNavMenuButton.addEventListener('click', function () {
    mobileNavMenu.classList.toggle('mobile-nav-menu-active');

});

//Clicking outside navigation to close the navigation menu
window.addEventListener('click', function () {
    console.log('click');

    if (mobileNavMenu.classList.contains('mobile-nav-menu-active')) {
        mobileNavMenu.classList.toggle('mobile-nav-menu-active');
    }
});

//Stopping the click inside open navigation menu
mobileNavMenu.addEventListener('click', function (event) {
    event.stopPropagation();
})