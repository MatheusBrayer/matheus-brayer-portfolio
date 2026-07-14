const accordions = document.querySelectorAll("[data-section]");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const content =  accordion.nextElementSibling;
    
    content.classList.toggle("active");
  });
});
