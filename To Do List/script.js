let newArr = [];
const addItem = () => {
    let x = document.getElementById("task").value;
    newArr.push(x);
    document.getElementById("list").innerHTML = newArr;
}