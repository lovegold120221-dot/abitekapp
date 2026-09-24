
/* ==============
1. Paragraphs show  JS
=================*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".custom-collapse-box .toggle-arrow i").forEach(function (icon) {
        icon.addEventListener("click", function () {
            this.closest(".custom-collapse-box").classList.toggle("open");
        });
    });
});
