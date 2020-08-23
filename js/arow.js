let People=function (person,age) {
    this.person=person;
    this.age=age;
    this.info=function(){
    document.write(this);
    setTimeout(() => {  
        // arrow function to make lexical "this" binding 
        // here this=People."this" has been inherited 
        document.write(this.person + " is " + this.age  
                                       + " years old"); 
       }, 3000);
    }
}
let person1=new People('John', 21);
person1.info();