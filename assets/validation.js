function vali1(){
    if(isNaN(document.getElementById("number1").value) || document.getElementById("number1")==='' ){
        document.getElementById("error").innerHTML = "<b style='color:red'>Enter Only Numbers</b>";
        document.getElementsByTagName("input")[0].setAttribute("type", "number");
    }
}
function vali2(){
    if(isNaN(document.getElementById("number2").value) || document.getElementById("number2")==='' ){
        document.getElementById("error1").innerHTML = "<b style='color:red'>Enter Only Numbers</b>";
        document.getElementsByTagName("input")[1].setAttribute("type", "number");
    }
}
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
    document.getElementById("result").value = total;
}