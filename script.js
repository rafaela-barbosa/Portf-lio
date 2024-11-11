let currentIndex = [0, 0, 0]; // Armazena o índice atual de cada carrossel

function nextSlide(carouselIndex) {
    const container = document.querySelectorAll('.carousel-container')[carouselIndex];
    const slides = container.querySelectorAll('img');
    const totalSlides = slides.length;

    // Aumenta o índice do slide, e reseta para 0 se atingir o fim
    currentIndex[carouselIndex] = (currentIndex[carouselIndex] + 1) % totalSlides;

    container.style.transform = `translateX(-${currentIndex[carouselIndex] * 100}%)`;
}

function prevSlide(carouselIndex) {
    const container = document.querySelectorAll('.carousel-container')[carouselIndex];
    const slides = container.querySelectorAll('img');
    const totalSlides = slides.length;

    // Diminui o índice do slide, e vai para o último slide se atingir o começo
    currentIndex[carouselIndex] = (currentIndex[carouselIndex] - 1 + totalSlides) % totalSlides;

    container.style.transform = `translateX(-${currentIndex[carouselIndex] * 100}%)`;
}

// Função para iniciar a navegação automática a cada 2 segundos
function startAutoSlide() {
    // Intervalo de 2 segundos para cada carrossel
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            nextSlide(i);
        }
    }, 3000); // 2000 milissegundos = 2 segundos
}

// Inicia a navegação automática assim que a página carregar
window.onload = startAutoSlide;
