// lorsque j'importe un ou plusieurqs element je le fait toujours 
// en début de script
import { playlist_hiphop } from "./lib/playlist_hiphop.js";
import { initSlider } from "./lib/initSlider.js";
// initialisation de mes variables
let currentTrack = 0;


console.dir(playlist_hiphop);
console.log("Hello");
initSlider(playlist_hiphop,currentTrack,false,"fadeOut");
