import inquirer from "inquirer";
let myBalance = 10000;
let myPinCode = 4567;
console.log("My current balance is: " + myBalance);
let enterPin = await inquirer.prompt([
    {
        name: "user_input_pincode",
        type: "number",
        message: "Enter your pin code: "
    }
]);
if (enterPin.user_input_pincode === myPinCode) {
    console.log("You pincode is correct. You have logged in successfully.");
}
else {
    console.log("You pincode is incorrect. login attempt failed.");
}
