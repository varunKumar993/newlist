var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var edit = document.getElementById('items');
var filter = document.getElementById('filter')

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event

edit.addEventListener('edit', editItem);

filter.addEventListener('keyup',filterItems);


// Add item
function addItem(e){
  e.preventDefault();
  var li = document.getElementById('addForm')
  var input = document.createElement('input');
  input.type='text' ;
  input.className = 'form-control mr-2'
  input.id= "item";
  input.placeholder="Add Item"
  li.appendChild(input)

 
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
  editBtn.className = 'btn btn-info float-right Edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);




}

//  item
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
}
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}
