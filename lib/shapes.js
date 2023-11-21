 // Constructor which defines shape class.
 class Shape {
  constructor() {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
 };

// Renders Square class as an extenstion of the Shape class.
class Square extends Shape {
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="75" y="50" width="150" height="150" fill="${this.color}"/>
    </svg> 
    `;
  } 
}

// Renders Circle class as an extenstion of the Shape class.
class Circle extends Shape {
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.color}"/>
      </svg>
    `;
  }
}

// Renders Triangle class as an extenstion of the Shape class.
class Triangle extends Shape {
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150 200, " fill="${this.color}"/>;
    </svg>
    `;
  }
};

// Exports `Square`, `Circle`, and `Triangle` classes.
module.exports = { Square, Circle, Triangle };