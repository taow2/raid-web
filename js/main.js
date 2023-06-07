//for preventing JS flickering
let body = document.getElementById('body-id');
body.classList.remove('d-none');

// navbar adjust

let nav_brand = document.getElementById('brand');

nav_brand.classList.add('fw-bold');

let nav_bar = document.querySelector('.navbar-nav');
let nav_item = document.createElement('li');
nav_item.classList.add('nav-item');
nav_item.innerHTML = '<a href="https://raid-forum.000webhostapp.com/" target="_blank" rel="noreferrer noopener" class="nav-link"><strong><span class="eng">Forum</span><span class="cn d-none">討論區</span></strong></a>';
nav_bar.appendChild(nav_item);

// Switch Language

let text_eng = document.querySelectorAll('.eng');
let text_cn = document.querySelectorAll('.cn');

console.log(text_eng.length);
console.log(text_cn.length);

if(localStorage.getItem("language") == null || localStorage.getItem("language") == "eng") {
    for (i = 0; i < text_eng.length; i++) {
        if(!text_cn[i].classList.contains('d-none')) {
            text_cn[i].classList.add('d-none');
        }
        if(text_eng[i].classList.contains('d-none')) {
            text_eng[i].classList.remove('d-none');
        }
    }
}
else {
    for (i = 0; i < text_eng.length; i++) {
        if(!text_eng[i].classList.contains('d-none')) {
            text_eng[i].classList.add('d-none');
        }
        if(text_cn[i].classList.contains('d-none')) {
            text_cn[i].classList.remove('d-none');
        }
    }
}

function switch_lang() {
    if(localStorage.getItem("language") == null || localStorage.getItem("language") == "eng") {
        localStorage.setItem("language", "cn");
        for (i = 0; i < text_eng.length; i++) {
            text_eng[i].classList.add('d-none');
            text_cn[i].classList.remove('d-none');
        }
    }
    else {
        localStorage.setItem("language", "eng");
        for (i = 0; i < text_eng.length; i++) {
            text_cn[i].classList.add('d-none');
            text_eng[i].classList.remove('d-none');
        }
    }
}






