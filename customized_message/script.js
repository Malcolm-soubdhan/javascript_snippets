let myButton=document.querySelector('button'); 
let myHeading=document.querySelector('h2'); 

function setUserName() {
    let myName=prompt('Enter a name, please.'); 
    localStorage.setItem('name', myName);
    myHeading.textContent= "Hello, dear "+myName+' .'; 
}

if(!localStorage.getItem('name')) {
    setUserName(); 
}
else{
let storedName =  localStorage.getItem('name'); 
myHeading.textContent= "Hello, dear "+storedName+' .'; 
}

myButton.addEventListener('click', function() {
    setUserName(); 
})


// STEPS
/*
1/ setting up variables: 

First, we create two variables with the querySelector method, applied on the document: 
a/-one to select the button.
b/-one to select the heading.

2/ setting up a function: 

a/ with the "prompt" method, we display a dialogue box, which will allow the user to enter their name.
 b/We will need to store this data to reuse it, so we are going to use the localStorage method to do so, with the associates method 
 "getIem".
    **** details:  Indeed, 'localStorage' can create a key/value pair, such as: 
        "name", myname = ( key, value). 'getItem', as its name suggests, can get the value of a local storage item.
    ****
c/we insert then the stored name in our welcome message, with 'textContent' and we musn't forget to concatenate the strings and the variables.

3/ conditions:

Afterwards, we need to treat different situations:
 - a name has already been registred in localStorage.
 - no name has been registred.

 we will use a " if...else" conditional structure to do so.

 a/We start by the case where this no name registred, and we etablish that if there isn' any name, we 
 call the function "setUserName".

 b/else, we want to get the stored name, so we create a variable ( storedName) to access it by the methods localStorage
 and getItem.

 c/We put an event listener on the button, to listen to the user'clicks ( first argument ) and to call consequently
 our setUserName function. */