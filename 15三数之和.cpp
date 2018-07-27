//先排序容器，然后固定第一个数，使用两个下标分别趋近指定值。

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());
        int length = nums.size();
        for(int i=0;i<length-2;i++){
            if(nums[i]>0) break;   //当第一个数大于0时，后面两个数必然也大于0，三数之和必不可能为0————剪枝优化
            if(i>0 && nums[i]==nums[i-1]) continue;    //从i==1开始，当第一个数与之前的数相同时则跳过
            int left=i+1,right=length-1;               //定义左右下标
            while(left<right){
                if(nums[i]+nums[left]+nums[right]==0){
                    res.push_back({nums[i],nums[left],nums[right]});          //将符合条件的三个值push到容器中
                    while(left<right && nums[left]==nums[left+1]) left++;     //将left下标推进到下一个不重复的值之前
                    while(left<right && nums[right]==nums[left-1]) right--;   //将right下标推进到下一个不重复的值之前
                    left++;right--;                                           //将两个下标推进到下一个不重复的值
                }
                else if(nums[i]+nums[left]+nums[right]<0) left++;
                else right--;
            }           
        }
        return res;
    }
};