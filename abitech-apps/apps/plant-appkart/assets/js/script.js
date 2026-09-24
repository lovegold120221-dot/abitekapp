/*-----------------------------------------------------------------------------------

    Template Name:App kart PWA - classified - car rental, real estate,job find 
    Template URI: https://themes.pixelstrap.net/fuso
    Description: This is classified Html Template
    Author: Pixelstrap
    Author URL: https://themeforest.net/user/pixelstrap

----------------------------------------------------------------------------------- */

// 1. Dark Mode JS
// 2. RTL JS
// 3. Loader JS
// 4. Ratio JS
// 5. wishlist added start JS
// 6. Custom Select Js 
// 7. bottom header JS 
// 8. change password JS
// 9. rating button JS
// 10. Copy Link JS
// 11. Search Close JS

/* ======================
 1. Dark Mode Js
=========================*/
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const checkbox = document.getElementById('toggleDarkMode');

  const setDarkMode = (enabled) => {
    body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
    if (checkbox) checkbox.checked = enabled;
  };

  setDarkMode(localStorage.getItem('darkMode') === 'enabled');

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      setDarkMode(checkbox.checked);
    });
  }
});

/* ===============
2. RTL JS
==================*/
const toggle = document.getElementById('rtlToggle');

const isRTL = localStorage.rtl === '1';
document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
if (toggle) toggle.checked = isRTL;

toggle?.addEventListener('change', (e) => {
  const enabled = e.target.checked;
  document.documentElement.setAttribute('dir', enabled ? 'rtl' : 'ltr');
  localStorage.rtl = enabled ? '1' : '0';
});

/* ================
3. Loader JS 
===================*/
window.addEventListener('load', function () {
  setTimeout(function () {
    const loader = document.querySelector('.loader');

    if (!loader) return;

    loader.classList.add('hide');

    setTimeout(() => {
      loader.remove();
    }, 800);
  }, 2000);
});

/*====================
4. Ratio JS
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];

    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-bottom");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
      background-image: url(${bgSrc});
      background-size:cover;
      background-position: center;
      background-repeat: no-repeat;
      display: block;
      `
    );
  }
});

/*=====================
5. wishlist added start JS
==========================*/
const divs = document.querySelectorAll(".wishlist-btn");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    event.target.parentNode.classList.toggle("animate");
    event.target.parentNode.classList.toggle("active");
    event.target.parentNode.classList.toggle("inactive");
  })
);


/*==================
6. Custom Select JS 
=====================*/
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".plant-otp-form .form-control");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      if (event.inputType !== "deleteContentBackward" && event.target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !event.target.value) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });

    input.addEventListener("focus", () => {
      input.select();
    });
  });
});


/* =================
7. bottom header JS
==================*/
const navItems = document.querySelectorAll('.bottom-header ul li');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


/* =================
8. change password JS
====================*/
document.querySelectorAll('.password-icon').forEach(icon => {
  icon.onclick = () => {
    const input = icon.closest('.form-group').querySelector('input');
    const [eye, eyeSlash] = [icon.querySelector('.eye-icon'), icon.querySelector('.eye-slash')];
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    eye.style.display = show ? 'inline' : 'none';
    eyeSlash.style.display = show ? 'none' : 'inline';
  };
});


/* ====================
9. rating button JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".loadMore");
  if (!btn) return;

  btn.addEventListener("click", e => {
    e.preventDefault();

    const hiddenItems = [...document.querySelectorAll(".rating-item")].filter(el => el.style.display === "none" || getComputedStyle(el).display === "none");

    hiddenItems.slice(0, 3).forEach(el => el.style.display = "block");

    if (hiddenItems.length <= 3) {
      btn.textContent = "No more ratings";
      btn.disabled = true;
    }
  });
});

/* ================
10. Copy Link JS
===================*/
function copyLink(el) {
  const input = el.parentElement.querySelector('.link');

  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value)
      .then(() => alert("Link copied!"))
      .catch(() => alert("Failed to copy link."));
  } else {
    alert("Input not found");
  }
}
/* ================
11. Search Close JS
===================*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".recent-search-listing .close-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      this.closest("li").remove();
    });
  });
});
