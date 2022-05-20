#include <iostream>
using namespace std;

int main () {
float n;// total marks
float p , m , b , chem , comp;
float percentage;
string l , q , v , o , s;
cout << " Please enter Total Marks: ";
cin >> n;
cout << "enter your physics marks obtained out of total marks: ";
cin >> p;
if (p>n) {
    l = " PHYSICS, ";
}
cout << "enter your maths marks obtained out of total marks: ";
cin >> m;
if (m>n) {
     q= " MATHS, ";
}
cout << "enter your biology marks obtained out of total marks: ";
cin >> b;

if (b>n) {
    v = " BIOLOGY, ";
}

cout << "enter your chemistry marks obtained out of total marks: ";
cin >> chem;

if (chem>n) {
    o = " CHEMISTRY, ";
}

cout << "enter your computer marks obtained out of total marks: ";
cin >> comp;

if (comp>n) {
    s = " COMPUTER, ";
}

if (p<n&&m<n&&chem<n&&comp<n&&b<n) {

percentage = ((p+m+b+chem+comp)/(n*5))*100;

cout << "percentage = " << percentage <<" % ";

if (percentage>=90) {
    cout << "\nGrade A";
}

else if (percentage>=80) {
    cout << "\nGrade B";
}

else if (percentage>=70) {
    cout << "\nGrade C";
}

else if (percentage>=60) {
    cout << "\nGrade D";
}

else if (percentage>=40) {
    cout << "\nGrade E";
}

else if (percentage<40) {
    cout << "\nGrade F";
}

}

else {
    cout << "\n INVALID ENTRY!! PLEASE ENTER YOUR"<< l << q << v << o << s<< " 'MARKS OBTAINED' \nCORRECTLY OUT OF TOTAL MARKS!!";
}

return 0;
}
