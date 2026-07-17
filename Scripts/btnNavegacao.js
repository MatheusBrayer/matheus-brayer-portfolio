export function iniciarCarrossel() {

    document.querySelectorAll(".carousel-wrapper").forEach(carousel => {

        const container = carousel.querySelector(".carousel-content");

        const btnPrev = carousel.querySelector(".btn-prev");
        const btnNext = carousel.querySelector(".btn-next");

        btnNext.addEventListener("click", () => {
            container.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });

        btnPrev.addEventListener("click", () => {
            container.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });

    });

}