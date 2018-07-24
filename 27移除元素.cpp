//与26题不同之处在于当n=1时不能直接返回，因为可能这1个值与val值相等
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int count=0,n=nums.size();
        if(n==0){
            return n;
        }
        for(int i=0;i<n;i++){
            if(nums[i]==val){
                count++;
            }
            else{
                nums[i-count]=nums[i];
            }
        }
        return n-count;
    }
};