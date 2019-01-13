class Video {
    constructor(image, link, td) {
        this.image = image;
        this.link = link;
        this.td = td;
    }

    setar_td() {
        this.td.firstChild.href = this.link;
        this.td.firstChild.firstChild.src = this.image;
    }
}
