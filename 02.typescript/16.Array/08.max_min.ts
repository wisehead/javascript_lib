function firstStableIndex(nums: number[], k: number): number {
    let l = nums.length;
    // const maxv = Math.max(...nums);
    var min_arr:number[] = new Array(l).fill(nums[l-1]);
    for (let i = l-2; i >= 0; i--) {
        min_arr[i] = Math.min(nums[i], min_arr[i+1]);
    } 
    let max = nums[0];
    for (let i = 0; i < l; i++) {
        max = Math.max(max, nums[i]);
        let score = max - min_arr[i];
        if (score <= k) {
            return i;
        }
    }
    return -1;
};