document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    function changeBackground() {
        gridItems.forEach((item) => {
            const randomColor = getRandomColor();
            item.style.background = randomColor;
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});
