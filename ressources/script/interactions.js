function go_to(link){
    if(music_playing){document.location.href = link+"?music"}
    else{document.location.href = link}
}

function easter_egg(link){
    if(confirm("Souhaitez-vous télécharger l'easter egg ?\n\nℹ️ Si vous êtes sur la version hors ligne cette opération n'est pas nécessaire. Le fichier se trouve déjà dans le dossier 'easter eggs'.")){
        document.location.href = link;
    }
}

function correction(values){
    for (var i = 0; i < fields.length; i++) {
        fields[i].value = values[i];
    }
}

//Afficher correction (lien)
if(location.search.substring(1,12)=="correction=") {
    correction(decodeURI(location.search.substring(12)).split(','));
    change_key();
}