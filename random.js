var artists = ["Kendrick Lamar", "Mick Jenkins", "J Cole", "XXXtentacion"];

function randArtist(){
    console.log(artists[Math.round(Math.rando() * artists.length - 1)])
}

for(var i=0; i<5; i++){
    randArtists();
}