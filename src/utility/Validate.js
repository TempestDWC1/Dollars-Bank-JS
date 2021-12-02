import DecimalCount from "./DecimalCount";
/*
    Validate will be used by CreateUser to check the submittion for errors
*/

function Validate(name, username, password, balance){

    const errors = [];

    // must convert balance to a float, because input is string by default
    balance = parseFloat(balance);

    if(name.length === 0) errors.push("Name cannot be empty!");

    if(username.length === 0) errors.push("Username cannot be empty!");

    // must check password with Regex
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%$^&*]).{8,}$');
    const checked = String(password).match(regex);
    if (checked == null) errors.push("Password does not follow proper format!")

    // chech if balance was given, check to make sure its not a string, extra check for not a number
    // check to make sure its positive and finally check to see if fits formate
    if(balance.length === 0){
        errors.push("You have to provide an initial balance!");
    }else if(isNaN(balance) || (balance < 0) || DecimalCount(balance) >= 2){
        errors.push("Balance must be a positive Number with only 2 decimal places");
    }

    return errors;
}

export default Validate;