//本体与15题三数之和比较类似，解法也相同。 通过对剪枝的优化可以使算法的运行时间更短。
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> res;
        int length = nums.size();
        sort(nums.begin(),nums.end());
        for(int i=0;i<length-3;i++){
            if(i>0 && nums[i]==nums[i-1]) continue;    //当前数和上一个值相同时略过
            if(nums[i]>target && nums[i]>0) break;     //当第一个>0且>target时，后面必然不存在可能的情况——剪枝
            
            for(int j=i+1;j<length-2;j++){
                if(j>i+1 && nums[j]==nums[j-1]) continue;     //当前数和上一个值相同时略过
                if(nums[i]+nums[j]>target && nums[i]+nums[j]>0) break;    //当一二两数之和>target且>0时，后面不存在可能情况
                
                int left = j + 1, right = length - 1;
                while(left<right){
                    int Sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if(Sum==target){
                        res.push_back({nums[i],nums[j],nums[left],nums[right]});
                        while(left<right && nums[left]==nums[left+1]) left++;    //移到下一个不同值之前
                        while(left<right && nums[right]==nums[right-1]) right--; 
                        left++;right--;
                    }
                    else if(Sum<target)
                        left++;
                    else
                        right--;
                }
            }
        }
        return res;
    }
};