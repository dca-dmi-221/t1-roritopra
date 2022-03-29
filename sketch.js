let clovers;
const cloverSongs = [{
  name: "Black Catcher",
  anime: "Black Clover - Temporade 10",
  location: "resources/BlackCatcher.mp3"
},
{
  name: "Black Rover",
  anime: "Black Clover - Temporade 3",
  location: "resources/BlackRover.mp3"
},
{
  name: "JUSTadICE",
  anime: "Black Clover - Temporade 9",
  location: "resources/JUSTadICE",
}
];

function setup() {
  createCanvas(1280, 720);
  clovers = new Window({
    background: "UI/Pantalla1.png",
    songs:cloverSongs
  })

}

function draw() {
  background(220);
  clovers.draw();
}