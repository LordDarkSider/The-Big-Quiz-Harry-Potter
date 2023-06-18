function go_to(link){
    if( typeof(music_playing) != 'undefined' && music_playing){document.location.href = link+"?music"}
    else{document.location.href = link}
}

function easter_egg(num){
    if(confirm("Télécharger l'easter egg ?\n\nℹ️ Si vous êtes sur la version hors ligne cette opération n'est pas nécessaire. Le fichier se trouve déjà dans le dossier 'easter eggs'.")){
        window.open(links_easter_eggs.get(num), '_blank');
    }
}

function offline_down(){
    if(confirm("Télécharger la version hors ligne de The Big Quiz Harry Potter ?\n\nℹ️ Si vous êtes déjà sur la version hors ligne cela ne sert strictement à rien 😄")){
        window.open("https://drive.google.com/file/d/1Gfzu1ThhoJLBgymI-aRnh-CbFQmIpIwX/", '_blank');
    }
}

function correction(values){
    for (var i = 0; i < fields.length; i++) {
        f = fields[i];
        if(f.type == "radio"){document.querySelectorAll("input[name="+f.name+"]")[parseInt(values[i])-1].checked = true;}
        else {f.value = values[i];}
    }
}

//Afficher correction (lien)
if(location.search.substring(1,12)=="correction=") {
    correction(decodeURI(location.search.substring(12)).split(';'));
    change_key();
}