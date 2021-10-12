function concat(separator) {
    var result = ""; 
    var i; 
    
    for(i=1; i<arguments.length; i++) {
      result += arguments[i] + separator; 
    }
    return result;
  }
  
  concat(",", "rouge", "vert", "bleu", "jaune"); 
  
  