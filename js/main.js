
'use strict'

{

  const addButton = document.getElementById('add');
  const taskValue = document.getElementById('text');
  const table = document.getElementById('table');
  const tbody = document.createElement('tbody');

  table.appendChild(tbody);

  const items = [];

  const showTasks = items => {

    tbody.textContent = '';

    items.forEach((item, i) => {
      const row = tbody.insertRow(-1);
      tbody.appendChild(row);

      const tableId = row.insertCell(-1);
      const tableComment = row.insertCell(-1);
      const tableAction = row.insertCell(-1);

      tableId.textContent = i;
      tableComment.textContent = item.comment;

      row.appendChild(tableId);
      row.appendChild(tableComment);
      row.appendChild(tableAction);

      const workingButton = document.createElement('button');
      const removeButton = document.createElement('button');

      workingButton.textContent = '作業中';
      removeButton.textContent = '削除';

      tableAction.appendChild(workingButton);
      tableAction.appendChild(removeButton);

    });
  }

  addButton.addEventListener('click', () => {

    items.push({
      id: items,
      comment: taskValue.value,
    });

    console.log(items);
    taskValue.value = '';
    showTasks(items);

  });

}
