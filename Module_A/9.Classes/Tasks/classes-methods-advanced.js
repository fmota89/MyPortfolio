class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  static calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  static calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
}

const circle = new Circle(10);

console.log(Circle.calculateArea(circle.radius));