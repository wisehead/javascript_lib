/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    n = arr.length;
    var min_diff = 2000000;
    for (var i = 0; i < n - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff < min_diff)
            min_diff = diff;
    }
    var res = new Array();
    for (var i = 0; i < n - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff == min_diff) {
            res.push([arr[i], arr[i + 1]]);
        }
    }
    return res;
};