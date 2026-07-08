const galeriaContainer = document.querySelector('.galeria-container');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

function scrollGaleria(direcao) {
    const foto = galeriaContainer.querySelector('.foto:not([style*="display: none"])');
    if (!foto) return;
    const distancia = foto.offsetWidth + 12; // 12 = o mesmo valor do "gap" no CSS
    galeriaContainer.scrollBy({ left: direcao * distancia, behavior: 'smooth' });
}

// Clique nas setas
setaEsquerda.addEventListener('click', () => scrollGaleria(-1));
setaDireita.addEventListener('click', () => scrollGaleria(1));

// Setas do teclado — só funciona quando a galeria está focada
galeriaContainer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollGaleria(1);
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollGaleria(-1);
    }
});