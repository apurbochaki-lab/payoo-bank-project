document.getElementById('add-money-btn').addEventListener('click', function () {

    // 1- Get Bank, Validation
    const bank = getValueFromInput('add-money-bank');
    // Validation
    if (bank === 'Select Bank') {
        alert("Please select a bank!")
        return;
    }

    // 2- Get Acc Number
    const accNumber = getValueFromInput('add-money-number');
    // Validation
    if (accNumber.length != 11) {
        alert("Please enter 11 digit number");
        return;
    }

    // 3- Get Add Amount, Validation
    const addAmount = getValueFromInput('add-money-amount');
    // Validation
    if (addAmount.length == '0') {
        alert("Please enter valid amount!")
        return;
    }

    // 4- Get Current Balance & Calculate new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addAmount);
    console.log("Total Balance:", newBalance);

    // 5- Get Pin & Verify
    const pin = getValueFromInput('add-money-pin');

    if (pin === '1234') {
        // 6- if true:::> success alert> setBalance
        alert(
            `Add Money ${addAmount} from ${bank} Successful.
Date : ${new Date()}
            `
        );
        setBalance(newBalance);

        // history-container k dhorte hobe
        const historyContainer = document.getElementById('history-container');
        // newDiv create korte hobe
        const newDiv = document.createElement('div');
        // newDiv a innerHTML add korte hobe
        newDiv.innerHTML = `
        <div class="history-card p-5 bg-base-100 rounded-lg bg-primary/70 text-white font-medium">
             Add Money ${addAmount} TAKA Successfully added from ${bank} at
             ${new Date()}
        </div>
        `
        // history-container a newDiv append kore dite hobe
        historyContainer.append(newDiv);
    }
    else {
        // 7- if false:::> error alert> return
        alert("Invalid Pin!")
        return;
    }
})

