//与39题不同之处在于容器中的每个数字只能使用一次并且解集中不可出现重复的组合
class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(),candidates.end());
        vector<int> out;
        vector<vector<int>> res;
        combinationSum2DFS(candidates,target,0,out,res);
        return res;
    }
    
    void combinationSum2DFS(vector<int>& candidates, int target,int start,vector<int>& out,vector<vector<int>>& res){
        if(target<0) return;
        else if(target==0) res.push_back(out);
        else{
            for(int i=start;i<candidates.size();i++){
                if(candidates[i]>target) break;

                //为防止解集中出现重复的组合，在每一层循环中，若此时的值与上一个值相同则忽略
                if (i > start && candidates[i] == candidates[i - 1]) continue; 

                out.push_back(candidates[i]);

                //由于每个值只能使用一次，所以start参数为i+1
                combinationSum2DFS(candidates,target-candidates[i],i+1,out,res);
                out.pop_back();
            }
        }
    }
};