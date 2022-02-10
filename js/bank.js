// Make deposit functional 
document.getElementById('deposit-btn').addEventListener('click', ()=> {
    // Get deposite value 
    const showDepo =document.getElementById('deposit-input');
    const depositAmount=showDepo.value;
    
    const realDepositMoney = parseFloat(depositAmount);
    console.log(realDepositMoney)
    // Get deposite Number 
    const depoNumber = document.getElementById('depo-number');
    const depoMoney = depoNumber.innerText;
    const realDepositNumber = parseFloat(depoMoney);
    const newDepositeTotal = realDepositNumber + realDepositMoney;
    depoNumber.innerText = newDepositeTotal;
    // Get balance total 
    const balance = document.getElementById('balance');
    const mainBalance = balance.innerText;
    const realBalance = parseFloat(mainBalance);
    const balanceTotal = realBalance + realDepositMoney;
    balance.innerText = balanceTotal;

    // clear deposit value 
    showDepo.value= '';
})
// Make withdraw function 
document.getElementById('withdraw-btn').addEventListener('click', ()=> {
    // get withdraw value 
    const withdraw = document.getElementById('withdraw-input');
    const withdrawAmount = withdraw.value;
    const realwithdrawAmount = parseFloat(withdrawAmount);

    const withdrawInput = document.getElementById('withdraw-balance');
    const withdrawInputAmount = withdrawInput.innerText;
    const realWithdrawInputAmount = parseFloat(withdrawInputAmount);
    // Get withdraw total 
    const newWithdrawTotal = realWithdrawInputAmount + realwithdrawAmount;
    withdrawInput.innerText = newWithdrawTotal; 

    // Make minus in total balance 
    const myBalance = document.getElementById('balance');
    const myBalanceNumber = myBalance.innerText;
    const myRealBalanceNumber = parseFloat(myBalanceNumber);

    const myrealBalance = myRealBalanceNumber - realwithdrawAmount;
    myBalance.innerText = myrealBalance;
    // Clear withdraw value 
    withdraw.value = '';

})