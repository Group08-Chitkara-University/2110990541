#include <iostream>
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
return 0;
}
