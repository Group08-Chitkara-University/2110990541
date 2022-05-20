//this comment made in vi editor and this is a calculator
#include <iostream>
using namespace std;

class calculator {
public:
string Operator;
string exit;
string mode;
int num1;
int num2;
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
int result;
cout << "enter calculator mode --- dual/continuous: ";
cin >> obj.mode;
cout << "your selected mode is: " << obj.mode << endl << endl;
int i=1;
while (true) {

cout << "type exit to end process or continue to keep running program: ";
cin >> obj.exit;
if (obj.exit=="exit") {
    cout << "you have successfully exited the program";
    break;
}

else if (obj.exit=="continue"&&obj.mode=="dual") {
cout << "enter the first number: ";
cin >> obj.num1;
cout << "enter the operator: ";
cin >> obj.Operator;
cout << "enter the second number: ";
cin >> obj.num2;

}
else if(obj.mode=="continuous"&&obj.exit=="continue") {
if (i>=2) {
    obj.num1=result;
}
else if (i==1) {
cout << "enter the first number: ";
cin >> obj.num1;
}
cout << "enter the operator: ";
cin >> obj.Operator;
cout << "enter the number: ";
cin >> obj.num2;

}


if (obj.Operator=="+") {
        i++;
result=obj.add(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << result << endl << endl;
}

else if (obj.Operator=="-") {
    i++;
result=obj.subtract(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.subtract(obj.num1,obj.num2) << endl << endl;
}

else if (obj.Operator=="*") {
    i++;
result=obj.multiply(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.multiply(obj.num1,obj.num2) << endl << endl;
}
else if (obj.Operator=="/") {
    i++;
result=obj.divide(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.divide(obj.num1,obj.num2) << endl << endl;
}
else if (obj.Operator=="%") {
    i++;
result=obj.remainder(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.remainder(obj.num1,obj.num2) << endl << endl;
}
else if (obj.Operator=="^") {
    i++;
result=obj.exponent(obj.num1,obj.num2);
cout << "your operation is: " << obj.num1 << " " << obj.Operator << " " << obj.num2 << " = " << obj.exponent(obj.num1,obj.num2) << endl << endl;
}
}
return 0;
}
