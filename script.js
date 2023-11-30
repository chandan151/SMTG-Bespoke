document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    function changeBackground(item) {
        const isGradient = item.style.background.includes("linear-gradient");
        if (isGradient) {
            // Switch from gradient to solid color
            item.style.background = getRandomColor();
        } else {
            // Switch from solid color to gradient
            item.style.background = getRandomGradient();
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomGradient() {
        return `linear-gradient(${Math.random() * 360}deg, ${getRandomColor()}, ${getRandomColor()})`;
    }

    function runChangeBackground(item) {
        setInterval(() => {
            changeBackground(item);
        }, Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000);
    }

    // Run changeBackground for each grid item separately
    gridItems.forEach((item) => {
        runChangeBackground(item);
    });
});
