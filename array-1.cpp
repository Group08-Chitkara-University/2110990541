#include <iostream>
using namespace std;

int main () {
int x;
int mvalue=0;
int sum=0;
//int odd=0;
int siz;
int arr[siz];
//int avg;
cout << "Enter size of array: ";
cin >> siz;
cout << "Enter your numbers for sum: ";

for (int i=0;i<siz;i++) {
cin >> arr[i];
}
cout << "your array is: ";
for (int i=0;i<siz;i++) {
 sum=sum+arr[i];
 cout << arr[i] << ", ";
}
//avg=sum/siz;
for (int i=0;i<siz;i++) {
       if(mvalue < arr[i])
      mvalue = arr[i];
}
cout << "\nodd number of array are: ";
for (int i=0;i<siz;i++) {
        if (arr[i] %2 != 0) {
            //odd=odd+arr[i];
            cout << arr[i] << ", ";
        }

}
//cout << "sum of odd numbers is: " << odd;
cout << endl << "Largest element = " << mvalue;
//this is a test comment for giT
cout << "\nyour sum is : " << sum;
//cout << "average of the array is: " << avg;
return 0;

}
