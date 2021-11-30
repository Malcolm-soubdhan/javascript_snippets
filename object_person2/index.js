
// on crée l'objet littéral "person", qui contient: 

let person = {
    // un sous-espace de nom:
    nom : {
        prenom :'charles', 
        nomFamille: "Leborgne"
    },
    // une propriété: 
    taille : 165,
    
    // un tableau: 
    couleurs : ['bleu', 'jaune', 'rouge']
    
    };
    let myHeading= document.querySelector('h2');
    myHeading.textContent= person.couleurs[0]; 