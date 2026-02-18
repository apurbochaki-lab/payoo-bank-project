document.getElementById('cashout-btn').addEventListener('click', function() {
    
    //1. Get agent number, validate & convert to number
    const agentNumberInput = document.getElementById('cashout-number');
    const agentNumber = agentNumberInput.value;
    console.log(agentNumber);

    if (agentNumber.length != 11) {
        alert('Invalid Agent Number!')
        return;
    }

    //2. Get cashout amount, validate & convert to number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    //3. Get Current Balance, validate, convert to number
    const currentBalanceElement = document.getElementById('balance');
    const balance = currentBalanceElement.innerText;
    console.log(balance);

    //4. Calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    
    if (newBalance < 0) {
        alert('Invalid Amount!')
        return;
    }
    console.log("New Balance:", newBalance);

    //5. Get pin & verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;

    if (pin.length != 4) {
        alert('Invalid Pin! Enter 4 digit pin only.')
        return;
    }
    
    if (pin === '1234') {
        //6. if true:::> alert> set balance
        alert('Cashout Successful');
        currentBalanceElement.innerText = newBalance;
    }
    else {
        //7. if false:::> error alert> return
        alert('Invalid Pin!');
        return;
    }

});