
document.querySelector('html').addEventListener('click', function() {
    // function createPara() {
    //     let para = document.createElement('p');
    //     para.textContent = 'Aie! Arretez de cliquer!';
    //     document.body.appendChild(para);
    //   }
    //   createPara(); 
    
    
    function createPicture() {
      let pic = document.createElement('img');
      pic.setAttribute('src', 'ouch.jpg');
      document.body.appendChild(pic);
    }
    createPicture(); 
    
  
  });
  
  