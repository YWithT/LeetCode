//实验中发现reverse函数比sort函数慢很多！
/*
这道题让我们求下一个排列顺序，有题目中给的例子可以看出来，如果给定数组是降序，则说明是全排列的最后一种情况，
则下一个排列就是最初始情况，可以参见之前的博客 Permutations 全排列。我们再来看下面一个例子，有如下的一个数组

1　　2　　7　　4　　3　　1

下一个排列为：

1　　3　　1　　2　　4　　7

那么是如何得到的呢，我们通过观察原数组可以发现，如果从末尾往前看，数字逐渐变大，到了2时才减小的，然后我们再从后往前找第
一个比2大的数字，是3，那么我们交换2和3，再把此时3后面的所有数字转置一下即可，步骤如下：

1　　2　　7　　4　　3　　1

1　　2　　7　　4　　3　　1

1　　3　　7　　4　　2　　1

1　　3　　1　　2　　4　　7
*/

//简便解法
class Solution {
public:
    void nextPermutation(vector<int> &num) {
        int i, j, n = num.size();
        for (i = n - 2; i >= 0; --i) {
            if (num[i + 1] > num[i]) {
                for (j = n - 1; j > i; --j) {
                    if (num[j] > num[i]) break;
                }
                swap(num[i], num[j]);
                reverse(num.begin() + i + 1, num.end());
                return;
            }
        }
        reverse(num.begin(), num.end());
    }
};


//自己写的解法，复杂的原因在于没有发现当遇到第一个冲突数时，后面的序列应该是从大到小排列的。
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        vector<int>::iterator maxIndex;
        int minIndex;
        for(int i=nums.size()-2;i>-1;i--){
            maxIndex = max_element(nums.begin()+i+1,nums.end());   //vector中指定范围内返回最大值的下标
            if(nums[i]>=*maxIndex) continue;
            else{
                minIndex = minMumIndex(nums,i,nums[i]);
                int temp = nums[minIndex];
                nums[minIndex] = nums[i];
                nums[i] = temp;
                sort(nums.begin()+i+1,nums.end());
                return;
            }
        }
        sort(nums.begin(),nums.end());
    }
    
    int minMumIndex(vector<int>& nums,int beginIndex,int target){    //找到vector中指定下标之后的大于target的最小值并返回最小值的下标
        int minMum = INT_MAX;
        int minIndex = 0;
        for(int i=nums.size()-1;i>beginIndex;i--){
            if(nums[i]>target && nums[i]<minMum){
                minMum = nums[i];
                minIndex = i;
            }
        }
        return minIndex;
    }  
};