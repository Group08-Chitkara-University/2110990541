#include <iostream>
using namespace std;

class myClass {
    public:
    string name;
    int age;
    string dob;
    int show() {

cout << "name of student: " << obj.name << "\nage of student: " << obj.age << "\n" << obj.dob;
}
};

int main() {
    myClass obj;
    obj.name="haraksh singh";
    obj.age=19;
    obj.show();
    obj.dob="13 03 2003";
    return 0;
};
