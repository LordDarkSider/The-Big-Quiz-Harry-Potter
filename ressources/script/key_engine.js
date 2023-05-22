//Emplacement affichage clé
let key = document.getElementById("key");


//Récupère tous les champs d'un défi et désactive l'autocompletation
let fields = [];
for(let k=1; k<=nb_fields; k++){
    f = document.getElementById("v"+String(k));
    f.autocomplete = "off";
    fields.push(f);
}


//Valeur d'une chaine de caracteres -> somme des codes UTF-16 de chaque caractere convertis en minuscules
function string_value(str){
    val = 0;
    str = str.toLowerCase();
    for(let n=0; n<str.length; n++){val += str.charCodeAt(n)};
    return val;
}


//Renvoie le code d'une liste d'entrees strings -> addition des produits des valeurs de chaque entree avec leur index (renvoie 0 si l'une est vide)
function code(entries){
    val = 1;
    for(let n=0; n<entries.length; n++){
        let e = entries[n];
        if(e !=""){val += string_value(e) * (n+1)}
        else{return 0};
    };
    return val;
}


//Renvoie une clé selon un entier positif
function get_key(x){
    if(x==0){return ". . ."}
    else{return keys[x % 100]};
}


//Renvoie la valeur d'un champ selon son type
function get_fieldValue(f){
    if(f.type == "radio"){field = document.querySelector("input[name="+f.name+"]:checked"); if(field != null){return field.value;} else {return "";}}
    else{return f.value;}
}


//Change la clé affichée
function change_key() {
    x = code(fields.map(f => get_fieldValue(f) ));
    key.innerHTML = get_key(x);
}