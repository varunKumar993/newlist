/* var title = document.querySelectorAll('title');
console.log(title) */

var odd = document.querySelectorAll('l1:nth-child(odd)');
console.log(odd);
 var odd = document.querySelectorAll('l1:nth-child(even)');
for(let i=0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';

}
