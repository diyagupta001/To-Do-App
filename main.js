function addTask() {
    var input = document.querySelector('#input').value;
    var value = input.trim();
    if (value === '') {
        alert('Please Enter Tasks!!');
    } else {
        var lists = document.querySelector('.list-group');
        var listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerHTML = value;

        var delIcon = document.createElement('i');
        delIcon.className = 'fas fa-trash delete-icon';
        var comIcon = document.createElement('i');
        comIcon.className = 'fas fa-check complete-icon';

        delIcon.onclick = function () {
            listItem.remove();
            alert('Task Deleted !!');
        }

        comIcon.onclick = function () {
            listItem.classList.toggle('completed');
            if (listItem.classList.contains('completed')) {
                alert('Task Completed !!');
            } else {
                alert('Task Re-assigned !!');
            }
        }

        listItem.appendChild(comIcon);
        listItem.appendChild(delIcon);
        lists.appendChild(listItem);
    }
    document.querySelector('#input').value = '';
}