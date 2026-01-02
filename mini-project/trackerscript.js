// Variables to store data
let expenses = [];
let totalAmount = 0;

// Connecting JavaScript to HTML
const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenese-table-body');
const totalAmountCell = document.getElementById('total-amount');

// Add button click handler
addBtn.addEventListener('click', function() {

    // Read values from inputs
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // Validation (To alert user to enter proper and given value)
    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amount')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    // Stores the new expenses in the array
    expenses.push({category, amount, date});

    // Updating total amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Creating new row of table
    const newRow = expensesTableBody.insertRow();

    // Creating cells for the row
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Delete button
    const deleteBtn = document.createElement('button');
    
    // Delete button fuction
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    // Fill the table cells
    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

// Looping 
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}