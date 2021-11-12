/* 
解法：哈希表
将数组中的值一一比较，如果没找到就把该值放入到map中
时间复杂度O(n),空间复杂度O(n)
*/
var twoSum = function(nums, target) {
    let newMap = new Map();
    const len = nums.length
    for(let i = 0; i < len; i++){
        const targetNumber = target - nums[i]
        if(newMap.has(targetNumber)){
            return [newMap.get(targetNumber),i]
        }
        newMap.set(nums[i],i)
    }
    return []
}