class CanalYoutube {
    static getVideos(){
        var listaVideos = [];
        var primeiroVideo = new Video("imagem1", "link1");
        var segundoVideo = new Video("imagem2", "link2");
        listaVideos.push(primeiroVideo);
        listaVideos.push(segundoVideo);

        return listaVideos;
    }
}

var listaVideos = CanalYoutube.getVideos();
console.log(listaVideos);
