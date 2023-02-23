var music_playing = false;
let music_button = document.getElementById("music");


let music = new Audio(music_src);
music.loop=true;
music.volume=0.25;


function music_play() {
    music.play();
    music_playing = true;
    music_button.src = "../ressources/images/music-on.png";
    music_button.alt = "Musique ON";
    music_button.title = "Désactiver la musique";
}

function music_stop() {
    music.pause();
    music_playing = false;
    music_button.src = "../ressources/images/music-off.png";
    music_button.alt = "Musique OFF";
    music_button.title = "Activer la musique";
}


//automatic playing
document.body.addEventListener('click', (event) => {
    if(location.search.substring(1)=="music") {music_play()}
},{once : true});

//manual playing
music_button.addEventListener("click", (event) => {
    if(music_playing) {music_stop()}
    else{music_play()}
});