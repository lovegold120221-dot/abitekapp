/* ==================
1.scroll header
======================*/
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});



/* ============ Play Button JS ==============*/
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".custom-play-button");

    if (playButton) {
        playButton.addEventListener("click", function () {
            const video = document.getElementById("movie-video");
            const poster = document.getElementById("poster-image");

            if (poster) poster.style.display = "none";
            if (video) {
                video.style.display = "block";
                video.play();
            }
            playButton.style.display = "none";
        });
    }
});
