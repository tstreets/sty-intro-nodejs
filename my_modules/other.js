/**
 * This gets the average of numbers provided
 * @param {number[]} nums Array of numbers
 * @returns {number} Average value of the numbers
 */
exports.getAverage = function(nums) {
    const sum = nums.reduce(function(runningSum, currentVal) {
        return runningSum + currentVal;
    });
    return sum / nums.length;
}