class CanalYoutube {

    static getVideos(jsonGeral){
        var listaVideos = [];
        CanalYoutube.getIdVideosFromAPI(jsonGeral, listaVideos);
        return listaVideos;
    }

    static getImageVideoFromAPI(videoId, apiUrl, video){
        var videoImagem = "";

        $.getJSON(apiUrl, function(resultado){
            videoImagem = resultado.items[0].snippet.thumbnails.medium.url;
            video.image = videoImagem;
        });
        return videoImagem;
    }

    static getIdVideosFromAPI(apiUrl, listaVideos){
        var linkYoutube = "https://www.youtube.com/watch?v=";
        var jsonVideo = "https://api.myjson.com/bins/1e4f6v";
        var listaVideosId = [];
        $.getJSON(apiUrl, function(resultado){
            resultado.items.forEach(function(video){
                listaVideosId.push(video.id.videoId);
                var newvideo = new Video("", linkYoutube + video.id.videoId);
                CanalYoutube.getImageVideoFromAPI(video.id.videoId, jsonVideo, newvideo)
                listaVideos.push(newvideo);
            });
        });

        return listaVideosId;
    }
}

var jsonGeral = "https://api.myjson.com/bins/ec9qf";
var jsonVideo = "https://api.myjson.com/bins/1e4f6v";

var listaVideos = CanalYoutube.getVideos(jsonGeral);
console.log(listaVideos);
