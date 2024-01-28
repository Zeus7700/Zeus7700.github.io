function toggleMenu() {
    const menu = document.querySelector(".Menu_links");
    const icon = document.querySelector(".Dropdown_Icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}