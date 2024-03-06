
  document.getElementById("repositorioJogo").onclick = function () {
      window.open('https://github.com/keane032/dungeon_explorer');
  };

  document.getElementById("app").onclick = function () {
    window.open('https://play.google.com/store/apps/details?id=com.br.rpgboard');
};


  $(document).ready(function(){
    $('#projects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
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