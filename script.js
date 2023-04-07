let redBtn = document.getElementById("red");
let berryBtn = document.getElementById("berry");
let dustyBtn = document.getElementById("dusty");
let peachyBtn = document.getElementById("peachy");
let nudeBtn = document.getElementById("nude");
let goldenBtn = document.getElementById("golden");
let moodyBtn = document.getElementById("moody");
let blackCheBtn = document.getElementById("blackChe");
let imgChange = document.getElementById("imgChange");

redBtn.onclick = function(){
    imgChange.src = "./img/labiosrojos.png";
}

berryBtn.onclick = function(){
    imgChange.src = "./img/labiosf.png";
}

dustyBtn.onclick = function(){
    imgChange.src = "./img/labiosR.png";
}

peachyBtn.onclick = function(){
    imgChange.src = "./img/labiosM.png";
}

nudeBtn.onclick = function(){
    imgChange.src = "./img/labiosN.png";
}

goldenBtn.onclick = function(){
    imgChange.src = "./img/labiosC.png";
}

moodyBtn.onclick = function(){
    imgChange.src = "./img/labiosCo.png";
}

blackCheBtn.onclick = function(){
    imgChange.src = "./img/labiosV.png";
}