document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".summary li > a");

    items.forEach((item) => {
        item.addEventListener("click", function (event) {
            let parent = this.parentElement;
            let submenu = parent.querySelector("ul");

            if (submenu) {
                event.preventDefault(); // Evita la navegación
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                parent.classList.toggle("open");
            }
        });
    });
});
