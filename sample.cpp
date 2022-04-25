#include <iostream>
using namespace std;

class calculator {
public:
string Operator;
int num1;
int num2;
int result;
int add(int num1,int num2);
int subtract(int num1,int num2);
int multiply(int num1,int num2);
int divide(int num1,int num2);
int remainder(int num1,int num2);
int exponent(int num1,int num2);
};

int calculator::add(int num1,int num2) {
return num1+num2;
}
int calculator::subtract(int num1,int num2) {
return num1-num2;
}
int calculator::multiply(int num1,int num2) {
return num1*num2;
}
int calculator::divide(int num1,int num2) {
return num1/num2;
}
int calculator::exponent(int num1,int num2) {
int output=1;
for (int i=0;i<num2;i++) {
output=output*num1;
}
return output;
}
int calculator::remainder(int num1,int num2) {
return num1%num2;
}
int main() {
calculator obj;
cout << "enter the first number: ";
cin >> obj.num1;
cout << "enter the second number: ";
cin >> obj.num2;
cout << "enter the operator: ";
cin >> obj.Operator;
if (obj.Operator=="+") {
obj.add(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.add(obj.num1,obj.num2);
}

else if (obj.Operator=="-") {
obj.subtract(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.subtract(obj.num1,obj.num2);
}

else if (obj.Operator=="*") {
obj.multiply(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.multiply(obj.num1,obj.num2);
}
else if (obj.Operator=="/") {
obj.divide(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.divide(obj.num1,obj.num2);
}
else if (obj.Operator=="%") {
obj.remainder(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.remainder(obj.num1,obj.num2);
}
else if (obj.Operator=="^") {
obj.exponent(obj.num1,obj.num2);
cout << "your opreration is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.exponent(obj.num1,obj.num2);
}
return 0;
}
