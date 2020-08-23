console.log('welcome to tut16');
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}
Obj.prototype.setName=function(newName){
    this.name=newName;
}
let obj2= new Obj('Bumba');
console.log(obj2);
