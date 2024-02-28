
  document.getElementById("repositorioJogo").onclick = function () {
      window.open('https://github.com/keane032/dungeon_explorer');
  };


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