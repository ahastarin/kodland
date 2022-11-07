window.onscroll = function (event) {
    var scroll = this.scrollY;
    var navbar = document.querySelector('.navbar');
    if (scroll > 100) {
        navbar.style.backgroundColor = '#212529';
    } else if (scroll < 100) {
        navbar.style.backgroundColor = '#0000007c';
    }
}
