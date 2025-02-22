let currentIndex = 0;
const items = document.querySelectorAll(".item");

function updateHighlight() {
    items.forEach((item, index) => {
        item.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateHighlight();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateHighlight();
}
