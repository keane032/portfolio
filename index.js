

  document.getElementById("app").onclick = function () {
    window.open('https://play.google.com/store/apps/details?id=com.br.rpgboard');
};

// document.getElementById("app").addEventListener('click', () => {
//   window.location = 'http://pt.stackoverflow.com'
// })

document.getElementById("angular").onclick = function () {
  window.open('https://keane032.github.io/angular-portfolio/?name=keane032');
};

document.getElementById("integrasus").onclick = function () {
  window.open('https://integrasus.saude.ce.gov.br/#/home');
};

function showMenu(){
  let menu = document.querySelector('.mobile-menu');
  if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        // document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menu.classList.add('open');
        // document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
//   $(document).ready(function(){
//     $('#projects').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: false
//     });
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//           window.scrollTo({
//               top: targetElement.offsetTop - 100, // Ajuste conforme necessário
//               behavior: 'smooth' // Rola suavemente
//           });
//       }
//   });
// });