//两条边谁短谁往中间移动直到两条边相遇
class Solution {
public:
    int maxArea(vector<int>& height) {
        int area=0,i=0,j=height.size()-1;
        while(i<j){
            area = max(area,min(height[i],height[j])*(j-i));
            height[i]>height[j] ? j-- : i++;
        }
        return area;
    }
};