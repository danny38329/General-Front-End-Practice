const removeElement = () => {
    newItem.remove();
}

const addElement = () => {
    let count = 0;
    let x = document.getElementById("task").value;

    let newItem = document.createElement('p');
    newItem.id = "todo"+count;



    newItem.innerHTML = "<br> "+ x +" <button type='button' onclick=\"removeElement()\">Remove</button>";
    document.getElementById("list").appendChild(newItem);


}

const removeElement = () => {
    newItem.remove();
}
