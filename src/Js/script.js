// ========================
// SLIDER GERAL (outro carrossel que usa vw)
// ========================
// MANTIDO COMO ESTÁ (presumo que este já esteja funcionando)
const slidersMain = document.querySelector('.sliders');
const pointersMain = document.querySelectorAll('.pointer');
const totalSlides = pointersMain.length;
let currentSlide = 0;
let slideInterval;

function updateSlider() {
    const offset = -currentSlide * 100;
    slidersMain.style.transform = `translateX(${offset}vw)`;

    pointersMain.forEach((pointer, index) => {
        pointer.classList.toggle('active', index === currentSlide);
    });
}

pointersMain.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
        resetInterval();
    });
});

function startAutoPlay() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 2000); // Passa o slide a cada 2 segundos
}

function resetInterval() {
    clearInterval(slideInterval);
    startAutoPlay();
}

// Chame estas funções apenas para o slider "geral" se ele for independente
// Verifique se slidersMain existe antes de chamar updateSlider e startAutoPlay
if (slidersMain) {
    updateSlider();
    startAutoPlay();
}


// ========================
// SLIDER DA SEÇÃO SECTION__TEAM (NOVA ABORDAGEM DE INICIALIZAÇÃO)
// ========================
document.addEventListener('DOMContentLoaded', function() { 
    const teamSlider = document.querySelector('.section__team .sliders');
    const teamPointers = document.querySelectorAll('.section__team .sliders__pointers .pointer');
    const teamSlides = document.querySelectorAll('.section__team .slide');

    if (!teamSlider || teamSlides.length === 0 || teamPointers.length === 0) {
        console.warn("Elemento .teamSlider, .teamSlides ou .teamPointers não encontrado. O slider da equipe não será inicializado.");
        return;
    }

    let currentTeamSlide = 0;
    let teamSlideInterval;

    const computedStyle = getComputedStyle(teamSlides[0]);
    const slideMarginRight = parseFloat(computedStyle.marginRight);
    const slideWidth = teamSlides[0].offsetWidth + slideMarginRight;


    function updateTeamSlider() {
        const offset = -currentTeamSlide * slideWidth;
        teamSlider.style.transform = `translateX(${offset}px)`;

        teamPointers.forEach((pointer, index) => {
            pointer.classList.toggle('active', index === currentTeamSlide);
        });
    }

    teamPointers.forEach((pointer, index) => {
        pointer.addEventListener('click', () => {
            currentTeamSlide = index;
            updateTeamSlider();
            resetTeamInterval();
        });
    });

    function startTeamAutoPlay() {
        teamSlideInterval = setInterval(() => {
            currentTeamSlide = (currentTeamSlide + 1) % teamSlides.length;
            updateTeamSlider();
        }, 3000);
    }

    function resetTeamInterval() {
        clearInterval(teamSlideInterval);
        startTeamAutoPlay();
    }

    // Inicializa o slider da equipe e o autoplay
    updateTeamSlider();
    startTeamAutoPlay();
});


document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('meuVideo');
    const musica = document.getElementById('minhaMusica');

    // Verifica se os elementos de áudio/vídeo existem antes de adicionar event listeners
    if (video && musica) {
        video.addEventListener('play', () => {
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
            musica.currentTime = 79;
        });
    } else {
        console.warn("Elemento 'meuVideo' ou 'minhaMusica' não encontrado. Funções de áudio/vídeo não serão inicializadas.");
    }
});