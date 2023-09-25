
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    var button = document.createElement("button")
    button.innerHTML = "x";
    button.addEventListener("click",onDelete);
    var editbutton = document.createElement("button")
    editbutton.innerHTML = "Edit"
    editbutton.addEventListener("click",Onedit);
    
    function onDelete(){
        userList.removeChild(this.parentNode);
        localStorage.clear(li)
        
        
    }
      function Onedit(){
        userList.editbutton(this.parentNode);
        localStorage.setItem(li)


    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    li.appendChild(button)
    li.appendChild(editbutton)
  
    let name = `${nameInput.value}`
    let email = `${emailInput.value}`
    


    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);
    localStorage.setItem(name, email);
    
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

}
