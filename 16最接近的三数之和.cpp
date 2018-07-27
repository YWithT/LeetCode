//与第15题类似，固定一个值，然后定义左右两个下标分别逼近。
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
        int minmum=nums[0]+nums[1]+nums[2];           //初始化最小值
        int length = nums.size();
        for(int i=0;i<length-2;i++){
            int left = i + 1, right = length -1 ;     //定义左右下标
            while(left<right){
                int Sum = nums[i]+nums[left]+nums[right]; 
                if(abs(target-Sum)<abs(target-minmum)){    //当前三数之和比之前的最小值更接近时目标值时，更新最小值
                   minmum = Sum; 
                }
                if(Sum<target) left++;                     //当三数之和比目标值小时，左下标右移
                else if(Sum>target) right--;               //当三数之和比目标值大时，右下标左移
                else  return Sum;
            }
        }
        return minmum;
    }
};