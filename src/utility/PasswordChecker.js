
/*
PasswordChecker is used by CreateUser.jsx to do as the name implies
*/

function PasswordChecker(password){
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%$^&*]).{8,}$');
    const checked = String(password).match(regex);
    if (checked == null) return false;
    return true;
}

export default PasswordChecker;