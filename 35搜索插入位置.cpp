//本题较为简单，在搜索时也可以使用二分法，性能更佳
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        for(int i=0;i<nums.size();i++){
            if(nums[i]>=target)
                return i;
        }
        return nums.size();
    }
};