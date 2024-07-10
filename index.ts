import inquirer from "inquirer";

let myBalance = 10000;
let myPinCode = 4567;

console.log("My current balance is: " + myBalance)


let enterPin = await inquirer.prompt([
    {
        name: "user_input_pincode",
        type: "number",
        message: "Enter your pin code: "
    }
])


if (enterPin.user_input_pincode === myPinCode) {
    console.log("You pincode is correct. You have logged in successfully.")

    let operations = await inquirer.prompt([
        {
            name: "operations",
            message: "Select an operation: ",
            type: "list",
            choices:[ { name: "Check balance", value: "check balance" }, // Use a different value for internal representation
                        { name: "Withdraw", value: "withdraw" }],
            
        }
    ])

    if (operations.operations === "check balance") {
        console.log("your current balance is: " + myBalance)
    }
    else if (operations.operations === "withdraw") {
        
        let enterAmount = await inquirer.prompt([
            {
                name: "withdraw_amount",
                type: "number",
                message: "Enter your amount: "
            }
        ])

        if (enterAmount.withdraw_amount <= myBalance) {
            myBalance = myBalance - enterAmount.withdraw_amount
            console.log("Amount withdrawn. Your remaining balance is: " + myBalance)
        } else {
            console.log ("Please enter amount less than or equal to your current balance of " + myBalance)
        }

    }
    

} else {
    console.log("You pincode is incorrect. login attempt failed.")
}