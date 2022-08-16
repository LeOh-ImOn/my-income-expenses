function calculate(){
    const income = document.getElementById('income').value;
    const totalIncome = parseFloat(income);
    
    // sum total Expenses
    const food = document.getElementById('food').value;
    const foodMoney = parseFloat(food);
    const rent = document.getElementById('rent').value;
    const rentMoney = parseFloat(rent);
    const cloth = document.getElementById('cloth').value;
    const clothMoney = parseFloat(cloth);
    const totalExpenses = foodMoney + rentMoney + clothMoney;
     
    // set total expenses
    const expenses = document.getElementById('totalExpenses');
    expenses.innerText = totalExpenses;

    // update balance
    const balance = document.getElementById('balance');
    balance.innerText = totalIncome - totalExpenses;

}



// set EvenHandelar button Calculate
document.getElementById('calculate').addEventListener('click', function(){
    calculate();
})
