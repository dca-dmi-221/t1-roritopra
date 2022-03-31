let temp1;
let temp2;
let nero;
let playlist;

const temporade1 = [{
  name: "Haruka Mirai",
  anime: "Black Clover - Temporade 1",
  location: "Temporada1/HarukaMirai1.mp3"
},
{
  name: "PAiNT it BLACK",
  anime: "Black Clover - Temporade 1",
  location: "Temporada1/PAINTitBLACK2.mp3"
},
{
  name: "Black Rover",
  anime: "Black Clover - Temporade 1",
  location: "Temporada1/BlackRover3.mp3",
},
{
  name: "GUESS WHO IS BACK",
  anime: "Temporade 1",
  location: "Temporada1/tomorrow-lillix.mp3",
}
];

const temporade2 = [{
  name: "Gamushara",
  anime: "Black Clover - Temporade 2",
  location: "Temporada2/Gamushara5.mp3",
},
{
  name: "Rakugaki Page",
  anime: "Black Clover - Temporade 2",
  location: "Temporada2/RakugakiPage6.mp3",
},
{
  name: "JUSTadICE",
  anime: "Black Clover - Temporade 2",
  location: "Temporada2/Milkshake.mp3",
},
{
  name: "Sky & Blue",
  anime: "Black Clover - Temporade 2",
  location: "Temporada2/sky&blue8.mp3",
},
{
  name: "Overdrive",
  anime: "Mean Girls",
  location: "Mean/Overdrive.mp3",
},
];

function setup() {
  createCanvas(1280, 720);
  temp1 = new Window({
    background: "UI/Pantalla1.png",
    songs:cloverSongs
  })

}

function draw() {
  background(220);
  temp1.draw();
}