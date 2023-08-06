 var head = document.querySelector('#items');


console.log(head.parentElement)
head.parentElement.style.backgroundColor = '#f4f4f4'
console.log(head.parentElement.parentElement.parentElement)


//lastelementchild

console.log(head.lastElementChild)
head.lastElementChild.style.background = '#ccc'
 

// firstchild
console.log(head.children[1]) 

// lastchild
console.log(head.children[3]) */

// firstElementChild
console.log(head.firstElementChild)

//nextsibling 
console.log(head.nextSibling)

//nextelementsibling
console.log(head.nextelementsibling)

//previoussibling
console.log(head.previousSibling)

// previousElementSibling
console.log(head.previousElementSibling)

var newdiv = document.createElement('div');

//create a class;
newdiv.className = 'abc';

//create Id

newdiv.id = 'def';

//set attributes
newdiv.setAttribute('title', 'Item 5');

//create text node

let div = document.createTextNode('Hello World');

//appendchild

newdiv.appendChild(div)


console.log(newdiv)
 

var ab = document.getElementById("header-title");
let h = document.createTextNode("hello world");
ab.appendChild(h);

var selector = document.getElementById('items');
selector.firstElementChild.textContent = 'Item 1 Hello World';




