//��Ŀ���Ѿ��ᵽ��һ���������飬�������迼��̫�࣬ʹ�ÿ���ָ�뼴�ɽ����
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