function add() {
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    total = num1 + num2;
    document.getElementById("result").value = total;
}
function sub() {
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    total = num1 - num2;
    cal.getElementById("result").value = total;
}