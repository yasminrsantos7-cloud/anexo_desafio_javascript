
let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;

            Carousel.Next();

            if (Carousel._interval) {
                clearInterval(Carousel._interval);
            }

            Carousel._interval = setInterval(() => {
                Carousel.Next();
            }, 2000);
        } else {
            throw "O método Start precisa de um Array válido.";
        }
    }

    static Next() {
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        const item = Carousel._arr[Carousel._sequence];

        const divCarousel = document.getElementById("carousel");
        const divTitle = document.getElementById("carousel-title");

        if (divCarousel) {
            let img = document.getElementById("carousel-img");

            if (!img) {
                img = document.createElement("img");
                img.id = "carousel-img";
                divCarousel.appendChild(img);
            }

            img.src = item.image;
            img.alt = item.title;
        }

        if (divTitle) {
            divTitle.innerHTML = `<a id="carousel-link" href="${item.url}">${item.title}</a>`;
        }

        Carousel._sequence++;
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 2 + Carousel._size) % Carousel._size;
        Carousel.Next();
    }
}