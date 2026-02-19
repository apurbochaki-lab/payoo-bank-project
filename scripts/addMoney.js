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
    }
    else {
        // 7- if false:::> error alert> return
        alert("Invalid Pin!")
        return;
    }
})

