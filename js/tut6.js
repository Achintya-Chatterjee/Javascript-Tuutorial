console.log("Welcome to tut6");
const name = 'bumba';
const greting = "Good Morning";
// console.log(greting + ' '+name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.endsWith('str2'));
console.log(html.includes('is'));
// console.log(html.substring(0,4));
console.log(html.split('>'));
console.log(html.replace('this','it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myHtml = `hello ${name}
<h1>This is heading</h1>
<p> you like ${fruit1} and ${fruit2} </p>

`;
document.body.innerHTML = myHtml;