document.getElementById('cashout-btn').addEventListener('click', function() {
    //1. Get agent number, validate & convert to number
    const cashoutNumber = getValueFromInput('cashout-number');
    // Validation
    if (cashoutNumber.length > 11 || cashoutNumber.length < 11) {
        alert('Please Enter 11 Digit Number!')
        return;
    }
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number!")
        return;
    }

    //2. Get cashout amount, validate & convert to number
    const cashoutAmount = getValueFromInput('cashout-amount');
    // Validation
    if (cashoutAmount.length == 0 || cashoutAmount === '0') {
        alert("Please Enter Cashout Amount!");
        return;
    }

    //3. Get Current Balance, validate, convert to number
    const balance = getBalance();

    //4. Calculate New Balance
    const newBalance = balance - Number(cashoutAmount);
    // Validation
    if (newBalance < 0) {
        alert('Invalid Amount!')
        return;
    }
    console.log("New balance:", newBalance);

    //5. Get pin & verify
    const pin = getValueFromInput('cashout-pin');
    // Validation
    if (pin.length != 4) {
        alert("Enter 4 Digit Pin!")
        return;
    }
    
    if (pin === '1234') {
        alert('Cashout Successful.');
        setBalance(newBalance)

         // history-container k dhorte hobe
        const historyContainer = document.getElementById('history-container');
        // newDiv create korte hobe
        const newDiv = document.createElement('div');
        // newDiv a innerHTML add korte hobe
        newDiv.innerHTML = `
        <div class="history-card p-5 bg-base-100 rounded-lg bg-primary/70 text-white font-medium">
             Cashout ${cashoutAmount} TAKA Successful to ${cashoutNumber} at
             ${new Date()}
        </div>
        `
        // history-container a newDiv append kore dite hobe
        historyContainer.append(newDiv);
    }
    else {
        alert("Invalid Pin!")
        return;
    }
});






// document.getElementById('cashout-btn').addEventListener('click', function () {

//     //1. Get agent number, validate & convert to number
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     // Validation
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number!")
//         return;
//     }

//     //2. Get cashout amount, validate & convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     // Validation
//     if (cashoutAmount.length === 0) {
//         alert("Please enter you cashout amount.");
//         return;
//     }

//     //3. Get Current Balance, validate, convert to number
//     const currentBalanceEle = document.getElementById('balance');
//     const balance = currentBalanceEle.innerText;
//     console.log("Current Balance :", balance)

//     //4. Calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Invalid Amount!")
//         return;
//     }
//     console.log("New Balance :", newBalance);

//     //5. Get pin & verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;

//     if (pin.length != 4) {
//         alert("Enter 4 Digit Pin.")
//         return;
//     }
   

//     if (pin === '1234') {
//         //6. if true:::> alert> set balance
//         alert("Cashout Successful.");
//         currentBalanceEle.innerText = newBalance;
//     }
//     else {
//         //7. if false:::> error alert> return
//         alert("Invalid Pin!")
//         return;
//     }


// });