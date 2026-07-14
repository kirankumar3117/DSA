/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;

    for (const ch of s) {
        balance += ch === 'R' ? 1 : -1;

        if (balance === 0) {
            count++;
        }
    }

    return count;
};