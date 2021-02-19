/*
 * =====================================================================================
 *
 *       Filename:  33.cpp
 *
 *    Description: jjk 
 *
 *        Version:  1.0
 *        Created:  03/02/21 11:01:06 PM IST
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  YOUR NAME (), 
 *   Organization:  
 *
 * =====================================================================================
 */

#include<bits/stdc++.h>

using namespace std;
 
#define int long long 
#define pb push_back
#define FAST   ios::sync_with_stdio(false); cin.tie(0); cout.tie(0);
#define TIC 	int tt = (int) clock();
#define TOK   cerr << "TIME = " << (double)(clock() - tt) / CLOCKS_PER_SEC << endl;

#define print(a) for(auto i : a) cout<<i<<" "; cout<<endl;;

int kiran_bhanushali[29][7][20];

void init(){
    for(int i=0;i<29;i++){
        kiran_bhanushali[i][0][0] = rand()%1000;
    }
}


void solve(){
    int n , m , k ;
    cin>>n>>m>>k;
    int r[n],c[m];
    int a[n][m];
    for( int i =0; i<n;i++){
        for(int j =0;j<m;j++)
            cin>>a[i][j];
    }
    for(int i =0;i<n;i++) r[i] = i ;
    for(int i =0;i<m;i++) c[i] = i ;

    while( k --){
        char ch ;
        cin>>ch;
        int ii , ji;
        cin>>ii>>ji;
        ii--;
        ji--;
        if( ch=='g'){
            cout<< a[r[ii]][c[ji]]<<'\n';
        }else if(ch=='r') {
            int t  = r[ii];
            r[ii] = r[ji];
            r[ji] = t ;
        }else{
            int t  = c[ii];
            c[ii] = c[ji];
            c[ji] = t ;
        }
    }


}

int32_t main(){
  
    //=================================================
    FAST;
    init();
    //=================================================

	int t=1;
	//cin>>t;
    while(t--){
        solve();
	}
    return 0;
}
 
