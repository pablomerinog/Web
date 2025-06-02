 document.addEventListener("scroll", function () {
        const header = document.querySelector(".bg-cover");
        const apartments = document.querySelectorAll(".apartment-card");
        const scrollPosition = window.scrollY;

        // Ajustar opacidad de la imagen de fondo
        if (scrollPosition > 100) {
          header.style.opacity = Math.max(1 - scrollPosition / 1500, 0);
        } else {
          header.style.opacity = 1;
        }

        // Ajustar la posición de las tarjetas de apartamentos
        apartments.forEach((card) => {
          card.style.transform = `translateY(${Math.min(
            scrollPosition / 10,
            50
          )}px)`;
        });
      });