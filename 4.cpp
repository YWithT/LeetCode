//题目要求时间复杂度O（log（m+n）），联想到使用二分法进行解题。并将题目转化为在两个有序数组当中寻找第K大的数。
//参考http://www.cnblogs.com/grandyang/p/4465932.html
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

	double findKth(vector<int> &nums1,int i,vector<int> &nums2,int j,int k){   //i和j分别是两个数组已抛弃数的个数，k是目标数
		int m=nums1.size()-i,n=nums2.size()-j;      //m和n分别是两个数组减去已抛弃元素的长度
		if(m>n)  return findKth(nums2,j,nums1,i,k);     //保持较短的数组为nums1
		if(m==0) return nums2[j+k-1];                   //当m=0时，即nums1中的有效元素为0，此时直接从nums2中输出
		if(k==1) return min(nums1[i],nums2[j]);         //当k=1时，所求即为nums1和nums2的第一个有效元素中的较小值
		int indexA=min(nums1.size(),i+k/2),indexB=j+k-(indexA-i);          //运用二分法，每次清除一部分数保证中位数还在有效元素中
		if(nums1[indexA-1]<nums2[indexB-1]){                  //当<时，说明nums1容器中从下标0到（index-1）均不存在中位数，故抛弃
			return findKth(nums1,indexA,nums2,j,k-indexA+i);
		}
		else if(nums1[indexA-1]>nums2[indexB-1]){             //与<情况类似
			return findKth(nums1,i,nums2,indexB,k-indexB+j);
		}
		else{
			return nums1[indexA-1];
		}
	}
};

//解法2   通过重构容器达到简化代码的目的，但是每一步都生成了新的vector，时间复杂度比第一种解法要高，打不到O(log(m+n))的要求
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(), n = nums2.size();
        return (findKth(nums1, nums2, (m + n + 1) / 2) + findKth(nums1, nums2, (m + n + 2) / 2)) / 2.0;
    }
    int findKth(vector<int> nums1, vector<int> nums2, int k) {
        int m = nums1.size(), n = nums2.size();
        if (m > n) return findKth(nums2, nums1, k);
        if (m == 0) return nums2[k - 1];
        if (k == 1) return min(nums1[0], nums2[0]);
        int i = min(m, k / 2), j = min(n, k / 2);
        if (nums1[i - 1] > nums2[j - 1]) {
            return findKth(nums1, vector<int>(nums2.begin() + j, nums2.end()), k - j);
        } else {
            return findKth(vector<int>(nums1.begin() + i, nums1.end()), nums2, k - i);
        }
        return 0;
    }
};

//解法3  二分搜索法
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(), n = nums2.size();
        if (m < n) return findMedianSortedArrays(nums2, nums1);
        if (n == 0) return ((double)nums1[(m - 1) / 2] + (double)nums1[m / 2]) / 2.0;
        int left = 0, right = n * 2;
        while (left <= right) {
            int mid2 = (left + right) / 2;
            int mid1 = m + n - mid2;
            double L1 = mid1 == 0 ? INT_MIN : nums1[(mid1 - 1) / 2];
            double L2 = mid2 == 0 ? INT_MIN : nums2[(mid2 - 1) / 2];
            double R1 = mid1 == m * 2 ? INT_MAX : nums1[mid1 / 2];
            double R2 = mid2 == n * 2 ? INT_MAX : nums2[mid2 / 2];
            if (L1 > R2) left = mid2 + 1;
            else if (L2 > R1) right = mid2 - 1;
            else return (max(L1, L2) + min(R1, R2)) / 2;
        }
        return -1;
    }
};