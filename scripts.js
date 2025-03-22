document.addEventListener("DOMContentLoaded", function () {
    console.log("Tara’s web space loaded.");
    const anchors = document.querySelectorAll("nav a");
    anchors.forEach(a => {
        a.onclick = function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        };
    });
});