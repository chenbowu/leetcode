/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const length = nums.length;
    nums.sort((a, b) => a - b);
    const targetNum = nums[Math.floor(length / 2)];

    let ans = 0;
    for(let i = 0; i < length; i++) {
        ans += Math.abs(nums[i] - targetNum);
    }
    return ans;
};

console.log(minMoves2([1,2,3]))