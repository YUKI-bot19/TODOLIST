'use strict'
{
  const addButton = document.getElementById('add');
  const taskValue = document.getElementById('text');
  const table = document.getElementById('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const todos = [];
  const showTasks = todos => {
    tbody.textContent = '';
    todos.forEach((todo, idx) => {
      const row = tbody.insertRow(-1);
      tbody.appendChild(row);
      const tableId = row.insertCell(-1);
      const tableComment = row.insertCell(-1);
      const tableAction = row.insertCell(-1);
      tableId.textContent = idx;
      tableComment.textContent = todo.comment;
      row.appendChild(tableId);
      row.appendChild(tableComment);
      row.appendChild(tableAction);
      const workingButton = document.createElement('button');
      workingButton.textContent = '作業中';
      tableAction.appendChild(workingButton);
      tableAction.appendChild(createDeleteButton(row, todo.id));
    });
  }
  const createDeleteButton = (row, id) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      const targetIndex = todos.findIndex(todo => {
        return todo.id === id;
      });
      todos.splice(targetIndex, 1);
      tbody.textContent = '';
      showTasks(todos);
      for (let i = targetIndex; i < todos.length; i++) {
        todos.id = i;
      }
    });
    return deleteButton;
  };
  addButton.addEventListener('click', () => {
    const todo = ({
      id: todos.length,
      comment: taskValue.value,
    });
    todos.push(todo);
    taskValue.value = '';
    showTasks(todos);
  });
}
