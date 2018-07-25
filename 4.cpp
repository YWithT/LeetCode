//题目要求时间复杂度O（log（m+n）），联想到使用二分法进行解题。并将题目转化为在两个有序数组当中寻找第K大的数。

class Solution {
public:
	double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
		int total = nums1.size() + nums2.size();
		if (total % 2 == 1) {   //通过判断奇偶分情况讨论，虽然可以整合到一个情况，但是当为奇数时增加了一倍的运算时间。
			return findKth(nums1, 0, nums2, 0, total / 2 + 1);
		} else {
			return (findKth(nums1, 0, nums2, 0, total / 2) + findKth(nums1, 0, nums2, 0, total / 2 + 1)) / 2;
		}
	}

	double findKth(vector<int> &nums1,int i,vector<int> &nums2,int j,int k){ //i和j是两个数组已抛弃数的个数，k是目标数
		int m=nums1.size()-i,n=nums2.size()-j;   //
		if(m>n)  return findKth(nums2,j,nums1,i,k);
		if(m==0) return nums2[j+k-1];
		if(k==1) return min(nums1[i],nums2[j]);
		int indexA=min(m+i,i+k/2),indexB=k-indexA+j+i;
		if(nums1[indexA-1]<nums2[indexB-1]){
			return findKth(nums1,indexA,nums2,j,k-indexA+i);
		}
		else if(nums1[indexA-1]>nums2[indexB-1]){
			return findKth(nums1,i,nums2,indexB,k-indexB+j);
		}
		else{
			return nums1[indexA-1];
		}
	}
};