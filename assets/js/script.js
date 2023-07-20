// lorsque j'importe un ou plusieurs element je le fait toujours 
// en début de script
import { playlist_hiphop} from "./lib/playlist_hiphop.js";
import { initSlider} from "./lib/initSlider.js";
import { initAudio } from "./lib/initAudio.js";
// initialisation de mes variables 
//let currentTrack = 0 ;
// pour rendre global une variable (partagée entre tous mes scripts)
//j'utilise la déclaration globalThis
globalThis.currentTrack = 0;




console.dir(playlist_hiphop);
console.log("Hello");
initSlider(playlist_hiphop,currentTrack, false, "fadeOut" );
initAudio(playlist_hiphop);


