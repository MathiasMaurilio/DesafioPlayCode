var apiYoutubePrimeira = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTJ1mLre8sT-d4KuvmQsSQA&maxResults=50&type=video&fields=nextPageToken%2Citems(id%2Csnippet(thumbnails(medium)))&key=AIzaSyDVG1UxvcC87C-AKmudaMIpbgw9XRTeD1M";
var apiYoutubeSegunda = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTJ1mLre8sT-d4KuvmQsSQA&maxResults=50&pageToken=CDIQAA&type=video&fields=nextPageToken%2Citems(id%2Csnippet(thumbnails(medium)))&key=AIzaSyDVG1UxvcC87C-AKmudaMIpbgw9XRTeD1M";
var tr = $(".video-coluna");

var listaVideos = VideosDoYoutube.inicializaVideos();
VideosDoYoutube.getVideosFromAPI(apiYoutubePrimeira, listaVideos);
VideosDoYoutube.getVideosFromAPI(apiYoutubeSegunda, listaVideos);

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
