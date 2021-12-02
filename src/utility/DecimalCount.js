/*
    Used in verification
    Code harvested from tutorialspoint.com/decimal-count-of-a-number-in-javascript
*/
function DecimalCount(num){
    // Convert to String
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };
    // String Does Not Contain Decimal
    return 0;
 }

 export default DecimalCount;