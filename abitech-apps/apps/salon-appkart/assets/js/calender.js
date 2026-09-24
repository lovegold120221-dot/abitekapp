
let d = new Date(), m = d.getMonth(), y = d.getFullYear();

function render() {
    const days = document.querySelector(".month-date"),
        title = document.querySelector(".main-title h4"),
        first = (new Date(y, m, 1).getDay() + 6) % 7,
        total = new Date(y, m + 1, 0).getDate();

    title.textContent = new Date(y, m).toLocaleString("default", { month: "short" }) + ", " + y;
    days.innerHTML = "<li></li>".repeat(first);

    for (let i = 1; i <= total; i++) {
        let li = document.createElement("li");
        li.textContent = i;

        if (i === d.getDate() && m === d.getMonth() && y === d.getFullYear())
            li.classList.add("active");

        li.onclick = () => {
            days.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");
        };

        days.appendChild(li);
    }
}

document.querySelector('[data-icon="chevron-left"]').onclick = () => { if (--m < 0) m = 11, y--; render(); };
document.querySelector('[data-icon="chevron-right"]').onclick = () => { if (++m > 11) m = 0, y++; render(); };

render();
