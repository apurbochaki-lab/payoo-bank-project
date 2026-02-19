document.getElementById('get-bonus-btn').addEventListener('click', function () {

    // 1- Get coupon, empty validation
    const coupon = getValueFromInput('get-bonus-coupon');

    // 2- set cashback = 100 TAKA
    const cashback = Number('100');

    // 3- Get Balance & Calculate newBalance
    const balance = getBalance();
    const newBalance = balance + cashback;
    console.log("Balance with cashback:", newBalance)

    if (coupon === 'ACBD-100') {
        // 4- if true::> cashback alert> setBalance> setHistory
        alert(`
Congratulations! You got ${cashback} TAKA cashback🌟
            `);
        setBalance(newBalance);

        // history-container k dhorte hobe
        const historyContainer = document.getElementById('history-container');
        // newDiv create korte hobe
        const newDiv = document.createElement('div');
        // newDiv a innerHTML add korte hobe
        newDiv.innerHTML = `
        <div class="history-card p-5 bg-base-100 rounded-lg bg-primary/70 text-white font-medium">
             You got cashback ${cashback} TAKA from a coupon ${coupon} at
             ${new Date()}
        </div>
        `
        // history-container a newDiv append kore dite hobe
        historyContainer.append(newDiv);
    }
    else {
        // 5- if false::> coupon expired alert> return
        alert("Sorry, your coupon already expired!");
        return;
    }
})