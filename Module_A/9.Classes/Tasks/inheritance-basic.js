class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  constructor(name, age, gender, studentId, major) {
    super(name, age, gender);
    this.studentId = studentId;
    this.major = major;
  }
}

const student1 = new Student("John Doe", 20, "Male", 123456, "Computer Science");

console.log(student1.name);
console.log(student1.age);
console.log(student1.gender);
console.log(student1.studentId);
console.log(student1.major); 