document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const imagesPerView = 3;
  const totalImages = images.length;
  const totalGroups = Math.ceil(totalImages / imagesPerView);
  let currentGroup = 0;

  function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(-${width * imagesPerView * currentGroup}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentGroup = (currentGroup + 1) % totalGroups; // vuelve a 0 al llegar al final
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentGroup = (currentGroup - 1 + totalGroups) % totalGroups; // va al final si estás en la primera
    updateCarousel();
  });

  // Para que funcione bien al cambiar de tamaño
  window.addEventListener("resize", updateCarousel);
});
// Modal para ver imagen en grande
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".carousel img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    imageModal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  imageModal.classList.add("hidden");
});

imageModal.addEventListener("click", (e) => {
  // Si se hace clic fuera de la imagen (en el fondo), se cierra
  if (e.target === imageModal) {
    imageModal.classList.add("hidden");
  }
});
