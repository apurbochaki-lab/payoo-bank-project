document.getElementById('send-money-btn').addEventListener('click', function () {

    // 1- Get userAccNumber, Validation
    const userAccNumber = getValueFromInput('send-money-number');
    // Validation
    if (userAccNumber.length != 11) {
        alert("Please enter 11 digit number!");
        return;
    }

    // 2- Get Amount, Validation
    const amount = getValueFromInput('send-money-amount');
    // Validation
    if (amount.length == '0') {
        alert("Please enter valid amount");
        return;
    }

    // 3- Get currentBalance & Calculate newBalance
    const balance = getBalance();
    const newBalance = balance - Number(amount);
    console.log("New Balance:", newBalance);
    // Validation
    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }

    // 4- Get Pin & Verify
    const pin = getValueFromInput('send-money-pin');
    if (pin === '1234') {
        // 5- if true::> success alert> setBalance > addHistory
        alert(`${amount} TAKA send money successful.
date: ${new Date()}`);
        setBalance(newBalance);

        // history-container k dhorte hobe
        const historyContainer = document.getElementById('history-container');
        // newDiv create korte hobe
        const newDiv = document.createElement('div');
        // newDiv a innerHTML add korte hobe
        newDiv.innerHTML = `
        <div class="history-card p-5 bg-base-100 rounded-lg bg-primary/70 text-white font-medium">
             Send Money ${amount} TAKA Successful to ${userAccNumber} at
             ${new Date()}
        </div>
        `
        // history-container a newDiv append kore dite hobe
        historyContainer.append(newDiv);
    }
    else {
        // 6- if false::> error alert> return
        alert('Invalid Pin!');
        return;
    }
})