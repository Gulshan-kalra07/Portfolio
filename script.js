let menubutton = document.getElementById('menubtn');
let navbar_middle = document.getElementById('navbar-middle');
let navbar_link_btn = document.getElementsByClassName('navbar_link_btn');

menubutton.onclick = () => {
    if (navbar_middle.classList.contains('hide')) {
        navbar_middle.classList.remove('hide');
        navbar_middle.classList.add('show');
        console.log('show');
        console.log(navbar_middle.classList.contains('show'));
    } else {
        navbar_middle.classList.remove('show');
        navbar_middle.classList.add('hide');
        console.log('hide');
        console.log(navbar_middle.classList.contains('hide'));
    }

}

navbar_link_btn.onclick = () => {
    if (navbar_middle.classList.contains('show')) {
        navbar_middle.classList.remove('show');
        navbar_middle.classList.add('hide');
        console.log('show');
        console.log(navbar_middle.classList.contains('show'));
    } else {
        navbar_middle.classList.remove('show');
        navbar_middle.classList.add('hide');
        console.log('hide');
        console.log(navbar_middle.classList.contains('hide'));
    }
}
