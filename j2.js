var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var edit = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event

edit.addEventListener('edit', editItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  var editBtn = document.createElement('button');
  editBtn.className='btn btn-primary btn-sm mr-2' ;
  editBtn.innerHTML="Edit";
  editBtn.setAttribute("data", "edit");
  editBtn.onclick=editItem;
  li.appendChild(editBtn);
  console.log(li);
  

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function editItem(e){
  if(e.target.classList.contains('edit')){
    var li = e.target.parentElement;
    edit.append(li);

    
  }
}.
