
let root = document.querySelector(':root')

// LABORATORIO 6
function toggleMenu() {
    let button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    let menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

function fixPhotoOnScroll() {
    let photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';
}

window.addEventListener("scroll", fixPhotoOnScroll, false);

function showImage(imgElement) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const enlargedImg = document.createElement('img');
    enlargedImg.src = imgElement.src;
    enlargedImg.style.maxWidth = '90%';
    enlargedImg.style.maxHeight = '90%';
    enlargedImg.style.border = '5px solid white';
    enlargedImg.style.borderRadius = '10px';

    modal.appendChild(enlargedImg);

    modal.onclick = function () {
        document.body.removeChild(modal);
    };

    document.body.appendChild(modal);
}


function cerrarModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal')
}

