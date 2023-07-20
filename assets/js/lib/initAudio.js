// const initAudio = (playlist) => {
//     function nextCurrentTrack() {

//         if (currentTrack > playlist.length - 1) {
//             currentTrack++;
//         } else {
//             currentTrack = 0;
//         }

//     }



//     //autre type de declaration de fonction 

//     const togglePlayButton = () => {

//         if (audio.isPlaying) {
//             document.querySelector("#playPause>img").src = "./assets/img/cover/circle-pause-regular.svg";



//         } else {
//             document.querySelector("#playPause img").src = "./assets/img/cover/circle-play-regular.svg";

//         }
//     };

//     console.log("Hello Audio");
//     const playPause = document.querySelector("#playPause");

//     const audio = new Audio(playlist[currentTrack].audio);

//     // je peux utiliser soit 
//     // audio.isPlaying = false;
//     // ou
//     // audio["isPlaying"]

//     audio.isPlaying = false;
//     console.dir(audio);
//     playPause.addEventListener("click", () => {
//         // condition ternaire
//         // dans une ternaire le ? sépare ma condition ( à droite ) de mon instruction unique
//         // pour true (a gauche)
//         // et le signe : renverra l'instruction unique pour false ( à gauche )
//         audio.isPlaying === true ? audio.pause() : audio.play();
//         audio.isPlaying === true ? audio.isPlaying = false
//             : audio.isPlaying = true

//         ///////////////////////////////////////////////////////////////////////




//     })
//     next.addEventListener("click", () => {

//         // lecture ou pas
//         // si lecture(isPlaying)
//         if (audio.isPlaying) {
//             // -> audio.pause()
//             audio.pause();
//             // -> currentTrack++; sous condition de taille du tableau d'objet
//             nextCurrentTrack();
//             // -> audio.src à redefinir avec le currentTrack incrémenté
//             audio.src = playlist[currentTrack].audio;
//             // -> audio.play()
//             audio.play();
//         } else {
//             //sinon
//             // -> currentTrack++; sous condition de taille du tableau d'objet
//             nextCurrentTrack();

//             // -> audio.src à redefinir avec le currentTrack incrémenté
//             audio.src = playlist[currentTrack].audio;
//             // -> audio.play()
//             audio.play();
//             // -> passer isPlaying à True
//             audio.isPlaying = true;
//             // ->gestion affichage bouton playPause et proprété isPlaying
//             togglePlayButton();
//             // -> isPlaying = true
//             audio.isPlaying = true;

//         }
//     })
// }





// export { initAudio }


const initAudio = (playlist) => {
    let currentTrack = 0; // Initialise l'index de la piste actuelle à 0

    function nextCurrentTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        // Cela assure que l'index de la piste actuelle revient à 0
        // lorsqu'il atteint la fin de la playlist.
    }

    function prevCurrentTrack() {
        // On ajuste le calcul de l'index de la piste précédente
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        // En ajoutant playlist.length avant de prendre le modulo,
        // on s'assure que l'index reste positif même si currentTrack est 0.
    }

    const togglePlayButton = () => {
        const playPauseImage = document.querySelector("#playPause img");
        if (audio.isPlaying) {
            playPauseImage.src = "./assets/img/cover/circle-play-regular.svg";
        } else {
            playPauseImage.src = "./assets/img/cover/circle-pause-regular.svg";
        }
    };

    //function de formatage de temps audio 
    const horloge = (temps) => {
        let totalHeures = Math.floor(temps / 3600);
        let totalMinutes = Math.floor(temps / 60);
        // pour récupérer le nombre de secondes restantes à mon temps exprimé en minutes
        // j'utilise l'opérateur mathématique modulo %
        let resteSeconde = Math.floor(temps % 60);
        console.dir(totalHeures.lenght);
        console.dir(totalMinutes);
        console.log(resteSeconde);
        // si j'utilise à la suite d'une condition qu'une seule instruction
        //je peux la déclarer sans les {} 
        if (totalHeures <= 9) totalHeures = "0" + totalHeures;
        if (totalMinutes <= 9) totalMinutes = "0" + totalMinutes;
        if (resteSeconde <= 9) resteSeconde = "0" + resteSeconde;
        // les fonctions peuvent retourner le resultat d'une opération
        // avec le mot clé return()
        return(totalHeures + ":" + totalMinutes + ":" + resteSeconde);
    }

    console.log("Hello Audio");
    const playPause = document.querySelector("#playPause");
    const next = document.querySelector("#next"); // Supposons que le bouton "next" ait l'ID "next"
    const prev = document.querySelector("#prev"); // Supposons que le bouton "prev" ait l'ID "prev"
    const volumeDown = document.querySelector("#volumeDown");
    const volumeUp = document.querySelector("#volumeUp");
    const time = document.querySelector('#time');
    const audio = new Audio(playlist[currentTrack].audio);

    // Initialise la propriété isPlaying pour l'objet audio
    audio.isPlaying = false;

    console.dir(audio);

    playPause.addEventListener("click", () => {
        // Alterne entre lecture et pause en fonction de l'état actuel
        audio.isPlaying ? audio.pause() : audio.play();
        audio.isPlaying = !audio.isPlaying;
        togglePlayButton(); // Met à jour l'apparence du bouton play/pause
    });

    next.addEventListener("click", () => {
        if (audio.isPlaying) {
            audio.pause();
        }

        nextCurrentTrack();
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
        togglePlayButton(); // Met à jour l'apparence du bouton play/pause
    });

    prev.addEventListener("click", () => {
        if (audio.isPlaying) {
            audio.pause();
        }

        prevCurrentTrack();
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
        togglePlayButton(); // Met à jour l'apparence du bouton play/pause
    });

    // utilisation d'une fonction event raccourcie à la place du traditionnel addEventListener : ex onclick,onekeyup,onscroll, etc.
random.onclick = () =>{
console.log("click sur random");
}
    volumeDown.addEventListener("click", () => {
        console.dir(audio.volume);
        // je veux retirer 10% au volume actuel (entre 0 et 1/ fixer à 1 par défaut)
        audio.volume = audio.volume - 0.1
        // raccourcis mais identique 

        audio.volume = Math.round(audio.volume * 100) / 100;
        if (audio.volume > 0) {
            audio.volume -= 0.1;
        }


    })



    volumeUp.addEventListener("click", () => {
        console.dir(audio.volume);

        audio.volume = Math.round(audio.volume * 100) / 100;
        if (audio.volume < 1) {
            audio.volume += 0.1;
        }

    })
    setTimeout(() => {
// grace au return de ma fonction horloge je peux 
// utiliser horloge come une valeur
        let  tmpHorloge =horloge(audio.currentTime)
// console.log(tmpHorloge);

        setInterval(() => {
            // console.log(horloge(Math.round(audio.currentTime)));
            time.textContent = horloge(Math.round(audio.currentTime))+ " / "
            +horloge(audio.duration)
        }, 1000)



    }, 500

    )








};

export { initAudio };