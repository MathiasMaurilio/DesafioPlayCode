class VideosDoYoutube {
    static inicializaVideos(){
        var listaVideos = [];
        listaVideos.length = 100;

        for (var i = 0; i < listaVideos.length; i++) {
            listaVideos[i] = new Video("https://placeholdit.imgix.net/~text?txtsize=33&txt=&w=320&h=180", "#");
        }

        return listaVideos;
    }

    static getVideosFromAPI(apiUrl, listaVideos){
        var linkYoutube = "https://www.youtube.com/watch?v=";
        var tr = $(".video-coluna");

        $.getJSON(apiUrl, function(resultado){

            resultado.items.forEach(function(video){
                for (var i = listaVideos.length-1; i >= 0; i--) {
                    if(listaVideos[i].link == "#"){

                        listaVideos[i].link = linkYoutube + video.id.videoId;
                        listaVideos[i].image = video.snippet.thumbnails.medium.url;
                        listaVideos[i].td = tr.contents()[i];
                        listaVideos[i].setar_td();

                        contadorDeVideos(i);

                        break;
                    }
                }
            });
        });
    }
}
