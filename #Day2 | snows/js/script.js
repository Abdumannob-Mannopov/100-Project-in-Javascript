let container = document.querySelector('.container')

 function createFallingImage() {
    const div = document.createElement("div");
    div.className = "falling";

    // Random rasm
    const img = document.createElement("img");
    img.src = '../images/snowflake.png';
    div.appendChild(img);

    // Random joylashuv (x koordinata)
    const x = Math.random() * (window.innerWidth - 80);
    div.style.left = `${x}px`;

    // Random tezlik
    const duration = 5 + Math.random() * 5; // 5-10 sekund oralig‘ida
    div.style.animationDuration = `${duration}s`;

    // Bodyga qo‘shish
    .appendChild(div);

    // Animatsiya tugaganda DOMdan o‘chirish
    div.addEventListener("animationend", () => {
      div.remove();
    });
  }

  // Har 2 sekundda yangi tushuvchi rasm qo‘shiladi
  setInterval(createFallingImage, 10);