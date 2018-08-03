//要求时间复杂度为O（logn）,所以先用二分法找到一个值的位置，然后向两边拓展。
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int n=nums.size();
        int index=bisection(nums,0,n-1,target);
        if(index==-1) return {-1,-1};
        int left=index,right=index;
        while(nums[left-1]==target && left>0) left-=1;
        while(nums[right+1]==target && right<n-1) right+=1;
        return {left,right};
    }
    
    int bisection(vector<int> nums,int i,int j,int target){
        if(nums.size()==0 || i>j) return -1;
        int mid=(i+j)/2;
        if(nums[mid]==target)  return mid;
        else if(nums[mid]>target) return bisection(nums,i,mid-1,target);
        else return bisection(nums,mid+1,j,target);
    }
};