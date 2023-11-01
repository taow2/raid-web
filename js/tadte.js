const imgMap = new Map([
    ["/TADTE_photos/group.jpg", [0, "TADTE_photos/t_350e.jpg", 'Our CEO(3rd from left) and business partners', '我們CEO(左3)和商業夥伴的團體照']],
    ["/TADTE_photos/t_350e.jpg", ["TADTE_photos/group.jpg", "TADTE_photos/negotiate.jpg", '350e at our booth', '展場內的350e']],
    ["/TADTE_photos/negotiate.jpg", ["TADTE_photos/t_350e.jpg", "TADTE_photos/modules.jpg", 'Introducting products and negotiating', '介紹產品和洽談生意中']],
    ["/TADTE_photos/modules.jpg", ["TADTE_photos/negotiate.jpg", 0, 'REI General Manager introducing modules', '六俊總經理介紹零件產品']],
    ["/img/tadte_map.jpg", [0, 0, '', '']]
]);

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var nav = document.getElementById("nav_id");

function openFullImg(pic) {
    fullImgBox.style.display = "grid";
    fullImg.src = pic;
    nav.style.display = "none";

    checkArrow(pic);
    getImgTxt(pic);
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    nav.style.display = "block";

}

function getPreImg() {
    var fullImgNow = document.getElementById("fullImg");
    var url = new URL(fullImgNow.src);
    fullImgNow.src = imgMap.get(url.pathname)[0];
    checkArrow(fullImgNow.src);
    getImgTxt(fullImgNow.src);
}

function getNextImg() {
    var fullImgNow = document.getElementById("fullImg");
    var url = new URL(fullImgNow.src);
    fullImgNow.src = imgMap.get(url.pathname)[1];
    checkArrow(fullImgNow.src);
    getImgTxt(fullImgNow.src);
}

function checkArrow(pic) {
    // to get rid of domain part in path
    var url = new URL(pic);
    var preImg = document.getElementById("preImg");
    var nextImg = document.getElementById("nextImg");

    preImg.style.display = imgMap.get(url.pathname)[0] == 0? "none" : "block";
    nextImg.style.display = imgMap.get(url.pathname)[1] == 0? "none" : "block";
}

function getImgTxt(pic) {
    var url = new URL(pic);
    var txtEng = imgMap.get(url.pathname)[2];
    var txtCn = imgMap.get(url.pathname)[3];
    var imgTxtEng = document.getElementById('imgTxtEng');
    var imgTxtCn = document.getElementById('imgTxtCn');
    imgTxtEng.innerHTML = txtEng;
    imgTxtCn.innerHTML = txtCn;
}