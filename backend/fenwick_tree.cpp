#include<bits/stdc++.h>
using namespace std;


public class BIT{
    int size ;
    int table[];

    public BIT(int size){
        table = new int[size];
        this.size = size;
    }

    //update the position by delta 
    void update(int i , int delta){
        while( i < size){
            table [i] += delta;
            i += (i & -i);
        }
    }

    //compute the prefix sum value [1 to i ]
    int sum (int i ){
        int sum = 0; 
        while( i > 0 ){
            sum+= table[i];
            i -= ( i & -i);
        }
        return sum ;
    }

    //compute the sum value [i , j ]
    void run ( int i , int j ){
        return sum ( j ) - sum ( i);
    }


}

int main(){

    return  0 ;
}
