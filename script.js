// FILTER SYSTEM
function filterImages(category, button) {
    const images = document.querySelectorAll(".gallery img");
    const buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = "scale(1)";
            }, 50);
        } else {
            img.style.opacity = 0;
            img.style.transform = "scale(0.9)";
            setTimeout(() => {
                img.style.display = "none";
            }, 300);
        }
    });
}

// LIGHTBOX
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// MUSIC PLAY ON FIRST CLICK
const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });