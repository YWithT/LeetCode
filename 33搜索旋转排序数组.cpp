/*
这道题让在旋转数组中搜索一个给定值，若存在返回坐标，若不存在返回-1。我们还是考虑二分搜索法，但是这道题的难点在于我们不知道
原数组在哪旋转了，我们还是用题目中给的例子来分析，对于数组[0 1 2 4 5 6 7] 共有下列七种旋转方法：

0　　1　　2　　 4　　5　　6　　7

7　　0　　1　　 2　　4　　5　　6

6　　7　　0　　 1　　2　　4　　5

5　　6　　7　　 0　　1　　2　　4

4　　5　　6　　7　　0　　1　　2

2　　4　　5　　6　　7　　0　　1

1　　2　　4　　5　　6　　7　　0

二分搜索法的关键在于获得了中间数后，判断下面要搜索左半段还是右半段，我们观察上面红色的数字都是升序的，由此我们可以观察出规
律，如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的，我们只要在有序的半段里用首尾两个
数组来判断目标值是否在这一区域内，这样就可以确定保留哪半边了
 */
//直接运用二分法的简便解法。
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n=nums.size();
        if(n==0) return -1;   
        int left=0, right=n-1, mid;
        while(left<=right){
            mid=(left+right)/2;
            if(nums[mid]==target) return mid;       //如果中间值==target，直接返回
            else if(nums[mid]<nums[right]){         //如果中间值小于right值，说明从mid到right是有序递增的
                if(nums[mid]<target && target<=nums[right]) left=mid+1;  //如果target>mid值并且<=right值，说明在此区间
                else right=mid-1;
            }
            else{                                   //如果中间值大于right值，说明从left到mid是有序递增的
                if(nums[mid]>target && nums[left]<=target) right=mid-1;
                else left=mid+1;
            }
        }
        return -1;
        
    }
};



//自己的解法，先用二分查找到旋转发生的位置，再用两个二分查找查找对应的位置。原理上认为可行，但是以下代码未通过测试
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