class Solution {
public:
    int search(vector<int>& nums, int target) {
        if(nums.size()==0) return -1;
        int index = bisectionRoll(nums,0,nums.size()-1);
        int res=0;
        if((res=bisection(nums,0,index,target))!=-1) return res;
        else if((res=bisection(nums,index+1,nums.size()-1,target))!=-1) return res;
        else return -1;
    }
    
    int bisectionRoll(vector<int>& nums,int i,int j){
        if(nums[(i+j)/2]>nums[(i+j)/2+1]) return (i+j)/2;
        else{
            return bisectionRoll(nums,i,(i+j)/2);
            return bisectionRoll(nums,(i+j)/2+1,j);
        }
    }
    
    int bisection(vector<int>& nums,int i,int j,int target){
        if(nums[i]==target) return i;
        else if(i>=j) return -1;
        else if(nums[(i+j)/2]>target) return bisection(nums,i,(i+j)/2,target);
        else if(nums[(i+j)/2]<target) return bisection(nums,(i+j)/2+1,j,target);
        else if(nums[(i+j)/2]==target) return (i+j)/2;
        
    }
};