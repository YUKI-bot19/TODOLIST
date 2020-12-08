'use strict'
{
  const addButton = document.getElementById('add');
  const taskValue = document.getElementById('text');
  const table = document.getElementById('table');
  const tbody = document.createElement('tbody');
  const radioButtonAll = document.getElementById('radio-all-select');
  const radioButtonWorking = document.getElementById('radio-working-select');
  const radioButtonDone = document.getElementById('radio-done-select');
  const radioButton = document.getElementsByName('radio-name');
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
      tableAction.appendChild(createStatusButton(todo));
      tableAction.appendChild(createDeleteButton(row, todo.id));
    });
  }
  const createStatusButton = (todo) => {
    const statusButton = document.createElement('button');
    statusButton.textContent = todo.status;
    statusButton.addEventListener('click', () => {
      if (todo.status === '作業中') {
        todo.status = '完了';
        filterTodos()
      } else {
        todo.status = '作業中';
        filterTodos();
      }
    });
    return statusButton;
  };
  const filterTodos = () => {
    if (radioButtonAll.checked) {
      return showTasks(todos);
    } else if (radioButtonWorking.checked) {
      const doingTodos = todos.filter(todo => {
        return todo.status === '作業中'
      });
      return showTasks(doingTodos);
    } else if (radioButtonDone.checked) {
      const doneTodos = todos.filter(todo => {
        return todo.status === '完了'
      });
      return showTasks(doneTodos);
    }
  };
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
      for (let idx = targetIndex; idx < todos.length; idx++) {
        todos.id = idx;
      }
    });
    return deleteButton;
  };
  radioButton.forEach((status, number) => {
    radioButton[number].addEventListener('click', () => {
      filterTodos();
    });
  });
  addButton.addEventListener('click', () => {
    const todo = ({
      id: todos.length,
      comment: taskValue.value,
      status: '作業中'
    });
    todos.push(todo);
    taskValue.value = '';
    showTasks(todos);
  });
}
