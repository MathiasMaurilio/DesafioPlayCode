class Video {
    constructor(image, link, td) {
        this.image = image;
        this.link = link;
        this.td = td;
    }

    setar_td(){
        this.td.children[0].href = this.link;
        this.td.children[0].children[0].src = this.image;
    }
}
