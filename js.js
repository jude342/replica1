const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');

envelope.addEventListener('click', () => {
 
  envelope.classList.add('open');

  
  setTimeout(() => {
    letter.style.zIndex = 5;
  }, 1000); 
});