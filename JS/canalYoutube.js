class CanalYoutube {

    static getVideos(){
        var listaVideos = [];
        var primeiroVideo = new Video("imagem1", "link1");
        var segundoVideo = new Video("imagem2", "link2");
        listaVideos.push(primeiroVideo);
        listaVideos.push(segundoVideo);

        return listaVideos;
    }

    static getIdVideosFromAPI(apiUrl){
        var listaVideosId = [];
        $.getJSON(apiUrl, function(resultado){
            resultado.items.forEach(function(video){
                listaVideosId.push(video.id.videoId);
            });
        });

        return listaVideosId;
    }

    static getImageVideoFromAPI(videoId, apiUrl, video){
        var videoImagem = "";

        $.getJSON(apiUrl, function(resultado){
            videoImagem = resultado.items[0].snippet.thumbnails.medium.url;
            video.image = videoImagem;
        });
        return videoImagem;
    }
}

var jsonGeral = "https://api.myjson.com/bins/ec9qf";
var jsonVideo = "https://api.myjson.com/bins/1e4f6v";

var listaVideos = CanalYoutube.getVideos();
var listaIdVideos = CanalYoutube.getIdVideosFromAPI(jsonGeral);
var video = new Video("Teste", "Teste");
var imagem = CanalYoutube.getImageVideoFromAPI("teste", jsonVideo, video);
