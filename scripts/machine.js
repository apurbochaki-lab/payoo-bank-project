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

// Machine for Set --> Balance
function setBalance(value) {
    const balanceEle = document.getElementById('balance');
    balanceEle.innerText = value;
};

// Machine -> ID > Hide All > Show sent ID
function showOnly(id) {
    // Get All Sections
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMoney = document.getElementById('send-money');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    const history = document.getElementById('history');
    // Hide All Sections
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");
    sendMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    // Only Show selected ID
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
};

