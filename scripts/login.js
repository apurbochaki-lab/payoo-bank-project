document.getElementById('login-btn').addEventListener('click', function() {
    
    // Get input number value
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
 
    // Get input pin value
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;

    // Match number & pin
    if (number == '01853253943' && pin == '1234') {
        // if true:::> alert> homepage
        alert("Login Success");
        window.location.assign('home.html');
    }
    else {
        // if false:::> alert> return
        alert("Login Failed!");
        return;
    }
});