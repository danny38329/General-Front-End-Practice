

const adjustTask = () => {
    let item = document.createElement('p');
    document.getElementById('list').appendChild(item);
    let removeButton = document.createElement('button');
    document.getElementById('list').appendChild(removeButton);

    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';
    removeButton.id = 'remove';

    const removeElement = () => {
        item.remove();
        removeButton.remove();
    }

    removeButton.onclick = removeElement;

}



