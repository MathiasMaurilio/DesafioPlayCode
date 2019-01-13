var jsonGeral = "https://api.myjson.com/bins/ec9qf";
var jsonVideo = "https://api.myjson.com/bins/1e4f6v";
var tr = $(".video-coluna");

var listaVideos = VideosDoYoutube.inicializaVideos(jsonGeral);
InicializarTds(listaVideos);
console.log(listaVideos);

function InicializarTds(listaVideos){
    listaVideos.forEach((video) => criarTd(video));
}

function contadorDeVideos(numerDoVideo){
    $("#quantidade-faltando").text(numerDoVideo);
}

function criarTd(video){
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");

    td.classList.add("video-celula");

    a.href = video.link;
    img.src = video.image;
    td.appendChild(a);
    a.appendChild(img);
    tr.append(td);
}
