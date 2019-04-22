const secondMenu = () => {
    const secondNavList = document.getElementById("second-nav-list");

    if (secondNavList.style.display === "none") {
        secondNavList.style.display = "block";
    }
    else {
        secondNavList.style.display = "none";
    }
}

const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", secondMenu);


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const brandHeading = document.getElementById("site-brand__heading");
    const navLinks = document.querySelectorAll(".nav-link");

    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        header.style.backgroundColor = "#fff";
        header.style.padding = "4px";
        brandHeading.style.color = "#000";
        menuIcon.style.color = "#000";
        navLinks.forEach(item => {
            item.style.color = "#000";
        })
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.padding = "32px";
        brandHeading.style.color = "#fff";
        menuIcon.style.color = "#fff";
        navLinks.forEach(item => {
            item.style.color = "#fff";
        })
    }
})