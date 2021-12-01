let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = w + z;
let prenom = "John", nom = "doe", age = 35;
let i = 10, k = 5
const txt = "une longue phrase";
const longueur = txt.length;
const str1 = 'Bonjour ';
const str2 = 'le monde!';
const listeVoiture = ["Renault","Volvo","Citroen"];
const maVoiture = listeVoiture[1];
const newMaVoiture = listeVoiture.slice(0, 2);
const rNumber = Math.random();
let fNumber = 15.7;
const nombreUn = 10;
const nombreDeux = 5;
const nombreTrois = 10;
const nombreQuatre = 10;
let fruits = ["pomme","banane","poire"];


document.getElementById('demo').innerText = `z vaux ${z}, w vaux ${w}, le résultat est ${z + w}`;

alert(d);
alert(10 * 5);
alert(10 / 2);
alert( 15 % 9);
alert(longueur);
alert(str1 + str2);
alert(listeVoiture.length);

i += k;
listeVoiture[0] = "Ford";
listeVoiture.push("Ferrari");
fNumber = Math.round(fNumber);

if (nombreUn > nombreDeux) {
    alert("nombreUn est supérieur à nombreDeux");
}

if (nombreTrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre");
}

if (nombreUn !== nombreDeux)
    alert("nombreUn n'est pas égal à nombreDeux");

for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}

i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

i = 0;

while (i < 10) {
    console.log(i);
    i += 2;
}

i = 0;

while (i <= 10) {
    if (i === 5)
        alert("le message de votre choix");
    i++;
}

maFonction();

document.getElementById('demoRetour').innerText = maFonctionDeRetour();

document.getElementById('monBouton').addEventListener("click", function () {
   alert("Une boîte d'alerte");
});

document.getElementById('changeSurOver').addEventListener("mouseover", function () {
   this.style.backgroundColor = 'red';
});


function maFonction() {
    alert("Salut tout le monde !");
}
function maFonctionDeRetour() {
    return 'Bonjour!'
}

