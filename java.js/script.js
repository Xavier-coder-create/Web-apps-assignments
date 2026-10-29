function setGreeting()
{
    let now = new Date();//built in class in java script
    console.log("I an printing time " + now.getHours());
    now.getHours();
    let hours = now.getHours();
    let greeting = "";
    if (hours < 12) {
         greeting = "Good Morning";
    }
    else if (hours < 18) {
         greeting = "Good Afternoon";
    }
    else {
         greeting = "Good Evening";
    }
    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function () {
    setGreeting();
}
function setButtonText()
{
    document.getElementById("ButtonClickText").textContent = "congrats u followed directions";
}
function GiveDate()
{
    let now = new Date();
    document.getElementById("DateGiver").textContent = now.toDateString();

}
function addNumbers()
{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("addNumbers").textContent = sum;
}
function FindLength()
{
    let word = document.getElementById("length").value;
    let length = word.length;
    document.getElementById("result").textContent = length;
}
function togglePasswordVisibility() {
    let input = document.getElementById("password");
    if (input.type==="password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}