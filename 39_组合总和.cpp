//本题考察了递归和深度优先搜索思想
class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<int> out;
        vector<vector<int>> res;
        sort(candidates.begin(),candidates.end());        //先排列，方便后面进行剪枝优化
        combinationSumDFS(candidates,target,0,out,res);
        return res;
    }
    
    void combinationSumDFS(vector<int>& candidates,int target,int start,vector<int>& out,vector<vector<int>>& res){
        if(target<0) return;
        else if(target==0) res.push_back(out);   //当target==0时，将此时的out存入res中
        else{
            for(int i=start;i<candidates.size();i++){    
                if(candidates[i]>target) break;     //当此时的值已经超过target时，再循环已经没有意义，break
                out.push_back(candidates[i]);       //将值存入out中
                 //深度优先递归，因为start参数依然为i，所以会将当前值填充到总和超过target为止
                combinationSumDFS(candidates,target-candidates[i],i,out,res);
                //运行到此处时说明当前out中的总和已超过target原始值，pop出最后一个元素   
                out.pop_back();
            }
        }
    }
};