//找到容器中缺失的最小的正数，因为要求时间复杂度O(n),并且要求使用常数级的额外空间，所以直接在原容器中修改，把相应
//的值放置在对应的位置，放好之后从头开始遍历，通过第一个不满足的位置就可以求出所要求的数。
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        if(nums.size()==0) return 1;
        for(int i=0;i<nums.size();i++){
            //当nums[i]同时满足>0，小于数组的长度，并不在对应位置上，这三个条件时，将其置换到对应位置上
            //并且通过while循环继续检测置换过来的值，防止发生遗漏
            while(0<nums[i] && nums[i]<nums.size() && nums[i]!=nums[nums[i]-1]){
                swap(nums[i],nums[nums[i]-1]);
            }
        }
        //从头开始遍历，根据第一个不满足条件的位置，返回下标+1
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=(i+1)) return i+1;
        }
        //容器中的值全部满足时返回数组长度+1
        return nums.size()+1;
    }
};