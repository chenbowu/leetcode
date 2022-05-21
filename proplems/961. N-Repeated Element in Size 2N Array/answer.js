/**
 * @param {number[]} nums
 * @return {number}
 */
// var repeatedNTimes = function(nums) {
//     // 先进行排序,出现两次的就是答案
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i+1]) {
//             return nums[i];
//         }
//     }
//      return -1;
// };

// 根据题意可知，只有正确答案会出现重复
// 所以用 Set 集合存储已经出现的集合，如果遍历到 Set 中存在的元素，那么这个元素就是答案
var repeatedNTimes = function(nums) {
    const found = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (found.has(nums[i])) {
            return nums[i];
        };
        found.add(nums[i]);
    }
    return -1;
};
console.log(repeatedNTimes([1,2,3,3]));