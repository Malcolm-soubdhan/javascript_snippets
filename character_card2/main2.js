// class creation: 
class person {
    constructor(firstName, name, age, job, hobby){
      this.firstName= firstName; 
      this.name = name;
      this.age = age; 
      this.job = job; 
      this.hobby = hobby;
    }
  
  }
  
  class man extends person {
      constructor(firstName, name, age, job, hobby, gender, pronoun) {
      //"Si on déclare un constructeur dans une classe fille, on doit utiliser super() avant this.""
        super(firstName, name, age, job, hobby); 
        this.gender = gender;
        this.pronoun = pronoun;
      }
  }
  
  class woman extends person{
      constructor(firstName, name, age, job, hobby, gender, pronoun){
          super(firstName, name, age, job, hobby);
          this.gender= gender; 
          this.pronoun= pronoun; 
      }
  
  }
  
  let person1 = new man('Eric', 'Berthaud', 33, 'storekeeper', 'cooking', 'male', 'he'); 
  let myPara= document.getElementById('p1'); 
  myPara.textContent= person1['firstName']+" "+ person1['name']+ " is "+person1['age']+" years old, "+person1['pronoun']+" is a "+person1['job']+" and "+person1['pronoun']+" likes "+person1['hobby']+". "+person1['pronoun']+" defines  as : "+person1['gender']+" ."; 
  
  
  let person2 = new woman('Saîda', 'B', 33, 'actress', 'photography', 'female', 'she'); 
  let myPara2= document.getElementById('p2'); 
  myPara2.textContent= person2['firstName']+" "+ person2['name']+ " is "+person2['age']+" years old, she is  a(n)"+person2['job']+" and she likes "+person2['hobby']+". she defines as : "+person2['gender']+" ."; 
  
  
  