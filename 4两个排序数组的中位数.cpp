class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    vector<int> nums3;
    int i=0,j=0;
    double result;
    while(i<nums1.size()&&j<nums2.size()){
        if(nums1[i]<nums2[j]){
            nums3.push_back(nums1[i++]);
        }
        else if(nums1[i]>nums2[j]){
            nums3.push_back(nums2[j++]);
        }
        else{
            nums3.push_back(nums1[i++]);
            nums3.push_back(nums2[j++]);
        }
    }
    if(i!=nums1.size()){
        nums3.insert(nums3.end(),nums1.begin()+i,nums1.end());
    }else{
        nums3.insert(nums3.end(),nums2.begin()+j,nums2.end());
    }
    int n=nums3.size();
    if(n%2!=0){
        result=nums3[(n-1)/2];
    }else{
        result=(nums3[(n-2)/2]+nums3[n/2])/2.0;
    }
    return result;
    }
};