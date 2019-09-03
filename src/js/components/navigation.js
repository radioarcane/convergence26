const HAMBURGER_ID = 'nav-toggle';
const NAV_CLASS = 'masthead__nav';
const NAV_ACTIVE_CLASS = 'masthead__nav--active';

const handleCloseNav = () => {
   const nav = document.querySelector(`.${ NAV_CLASS }`);

   if (nav) {
      nav.classList.remove(NAV_ACTIVE_CLASS);
   }
};

const escapeListener = ev => {
   if (ev.key.toLowerCase() === 'escape') {
       handleCloseNav();
   }
};

const handleHamburgerClick = ev => {
   const nav = document.querySelector(`.${ NAV_CLASS }`);

   ev.preventDefault();
   ev.stopPropagation();

   if (nav) {
      if (nav.classList.contains(NAV_ACTIVE_CLASS)) {
         nav.classList.remove(NAV_ACTIVE_CLASS);
         window.removeEventListener('click', handleCloseNav);
         window.removeEventListener('keyup', escapeListener);
      }
      else {
         nav.classList.add(NAV_ACTIVE_CLASS);
         window.addEventListener('click', handleCloseNav);
         window.addEventListener('keyup', escapeListener);
      }
   }
};

export const init = () => {
   const navToggler = document.getElementById(HAMBURGER_ID);

   if (navToggler) {
      navToggler.addEventListener('click', handleHamburgerClick);
   }
};

export default init;
