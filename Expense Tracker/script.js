let expenseInput = document.getElementById("expense").value;
let costInput = document.getElementById("cost").value;
let listDiv = document.getElementById("list");

const addExpense = () => {
    let newExpense = document.createElement("p");
    listDiv.appendChild(newExpense);
    newExpense.innerHTML = "testing";


}