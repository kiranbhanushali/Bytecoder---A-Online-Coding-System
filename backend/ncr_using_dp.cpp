/*
 * =============================================================================
 *
 *       Filename:  ncr_using_dp.cpp
 *
 *    Description:  
 *
 *        Version:  1.0
 *        Created:  18/10/20 02:45:42 AM IST
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  YOUR NAME (), 
 *   Organization:  
 *
 * =============================================================================
 */
#include<bits/stdc++.h>

using namespace std;
int C(int n , int m ){
	vector<vector<int>> dp(n+1,vector<int> (m+1));
	for(int i =0;i<=n;i++){
		dp[i][0] = 1;
		dp[i][i] = 1;

		for(int j =1;j<i;j++){
			dp[i][j] = dp[i-1][j]+dp[i-1][j-1];
		}
	}			
	return dp[n][m];
}


int main()
{
	int n,m;
	
	// find n c m 
	//
	cout<<C( n , m )<<endl;
}
