#include <iostream>
using namespace std;

int main() {
int siz;//size of array
cout << "enter size of array: ";
cin >> siz;
int arr[siz];
int sum=0;
int x=1;
for (int i=0;i<siz;i++) {
cout << "Enter element " << x << ": ";
cin >> arr[i];
x++;
}
for (int i=0;i<siz;i++) {
sum=sum+arr[i];
}
cout << sum;
return 0;
}
