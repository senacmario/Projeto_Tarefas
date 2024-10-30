document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();

    if (itemText) {
        const checklist = document.getElementById('checklist');

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(itemText));

        checklist.appendChild(listItem);

        input.value = '';
    } else {
        alert('Por favor, digite um item.');
    }
});
