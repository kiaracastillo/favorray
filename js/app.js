/*
Kiara Castillo Magallanes
10/06/2022
Favorray

4-
Crea una matriz de cadenas. 
Enumere al menos cinco de sus cosas favoritas en esa matriz.
Luego, escribe un bucle que escriba en un elemento div cada uno de ellos,
con la cadena ", es una de mis cosas favoritas". después de la cosa. 
Por ejemplo, una línea en el div podría decir: "La pizza es una de mis
cosas favoritas".
*/ 
let favArray = ["Anime", "Tacos", "Sleep", "Cooking", "Tequila"];

for (let i = 0; i < favArray.length; i++)
{
    let fav2 = document.getElementById("fav1");
    let statement = favArray[0] + ", is one of my favorite things. <br />";
    fav1.innerHTML = statement;
}


for (let i = 0; i < favArray.length; i++){
    let fav2 = document.getElementById("fav2");
    let statement = favArray[1] + " it's my second favorite thing. <br />";
    fav2.innerHTML = statement;
}


for (let i = 0; i < favArray.length; i++){
    let fav3 = document.getElementById("fav3");
    let statement = favArray[2] + " it's my third favorite thing. <br />";
    fav3.innerHTML = statement;
}
for (let i = 0; i < favArray.length; i++){

let fav4 = document.getElementById("fav4");
    let statement = favArray[3] + " it's my fourth favorite thing. <br /> ";
    fav4.innerHTML = statement;
}

for (let i = 0; i < favArray.length; i++){

    let fav5 = document.getElementById("fav5");
        let statement = favArray[4] + " and finally it is my fifth favorite thing.  <br />";
        fav5.innerHTML = statement;
    }

