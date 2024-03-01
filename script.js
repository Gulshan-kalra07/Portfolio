document.getElementById("menubar-icon").onclick = function () {
    myfunction();
};
function myfunction() {
    document.getElementById("navbar-middle").classList.toggle("show");
}

document.getElementsByClassName("navbar_link_btn").onclick = function () {
    hide();
}

function hide() {
    document.getElementById("navbar-middle").classList.toggle("hide");
}
    
