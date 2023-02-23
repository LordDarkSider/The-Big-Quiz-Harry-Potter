let difficulty = document.getElementById("difficulty");
let d = difficulty.title;


if(d==1){
    difficulty.innerHTML = "🟢 FACILE";
    difficulty.title = "Niveau de difficulté FACILE";
}
else if(d==2){
    difficulty.innerHTML = "🟡 MOYEN";
    difficulty.title = "Niveau de difficulté MOYEN";
}
else if(d==3){
    difficulty.innerHTML = "🟠 DIFFICILE";
    difficulty.title = "Niveau de difficulté DIFFICILE";
}
else if(d==4){
    difficulty.innerHTML = "🔴 EXTRÊME";
    difficulty.title = "Niveau de difficulté EXTRÊME";
}
else{
    difficulty.innerHTML = "🔴🟠🟡🟢 DIFFICULTE";
    difficulty.title = "...";
}