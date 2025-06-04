document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentGroup = 0;

  function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${width * currentGroup}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentGroup = (currentGroup + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentGroup = (currentGroup - 1 + images.length) % images.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel(); // Inicializar bien desde el principio
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
  if (e.target === imageModal) {
    imageModal.classList.add("hidden");
  }
});
