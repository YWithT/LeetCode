//题目中已经提到是一个排序数组，所以无需考虑太多，使用快慢指针即可解决。
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int last=0,n=nums.size();
        if(n<=1){
            return n;
        }
        for(int pre=1;pre<n;pre++){
            if(nums[pre]!=nums[last]){
                nums[++last]=nums[pre];
            }
        }
        return last+1;
        
    }
};