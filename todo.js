let count = 0;
document.getElementById('input-btn').addEventListener('click',function(){
  count++;
  const inputValue = document.getElementById('input-value').value;
  
  const mainContainer = document.getElementById('content-container');
  const tableContainer = document.createElement('tr');
  tableContainer.innerHTML=`
  <th scope ="row">${count}</th>
  <td>${inputValue}</td>
  <td>
  <button class="btn btn btn-danger delete-btn">Delete</button>
  <button class="btn btn-primary edit-btn">Edit</button>
  </td>

  `;
  mainContainer.appendChild(tableContainer);
  document.getElementById('input-value').value = '';
  const deleteBtn = document.getElementsByClassName('delete-btn');
  for(let button of deleteBtn){
    button.addEventListener("click",function(event){
        event.target.parentNode.parentNode.style.display = 'none';
    })
  }
  const editButton = document.getElementsByClassName('edit-btn');
  for(editbutton of editButton){
    editbutton.addEventListener('click',function(event){
      event.target.parentNode.parentNode.style.textDecoration = 'line-through';
    })
  }
  document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('content-container').style.display ='none';
     
     })

})

