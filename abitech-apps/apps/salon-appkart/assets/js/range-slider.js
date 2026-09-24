/*============
    2. Two side range js
==================*/
document.addEventListener("DOMContentLoaded", () => {
    const sliderGroups = document.querySelectorAll(".custom-slider-theme");

    sliderGroups.forEach(group => {
        const rangeMin = group.querySelector(".min-range");
        const rangeMax = group.querySelector(".max-range");
        const inputMin = group.querySelector(".input-min");
        const inputMax = group.querySelector(".input-max");
        const boxMin = group.querySelector(".input-min-box");
        const boxMax = group.querySelector(".input-max-box");
        const progress = group.querySelector(".progress-slider");

        if (!rangeMin || !rangeMax || !inputMin || !inputMax || !boxMin || !boxMax || !progress) {
            console.warn("Missing elements in slider group.");
            return;
        }

        const isRTL = document.documentElement.getAttribute("dir") === "rtl";

        function updateSlider() {
            let min = parseInt(rangeMin.value);
            let max = parseInt(rangeMax.value);
            const maxVal = parseInt(rangeMin.max);

            if (max - min <= 0) return;

            if (isRTL) {
                progress.style.right = (min / maxVal) * 100 + "%";
                progress.style.left = 100 - (max / maxVal) * 100 + "%";

                const offset = 22;
                boxMin.style.right = `calc(${(min / maxVal) * 100}% - ${offset}px)`;
                boxMax.style.right = `calc(${(max / maxVal) * 100}% - ${offset}px)`;
                boxMin.style.left = "auto";
                boxMax.style.left = "auto";
            } else {
                progress.style.left = (min / maxVal) * 100 + "%";
                progress.style.right = 100 - (max / maxVal) * 100 + "%";

                const offset = 22;
                boxMin.style.left = `calc(${(min / maxVal) * 100}% - ${offset}px)`;
                boxMax.style.left = `calc(${(max / maxVal) * 100}% - ${offset}px)`;
                boxMin.style.right = "auto";
                boxMax.style.right = "auto";
            }

            inputMin.value = min;
            inputMax.value = max;
        }

        inputMin.addEventListener("input", () => {
            rangeMin.value = inputMin.value;
            updateSlider();
        });

        inputMax.addEventListener("input", () => {
            rangeMax.value = inputMax.value;
            updateSlider();
        });

        rangeMin.addEventListener("input", updateSlider);
        rangeMax.addEventListener("input", updateSlider);

        updateSlider();
    });
});


/*============
2.1 One side range js
==================*/
document.addEventListener("DOMContentLoaded", () => {
    const range = document.querySelector('.range-input');
    const tooltip = document.querySelector('.range-tooltip');

    if (!range || !tooltip) {
        console.warn("One-side range slider elements missing.");
        return;
    }

    const setValue = () => {
        const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
        const newPosition = 16 - (newValue * 0.32);
        tooltip.innerHTML = `<span>${range.value}</span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };

    range.addEventListener("input", setValue);
    setValue();
});





