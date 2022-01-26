const removeElement = () => {
    newItem.remove();
}

const addElement = () => {
    let count = 0;
    let x = document.getElementById("task").value;

    let newItem = document.createElement('p');
    



    newItem.innerHTML = "<br> "+ x +" <button type='button' onclick='addElement()'>Remove</button>";
    document.getElementById("list").appendChild(newItem);


}

