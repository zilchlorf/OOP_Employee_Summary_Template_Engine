// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    //   constructor(sideA, sideB) {
    //     const area = sideA * sideB;
    //     const perimeter = sideA * 2 + sideB * 2;
    constructor(name, github, email, id) {
        this.name = name;
        this.officeNumber = officeNumber;
        this.email = email;
        this.id = id;

    }
    //     super(area, perimeter);
    //     this.sideA = sideA;
    //     this.sideB = sideB;
    //   }
    getGithub() {
        this.github = `${response.github}`;
    }

    getRole() {
        this.role = Engineer
    };
}

module.exports = Engineer;