/*========================
1. Filter Select JS
 ======================*/
document
  .querySelectorAll(".filter-row li, .filter-color li, .size-select li")
  .forEach((item) => {
    item.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".active").forEach((sibling) => {
        sibling.classList.remove("active");
      });

      this.classList.add("active");
    });
  });


/*=========== food filter JS ==============*/
document.querySelectorAll('.filter-left-box a').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.filter-left-box a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    const target = link.dataset.filterTarget;
    document.querySelectorAll('.filter-right-box').forEach(section =>
      section.classList.toggle('d-none', section.dataset.filter !== target)
    );
  })
);