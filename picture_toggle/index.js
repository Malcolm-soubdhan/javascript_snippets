/* toggle between 2 pictures : */

let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/orange_cat1.jpg') {
        myImage .setAttribute('src', 'img/lion1.jpg');
    }
    else{
        myImage.setAttribute('src', 'img/orange_cat1.jpg');
    }
})


/*main steps: 

1- we define a variable "myImage"; Then, we use a js method, "querySelector", 
on the DOM object "document". 
With the method "querySelector", we select the element "img"; 

2-Then, we put an event listener on the variable, with 2 arguments: 'click',
 and an anonymous function.

 3-this anonymous function define  another variable," mySrc",to which 
 we apply the method "getAttribute" to get the picture's src attribute.

 4-Then, we use a conditional structure to etablish that if we get a picture 's src, 
 we want to set the other's picture src instead, to toggle between the two pictures. 
 */