
let employes = ['jeremy', 'Oumar', 'Isabella', 'David', 'Mia']; 

// ajouter un élément au début du tableau: 
employes.unshift('Kade'); 
// ajouter un élément à la fin: 
employes.push('Marianna'); 


//boucle "for... of":
for(let valeur of employes){
    document.querySelector('li').innerHTML += valeur +'<br>';
}
   
