let menuIcon = document.getElementById("menu-icon");

const secondMenu = () => {
    let secondNavList = document.getElementById("second-nav-list");
    if (secondNavList.style.display === "none") {
        secondNavList.style.display = "block";
    }
    else {
        secondNavList.style.display = "none";
    }
}
menuIcon.addEventListener("click", secondMenu);
