document.addEventListener('DOMContentLoaded', () => {
    
    const elementosCarousel = document.querySelectorAll('.carousel');

    M.Carousel.init(elementosCarousel, {
        duration: 1000,
        dist: -80,           /* Achicar la imagen cuando sale */
        shift: 5,            /* Distancia entre imagenes */
        padding: 5,
        numVisible: 3,       /* Cantidad de imagenes visible */
        noWrap: false        /* true: Empezar con la primer imagen */
    });
});