class CanalYoutube {

    static getVideos(jsonGeral){
        var listaVideos = [];
        listaVideos.length = 100;
        for (var i = 0; i < listaVideos.length; i++) {
            listaVideos[i] = new Video("https://placeholdit.imgix.net/~text?txtsize=33&txt=&w=320&h=180", "#");
        }
        CanalYoutube.getIdVideosFromAPI(jsonGeral, listaVideos);
        return listaVideos;
    }

    static getImageVideoFromAPI(videoId, apiUrl, video){
        var videoImagem = "";

        $.getJSON(apiUrl, function(resultado){
            videoImagem = resultado.items[0].snippet.thumbnails.medium.url;
            video.image = videoImagem;
            video.setar_td();
        });
        return videoImagem;
    }

    static verificarSeExisteNaLista(listaVideos, video){
        if(listaVideos.indexOf(video) > -1){
            return true;
        } else {
            return false;
        }
    }

    static getIdVideosFromAPI(apiUrl, listaVideos){
        var linkYoutube = "https://www.youtube.com/watch?v=";
        var jsonVideo = "https://api.myjson.com/bins/1e4f6v";
        var listaVideosId = [];
        var tds = document.querySelector(".video-coluna");
        $.getJSON(apiUrl, function(resultado){
            resultado.items.forEach(function(video){
                listaVideosId.push(video.id.videoId);
                var newvideo = new Video("", linkYoutube + video.id.videoId, "");
                CanalYoutube.getImageVideoFromAPI(video.id.videoId, jsonVideo, newvideo)
                for (var i = listaVideos.length-1; i >= 0 ; i--) {
                    if(listaVideos[i].link == "#" && !CanalYoutube.verificarSeExisteNaLista(listaVideos, newvideo)) {
                        newvideo.td = tds.children[i];
                        listaVideos[i] = newvideo;
                        break;
                    }
                }
            });
        });

        return listaVideosId;
    }
}

function criarVideos(listaVideos){
    for (var i = 0; i < listaVideos.length; i++) {
        criarTd(listaVideos[i]);
    }
}

function criarTd(video){
    var tr = document.querySelector(".video-coluna");
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");

    td.classList.add("video-celula");

    a.href = video.link;
    img.src = video.image;
    td.appendChild(a);
    a.appendChild(img);
    tr.appendChild(td);
}

var jsonGeral = "https://api.myjson.com/bins/ec9qf";
var jsonVideo = "https://api.myjson.com/bins/1e4f6v";

var listaVideos = CanalYoutube.getVideos(jsonGeral);
criarVideos(listaVideos);
