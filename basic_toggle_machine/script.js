let btn= document.querySelector('button'); 
let txt= document.querySelector('p'); 

btn.addEventListener('click', updateButton); 

function updateButton() {
    if(btn.textContent === 'Démarrer la machine') {
        btn.textContent = 'Arreter la machine'; 
        txt.textContent = 'La machine est en marche!'; 
    
    }
    else{
        btn.textContent= 'Démarrer la machine'; 
        txt.textContent = 'La machine est arretée.'; 
     
    }
}