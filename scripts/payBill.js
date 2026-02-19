document.getElementById('pay-bill-btn').addEventListener('click', function () {

    // 1- Get payOption, validation
    const payOption = getValueFromInput('pay-bill-option');
    if (payOption === 'Select One') {
        alert("Please select one to pay.");
        return;
    }

    // 2- Get billerAccNumber, validation
    const billerAccNumber = getValueFromInput('pay-bill-number');
    if (billerAccNumber.length === 0) {
        alert("Please enter valid biller account number.");
        return;
    }

    // 3- Get payAmount, empty validation
    const payAmount = getValueFromInput('pay-bill-amount');
    if (payAmount.length === 0) {
        alert("Please enter valid amount");
        return;
    }

    // 4- Get balance & calculate newBalance, -amount validation
    const balance = getBalance();
    const newBalance = balance - Number(payAmount);
    if (newBalance < 0) {
        alert("Error: Enter valid amount!");
        return;
    }

    // 5- Get Pin & Verify
    const pin = getValueFromInput('pay-bill-pin');
    if (pin === '1234') {
        // 6- if true::> success alert> setBalance> setHistory
        alert(`
${payOption} Bill ${payAmount} TAKA Paid at ${new Date()}
            `);
        setBalance(newBalance);

        // history-container k dhorte hobe
        const historyContainer = document.getElementById('history-container');
        // newDiv create korte hobe
        const newDiv = document.createElement('div');
        // newDiv a innerHTML add korte hobe
        newDiv.innerHTML = `
        <div class="history-card p-5 bg-base-100 rounded-lg bg-primary/70 text-white font-medium">
             Pay Bill ${payAmount} TAKA Successfully Paid to Biller:${billerAccNumber} for ${payOption} bill at
             ${new Date()}
        </div>
        `
        // history-container a newDiv append kore dite hobe
        historyContainer.append(newDiv);
    }
    else {
        // 7- if false::> error alert> return
        alert("Invalid Pin");
        return;
    }
});