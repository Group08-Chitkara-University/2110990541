#include <iostream>
using namespace std;

int main () {
int x , y , z;
cout << "enter your first number: ";
cin >> x;
cout << "enter your second number: ";
cin >> y;
cout << "enter your third number: ";
cin >> z;
if (x>y&&x>z) {
    cout << x << " is greater than " << y << " and " << z;
}
else if (y>x&&y>z) {
    cout << y << " is greater than " << x << " and " << z;
}
else if (z>y&&z>x) {
    cout << z << " is greater than " << x << " and " << y;
}
return 0;
}
