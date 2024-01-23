const message = 'Roy keane.';
const submsg = 'Desenvolvedor Web e Mobile, aficionado por pixel art.'

document.getElementById("lojaapp").onclick = function () {
  window.open('https://play.google.com/store/apps/details?id=com.br.rpgboard');
};

document.getElementById("repositorioJogo").onclick = function () {
  window.open('https://github.com/keane032/dungeon_explorer');
};

const typingPromises = (message, timeout) =>
  [...message].map(
    (ch, i) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(message.substring(0, i + 1) );
        }, timeout * i);
      })
  );

typingPromises(message, 140).forEach(promise => {
  promise.then(portion => {
    
    document.querySelector('#title').innerHTML = portion ;

    if(portion.length === message.length){
       document.querySelector('#titleCursor').remove()
       document.querySelector('#subtitleCursor').innerHTML = '|';

        typingPromises(submsg, 140).forEach(promise => {
            promise.then(portion => {
              document.querySelector('#subtitle').innerHTML = portion;
            });
          });
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 100, // Ajuste conforme necessário
              behavior: 'smooth' // Rola suavemente
          });
      }
  });
});