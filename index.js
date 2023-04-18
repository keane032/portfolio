const message = 'Roy keane.';
const submsg = 'Desenvolvedor Web e Mobile, aficionado por pixel art.'

// document.getElementById("myButton").onclick = function () {
//   location.href = "www.yoursite.com";
// };

// window.open('www.google.com.br', '_blank');

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
