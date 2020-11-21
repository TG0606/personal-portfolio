/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    })
  }
}
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
  menuBtn.classList.toggle('open');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== HAMBURGER-ANIMATION =====*/
const menuBtn = document.querySelector('.menu__btn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {
  delay: 200
});
sr.reveal('.home__social', {
  delay: 400
});

/*SCROLL WORK*/
sr.reveal('.work__description', {});
sr.reveal('.img__container', {
  interval: 250
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__text', {
  delay: 350
});

/*SCROLL CONTACT*/
sr.reveal('.contact__info', {
  delay: 200
});
sr.reveal('.ifStatement__container', {
  interval: 300
});
