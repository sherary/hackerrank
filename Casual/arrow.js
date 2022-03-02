const nums = [1, 2, 3, 4, 5]

function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] % 2 == 0) {
            nums[i] = nums[i] * 2;
        } else {
            nums[i] = nums[i] * 3;
        }
    }

    return nums
}

modifyArray(nums);

console.log(nums)

//Best practice
function modifyArray(nums) {
    return nums.map(n => n = (n%2==0) ? n*2: n*3);   
}