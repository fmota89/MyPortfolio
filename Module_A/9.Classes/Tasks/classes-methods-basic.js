class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

let employee = new Employee("John", 30, 1000);

console.log(employee.getSalary());