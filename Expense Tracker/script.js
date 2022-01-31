

let listDiv = document.getElementById("list");
let count = 0;

const addExpense = () => {
    
    let expenseInput = document.getElementById("expense").value;
    let costInput = document.getElementById("cost").value;
    let newExpense = document.createElement("p");
    
    newExpense.innerHTML = costInput + "  :  " + expenseInput;
    count += Number(costInput);
    listDiv.appendChild(newExpense);
    document.getElementById("totalspent").innerHTML = Number(count);

}

