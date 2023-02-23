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


function get_key(x){
    if(x==0){return ". . ."}
    else{return keys[x % 100]};
}