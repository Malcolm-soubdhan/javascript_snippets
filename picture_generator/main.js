document.addEventListener("DOMContentLoaded", function() {
    function createPicture() {
      let pic = document.createElement('img');
      pic.setAttribute('src', 'img/firefox-icon.png');
      document.body.appendChild(pic);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createPicture);
    }
  });