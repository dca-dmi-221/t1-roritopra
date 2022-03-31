class Window  {
    constructor({
        background,
        songs
    }) {
        this.background = background;
        this.songs = songs;
        this.bgImage = loadImage(background);
        this.songCards= [];
        console.log(songs);
        this.songs.forEach((item, id) => {
            const newSong= new Song({
                name: item.name, 
                anime: item.anime,
                location: item.location,
                x: 1060,
                y: (id+0.7)*210
            })
            this.songCards.push(newSong);
        });

    }
    draw() {
        image(this.bgImage, 0, 0);
        this.songCards.forEach((song)=>{
            song.draw();
        })
    }
}