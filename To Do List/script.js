const addElement = () => {
    
    let newItem = document.createElement('div');
    newItem.innerHTML = "<input type='text' id='newInputBox'><button type='button'>Remove</button>";
    document.getElementById("list").appendChild(newItem);
    


}