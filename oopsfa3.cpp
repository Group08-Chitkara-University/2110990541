#include <iostream>
using namespace std;

class student {
public:
    int rollno;
    string name;
    void read () {
    cin >> rollno;
    cin >> name;
    }
    void display() {
    cout  << rollno << endl;
    cout  << name << endl;
    }
};
class marks:public student {
    public:
int marks1;
int marks2;
int marks3;
void readm() {
cin >> marks1;
cin >> marks2;
cin >> marks3;
}
void displaym() {
cout << marks1;
cout << marks2;
cout << marks3;
}
};

class result:public marks {
    public:
int res;
int displayresult(int marks1,int marks2, int marks3){
res=marks1+marks2+marks3;
cout << res;
}

};

int main () {
result obj;
obj.read();
obj.readm();
obj.display();
obj.displayresult( obj.marks1,obj.marks2, obj.marks3);
}
