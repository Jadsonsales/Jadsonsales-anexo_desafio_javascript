// Array que armazena os objetos do carrossel
let carouselArr = [];

class Carousel {
    // Construtor: Salva as informações de cada slide
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    // Método Start: Inicia o carrossel
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._arr = arr; // Guarda o array para usar nos outros métodos
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            
            Carousel.Render(); 
            
            Carousel._interval = setInterval(function() { 
                Carousel.Next(); 
            }, 5000); 
        } else {
            throw "O método Start precisa de um Array válido.";
        }
    }

    // Método Next: Avança para o próximo slide
    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Render();
    }

    // Método Prev: Volta para o slide anterior
    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Render();
    }

    // Mostra os dados atuais na tela e gerencia as setas
    static Render() {
        const currentSlide = Carousel._arr[Carousel._sequence];
        
        // Pega as DIVs do HTML
        const container = document.getElementById("carousel");
        const titleContainer = document.getElementById("carousel-title");

        if (container && titleContainer) {
            
            container.style.backgroundImage = `url('${currentSlide.image}')`;
            container.style.backgroundSize = "contain";
            container.style.backgroundRepeat = "no-repeat";
            container.style.backgroundPosition = "center";
            container.style.height = "70vh";
            container.style.marginTop = "40px"; 

            // Usei a lógica do FLEXBOX no Css: Alinhei tudo que está dentro do container no centro do eixo, me basiei em um vídeo de Guanabara.
            container.style.display = "flex";
            container.style.alignItems = "center";
            container.style.justifyContent = "space-between";
            container.style.position = "relative"; 
            titleContainer.innerHTML = `<a href="${currentSlide.url}">${currentSlide.title}</a>`;

            // Adicionei as setas usando margens pois tive dificuldade para posicionar usando top e left. Assim, elas ficam alinhadas com a imagem e centralizadas verticalmente.
            if (!document.getElementById("btn-prev")) {
                container.innerHTML = `
                    <button id="btn-prev" onclick="Carousel.MoveLeft(event)" style="margin-left: 8%; padding: 10px 15px; cursor: pointer; font-size: 15px; z-index: 10;">&#10094;</button>
                    <button id="btn-next" onclick="Carousel.MoveRight(event)" style="margin-right: 8%; padding: 10px 15px; cursor: pointer; font-size: 15px; z-index: 10;">&#10095;</button>
                    `;
            }
        }
    }
    
    // Funções auxiliares para os cliques dos botões que também reiniciam o temporizador para evitar mudanças automáticas imediatas após um clique
    static MoveLeft(event) {
        event.stopPropagation();
        clearInterval(Carousel._interval); // Para o tempo automático temporariamente
        Carousel.Prev();
        Carousel._interval = setInterval(function() { Carousel.Next(); }, 5000); // Reinicia o tempo
    }

    static MoveRight(event) {
        event.stopPropagation();
        clearInterval(Carousel._interval);
        Carousel.Next();
        Carousel._interval = setInterval(function() { Carousel.Next(); }, 5000);
    }
}