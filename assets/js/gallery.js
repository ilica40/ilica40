// Inicijalizacija GLightbox (ovo koristi CDN linkove u HTML-u)
document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  } else {
    // fallback: ako CDN ne radi, slike se i dalje otvaraju u novom tabu (normalan <a> link)
    console.warn('GLightbox nije dostupan — koristi se običan link za slike.');
  }
});
