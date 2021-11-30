/* 5 ADDING A PARAGRAPH ON CLICK :  */

document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      let para = document.createElement('p');
      para.textContent = '   Vous venez de créer un paragraphe en cliquant sur le bouton! : )';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  });

  /* grandes étapes: 
  1: gestionnaire d'event sur le document
  2 fonction 
  3 constante bouton
  4 boucle for avec gestionnaire d'évènements sur le bouton
  */
  
  /* pour créer une application de création de paragraphes, on: 

-commence par affecter un gestionnaire d'évènements addEventListener à "document". 
-a ce gestionnaire d'évènements, on donne 2 arguments: "DOMcontentLoaded" et une fonction anonyme. Cette 
fonction anonyme va appeler une autre fonction, "createParagraph". 
-cette fonction createParagraph va d'abord définir une variable "para" à laquelle on va appliquer
 la méthode createElement,avec comme argument 'p'; 

 

-On utilise ensuite la méthode appendChild : on va l'appliquer sur le document, puis sur le body, et on va préciser 
la variable utilisée pour créer des paragraphes en argument. 


-On créer ensuite une constante "button" à laquelle on applique la méthode querySelectorAll
-ensuite, on crée une boucle avec une variable i qui s'incrémente tant que i est inférieur à la longueur de la constante "bouton".
-Enfin, dans la boucle,  on créé un gestionnaire d'évènements qui prend 2 arguments: clic, et la fonction createParagraph. 

-----------------------------

DETAILS FONCTIONS: 

**  DOMContentLoaded :
  The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed
  -pour donner un contenu à ce paragraphe, on va utiliser textContent. 
  
  ** createElement :
  Dans un document HTML, la méthode document.createElement() crée un élément HTML du type spécifié par tagName 
  ou un HTMLUnknownElement si tagName n’est pas reconnu.
  syntaxe, exemple: 
  var element = document.createElement(tagName[, options]);
  
  ** appendChild: 
  La méthode Node.appendChild() ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié. Si l'enfant donné 
  est une référence à un nœud existant dans le document, appendChild() le déplace  de sa position actuelle vers une nouvelle position
  
  sources: MDN developper
  
  */