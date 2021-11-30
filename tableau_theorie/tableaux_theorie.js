// Créer un tableau et insérer son contenu (ou sa longueur) dans un paragraphe: 

let shopping = ['pain', ' lait ',' fromage', 'bananes'];

shopping[0] = 'crème fraîche';  
let para = document.querySelector('p'); 
para.textContent= shopping.length;


//---------------------------------

/* Les tableaux: 
Un tableau à l'intérieur d'un tableau est appelé " tableau multidimensionnel".

trouver la taille d'un tableau:
shopping.length; 


BOUCLE 

Faire une boucle dans un tableau: 
for(let i = 0; i< shopping.length; i++) {
  console.log(shopping[i]); 
}

---------------------------------

Méthodes utiles aux tableaux: 

UNSHIFT 

.unshift(''): 
ajoute un élément au début d'un tableau.

PUSH

.push(''):
ajoute un élément à la fin d'un tableau; 


POP: 

.pop()
Supprime le dernier élément d'un tableau. 
myArray.pop();

 SPLIT

split(''):
transforme une chaine de caractères en tableau: 
ex: 
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;

 JOIN  

join(''): 
transforme un tableau en chaine de caractères: 
ex: 
let myNewString = myArray.join(',');
myNewString;


TOSTRING

toString(): 

Transforme aussi un tableau en chaine de caractères, mais avec mois d'options que join: Il n'y a pas d'arguments. 
let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger


autre exemple de tableau: 
let employes = ['Jérome', 'Matt', 'Moussa', 'Laurie', 'Carine']; 
 
let para = document.querySelector('p'); 
employes.unshift('Boubacar'); 
employes.push('Amélie'); 
employes.pop('Amélie'); 
para.textContent= employes;

autre exemple de tableau: 
let couleurs = ['jaune', 'bleu', 'gris', 'violet', 'vert', 'rouge']; 
let myDiv= document.getElementById('table'); 
myDiv.textContent = couleurs;


*/
