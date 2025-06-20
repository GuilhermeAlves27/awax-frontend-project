const sliders = document.querySelector('.sliders'); 
const pointers = document.querySelectorAll('.pointer'); 
const totalSlides = pointers.length; 
let currentSlide = 0; /*Varivavel que guarda o slide atual 0= Primeiro slide */
let slideInterval; /*guardar o intervalo do auto-play */

    function updateSlider() {
        const offset = -currentSlide * 100; /* Calcula quantos passos de 100vw deve andar, ex: slide 2 offset = -200vw */
        sliders.style.transform = `translateX(${offset}vw)`; /* Movo os sliders no eixo X */

        // Atualiza os ponteiros ativos
        pointers.forEach((pointer, index) => {
            if (index === currentSlide) {
                pointer.classList.add('active');
            } else {
                pointer.classList.remove('active');
            }
        });
    }

    // Clique nos ponteiros
    pointers.forEach((pointer, index) => {
        pointer.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetInterval(); // reinicia o auto-play ao clicar
        });
    });

    // Auto-play (troca a cada 2 segundos)
    function startAutoPlay() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 2000); // 2 segundos
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    // Inicialização
    updateSlider();
    startAutoPlay();

// Musica
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('meuVideo');
    const musica = document.getElementById('minhaMusica');

    video.addEventListener('play', () => {
        // Define o tempo inicial da música para 1:19 (79 segundos)
        if (musica.currentTime < 79) {
            musica.currentTime = 79;
        }

        musica.play();
    });

    video.addEventListener('pause', () => {
        musica.pause();
    });

    video.addEventListener('ended', () => {
        musica.pause();
        musica.currentTime = 79; // Reinicia no ponto certo, se for reproduzido novamente
    });
});

