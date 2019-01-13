class VideosDoYoutube {
    static inicializaVideos(urlDosVideos){
        var listaVideos = [];
        listaVideos.length = 100;

        for (var i = 0; i < listaVideos.length; i++) {
            listaVideos[i] = new Video("https://placeholdit.imgix.net/~text?txtsize=33&txt=&w=320&h=180", "#");
        }

        this.getIdVideosFromAPI(urlDosVideos, listaVideos);
        return listaVideos;
    }

    static getImageVideoFromAPI(videoId, apiUrl, video){

        $.getJSON(apiUrl, function(resultado){
            let videoImagem = resultado.items[0].snippet.thumbnails.medium.url;
            video.image = videoImagem;
            video.setar_td();
        });
    }

    static getIdVideosFromAPI(apiUrl, listaVideos){
        var linkYoutube = "https://www.youtube.com/watch?v=";
        var jsonVideo = "https://api.myjson.com/bins/1e4f6v";

        var tr = $(".video-coluna");

        $.getJSON(apiUrl, function(resultado){

            resultado.items.forEach(function(video){
                for (var i = listaVideos.length-1; i >= 0; i--) {
                    if(listaVideos[i].link == "#"){

                        listaVideos[i].link = linkYoutube + video.id.videoId;
                        listaVideos[i].td = tr.contents()[i];

                        VideosDoYoutube.getImageVideoFromAPI(video.id.videoId, jsonVideo, listaVideos[i]);

                        contadorDeVideos(i);

                        break;
                    }
                }
            });
        });
    }
}
