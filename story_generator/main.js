
/* 

On crée d'abord 3 constantes: 
-une pour récupérer un éventuel nom ( de personnage) personnalisé. 
  On utilisera la méthode "getElementById" appliquée au document sur cette variable. (Et on la remet en argument de
    la méthode)
-une pour associer la fonction de randomisation des histoires au bouton.  ( fonction querySlector appliquée au document, avec
  en argument, la constante elle-meme)
-une pour manipuler la classe attribuée à l'histoire absurde. ( configuration identique à la 2ème constante) 

Ensuite, on élabore "randomValueFromArray", la fonction chargée d'attribuer des valeurs au hasard 
aux emplacements du texte prévus à cet effet. On lui met la variable "array" en argument. 
Dans cette fonction, on crée une constante "random" à laquelle on applique successivement les fonctions
math.floor() et math.random(), qu'on multiplie par la longueur du tableau. 
Ensuite, on retourne la valeur de "random" tirée du tableau. 

Après, on crée 4 variables:

-Une 1ère variable qui sera chargée de contenir le corps de l'histoire en entier: 
storyText.
-Et 3 autres variables qui contiendront les portions de texte à remplacer: insertx, 
inserty, et insertz. le contenu de ces trois variables se présente sous la forme de tableaux. 

Ensuite, on applique un écouteur d'évènements à la constante "randomize"; En argument, on précisera 
l'évènement "clic" et une fonction nommée "result" que l'on va élaborer. 

La fonction "result" va s'attacher à actualiser les valeurs des variables. 
-> On créé 3 nouvelles variables pour accueillir ces valeurs, et on leur applique la fonction destinée 
à choisir aléatoirement un élément d'un tableau, que nous avons définie précédemment. A chaque fois, 
on précise en argument le nom de la variable d'origine.  
Nous avons récupéré des valeurs alétoires, mais c'est maintenant que nous allons remplacer les 
valeurs d'origine par celles-ci. 



*/

