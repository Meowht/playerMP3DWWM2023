
 function initSlider(playlist, track, direction, effect) {

    console.log("initialisation du slider");
    console.dir(playlist);
     //ici je récupere l'url de l'image à afficher dans mon slider
    console.dir(playlist[track].cover);
    const slider = document.querySelector("#slider");
    let trackB = null;
     if (direction === true) {
        trackB = track + 1;
    } else {
         trackB = playlist.length - 1;
    }
     // creation d'une première image imageA
     const imageA = document.createElement("img");
     imageA.id = "imageA";
    imageA.src = playlist[track].cover;
    imageA.alt = playlist[track].author;
     imageA.style.zIndex = "2";
     slider.append(imageA);

    const imageB = document.createElement("img");
     imageB.id = "imageB";
    imageB.src = playlist[trackB].cover;
   imageB.alt = playlist[trackB].author;
    imageB.style.zIndex = "0";
    slider.append(imageB);
    // creation d'une balise texte texteA
    const texteA = document.createElement("p");
    texteA.id = "texteA";

     //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
    texteA.innerHTML = "<p class ='title'>" + playlist[trackB].title + "</p><p class='author'>"
        + playlist[trackB].author + "</p>" + "<p class ='year'>" + playlist[trackB].year + "</p><p class='genre'>"
        + playlist[trackB].genre + "</p>";
    texteA.style.zIndex = "2";
   slider.append(texteA);
    const texteB = document.createElement("p");
    texteB.id = "texteB";

    //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
    texteB.innerHTML = "<p class ='title'>" + playlist[trackB].title + "</p><p class='author'>"
        + playlist[trackB].author + "</p>" + "<p class ='year'>" + playlist[trackB].year + "</p><p class='genre'>"
        + playlist[trackB].genre + "</p>";
   texteB.style.zIndex = "1";
   slider.append(texteB);
   // j'aimerai connaitre le height de mon imageA mais je doit 
    // d'abord attendre que cette image soit uploader par mon navigateur
    // je dois temporiser avec javascript avant d'obtenir les informations
     // de mon image
     setTimeout(() => {
        console.dir(imageA.clientHeight);
        slider.style.height = imageA.clientHeight + "px";
     }, 500);

    // Toutes les 5 secondes je souhaiterais faire disparaitre 
    // l'imageA et le texteA pour faire apparaitre l'imageB et 
    // le texteB situés en dessous

    setInterval(() => {
        //ajouter ma transition
        imageA.classList.add("trans");
       texteA.classList.add("trans");
       imageA.classList.add(effect);
       texteA.classList.add(effect);
       // j'attend la fin de ma transition (500ms) pour la suite

       setTimeout(() => {
          //je commence par incrémenter track


             if (direction) {


               if (trackB === playlist.length - 1) {
                   trackB = 0;
               } else {
                   trackB++;
               }
               if (track === playlist.length - 1) {
                   track = 0;
               } else {
                   track++;
               }
           }
           else {
               if (trackB === 0) {
                   trackB = playlist.length - 1;
               } else {
                   trackB--;
               }
               if (track === 0) {
                   track = playlist.length - 1;
               } else {
                   track--;
               }

           }




            imageA.src = playlist[track].cover;
            imageA.alt = playlist[track].author;
            texteA.innerHTML = "<p class='title'>" + playlist[track].title + "</p><p class='author'>"
                + playlist[track].author + "</p>";
            //je dois retirer la transition
            imageA.classList.remove("trans");
            texteA.classList.remove("trans");
            imageA.classList.remove(effect);
            texteA.classList.remove(effect);
            imageB.src = playlist[trackB].cover;
            imageB.alt = playlist[trackB].author;
            texteB.innerHTML = "<p class='title'>" + playlist[trackB].title + "</p><p class='author'>"
                + playlist[trackB].author + "</p>";

        }, 500);
    }, 5000);


 }

 export { initSlider }






