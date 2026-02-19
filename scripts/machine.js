// Get ID --> Value (Only Inputs)
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, "-->", value);
    return value;
};

// Machine Get --> Balance
function getBalance() {
    const balanceEle = document.getElementById('balance');
    const balance = balanceEle.innerText;
    console.log("Current Balance:", Number(balance));
    return Number(balance);
};

// Machine for set balance
function setBalance(value) {
    const balanceEle = document.getElementById('balance');
    balanceEle.innerText = value;
};


