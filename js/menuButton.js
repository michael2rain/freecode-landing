export function menuButton() {
    const hammy = document.getElementById("menuButton");
    let firstClick = true;

    hammy.onclick = function () {
        if (firstClick) {
            // Primer click
            const navLinks = document.getElementById("navLinks");
            navLinks.classList.add("active");
            hammy.classList.toggle('opened');
            firstClick = false;
        } else {
            // Segundo click
            hammy.classList.remove("opened");
            const navLinks = document.getElementById("navLinks");
            navLinks.classList.remove("active");
            firstClick = true;
        }
    }
}