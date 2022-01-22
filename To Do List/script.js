const addElement = () => {
    let count = 0;
    let x = document.getElementById("task").value;

    let newItem = document.createElement('p');
    newItem.id = "todo"+count;

    newItem.innerHTML = "<br> "+ x +" <button type='button'>Remove</button>";
    document.getElementById("list").appendChild(newItem);
}

