let p1= document.getElementById('p1'); 
let p2= document.getElementById('p2'); 
let p3= document.getElementById('p3'); 
let p4= document.getElementById('p4'); 
let p5= document.getElementById('p5'); 
let p6= document.getElementById('p6'); 
let p7= document.getElementById('p7'); 



let person = {
 // prenom: 'Chris',
  //nom: 'Bird',
  nom : {
    prenom: 'Jude', 
    patronyme: 'Beckett'
  },
  age: 32,
  fonction: 'boulanger',
  interets: ['cuisine', ' cinéma', 'kung-fu'],
  statut: 'célibataire', 
  Pays: 'USA',

  salutation: function(){
    alert("Hello, I'm Chris");
  }
};



//p1.textContent= "Prénom : "+person.prenom+" ."; 
p2.textContent= "Nom : "+person.nom.patronyme+","+person.nom.prenom+" ."; 
p3.textContent= "Age : "+person.age+" ."; 
p4.textContent= "Fonction : "+person.fonction+" ."; 
p5.textContent= "Interets : "+person.interets+" ."; 
p6.textContent= "Statut : "+person.statut+" ."; 
p7.textContent= "Pays: "+person.Pays+" ."; 

/* 

COURS MDN: 
src: https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Object-oriented_JS
"L'idée de base de la POO consiste à utiliser des objets pour modéliser les objets du monde réel 
que l'on souhaite représenter dans nos programmes et/ou de fournir un moyen simple d'accéder
 à une fonctionnalité qu'il serait difficile d'utiliser autrement.

Les objets peuvent contenir des données et du code représentant de l'information au sujet 
de la chose que l'on essaie de modéliser ainsi que des fonctionnalités ou un comportement 
que l'on souhaite lui appliquer. Les données (et bien souvent les fonctions) associées
 à un objet peuvent être stockées (le terme officiel est encapsulé) à l'intérieur 
 d'un paquet objet. Il est possible de donner un nom spécifique à un paquet objet afin 
  d'y faire référence, on parle alors d'espace de noms ou namespace, il sera ainsi 
  plus facile de le manipuler et d'y accéder. Les objets peuvent aussi servir 
  pour stocker des données et les transférer facilement sur un réseau."

  ...

L'objet "person" est un objet littéral. 
Cela signifie que l'on a du écrire littéralement son contenu pour le créer. Par opposition
aux objets instanciés depûis des classes. 
L' objet "person" contient divers types de données, qui sont ses propriétés: 
-des chaines de caractères
-un chiffre
-un tableau
-une méthode ( fonction )

-----------------
On accède aux propriétés de l'objet en utilisant des points: 
ex: 
personne.age
personne.interets[1]
-------------------

Les sous-espaces de nom: 

On peut faire une mise en abyme des objets, comme suit: 
let person= {
    nom : {
    prenom: Jude, 
    patronyme: Beckett
  }
}

Pour accéder au patronyme, on doit faire: 
person.nom.patronym



*/


