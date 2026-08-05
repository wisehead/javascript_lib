function countOppositeParity(nums: number[]): number[] {
    var len: number = nums.length
    var odd_arr:number[] = new Array(len+1).fill(0);
    var even_arr:number[] = new Array(len+1).fill(0);
    var res:number[] = new Array(len).fill(0);
    for(let i = nums.length - 1; i >= 0; i--){
        if (nums[i] % 2 == 0) {
            even_arr[i] = even_arr[i+1] + 1;
            odd_arr[i] = odd_arr[i+1];
        } else {
            odd_arr[i] = odd_arr[i+1] + 1;
            even_arr[i] = even_arr[i+1];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            res[i] = odd_arr[i];
        } else {
            res[i] = even_arr[i];
        }
    }
    return res;
};

export {};
