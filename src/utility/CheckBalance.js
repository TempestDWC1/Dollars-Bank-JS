/*
BalanceChecker is used by CreateUser.jsx to do as the name implies
It is needed cause the number feature for html input tabs only do
whole numbers so no deciamals
*/

function BalanceChecker(balance){
    if(typeof balance != 'string') return false;
    return !isNaN(balance) && !isNaN(parseFloat(balance).toFixed(2));
}

export default BalanceChecker;