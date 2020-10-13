//DragulaJS for front-end dragging
dragula([ document.getElementById("dashboard_left"), document.getElementById("dashboard_right_up"), document.getElementById("dashboard_right_down"), document.getElementById("sidebar")], {
  returnOnSpill: true
});

//code for to-do list
loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}

function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}


function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><label>${task}</label><input type="checkbox">`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
