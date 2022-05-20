#include <iostream>
#include <math.h>
using namespace std;

int main() {
int y;
cout << "write your age: ";
cin >> y;
if (y < 18) {
cout << "minor not eligible";
}
else if (y > 60) {
cout << "eligible for vaccination with highest priority";
}
else if (y>18 && y<60) {
cout << "eligible for vaccination with least priority.";
}
else if (y<0) {
cout << "Invalid entry Please enter correct age.";
}
//modified file by addition of else if(y<0) condition,and a math header file and mentioning about addition in this comment.
return 0;
}
