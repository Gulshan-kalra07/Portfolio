
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menubtn");
    const menuIcon = document.getElementById("menubar-icon");
    const navbarMiddle = document.getElementById("navbar-middle");
    const menuLinks = document.querySelectorAll(".navbar_link_btn");

    // Toggle Menu on click
    menuBtn.addEventListener("click", function () {
        navbarMiddle.classList.toggle("hide");
        menuIcon.classList.toggle("ri-menu-fill");
        menuIcon.classList.toggle("ri-close-fill");
    });

    // Close menu when a link is clicked (Mobile Mode)
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (!navbarMiddle.classList.contains("hide")) {
                navbarMiddle.classList.add("hide");
                menuIcon.classList.add("ri-menu-fill");
                menuIcon.classList.remove("ri-close-fill");
            }
        });
    });

    // Smooth scrolling effect
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
>>>>>>> ff6fcbf (click_event)
