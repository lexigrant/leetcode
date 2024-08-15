/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthiest = -1;
    for(i = 0; i < accounts.length; i++) {
        let accountSum = 0;
       for(j = 0; j < accounts[i].length; j++) {
           accountSum += accounts[i][j]
       }
        if(accountSum > wealthiest) {
            wealthiest = accountSum
        }
    }
    return wealthiest
};