import scrollToElement from 'scroll-to-element';

const handleClick = ev => {
   ev.preventDefault();

   const href = ev.target.href.toString();
   const hrefParts = href.split('#');
   const id = href.length > 1 ? hrefParts[1] : hrefParts[0];

   ev.target.blur();

   scrollToElement(`#${ id }`, {
      offset: 0,
      ease: 'linear',
      duration: 500,
   });
};

export const init = () => {
   const links = [...document.querySelectorAll('a[href]')]
                .filter(node => node.getAttribute('href').toString().startsWith('#'));

    links.forEach(node => {
      node.addEventListener('click', handleClick);
   });
};

export default init;
