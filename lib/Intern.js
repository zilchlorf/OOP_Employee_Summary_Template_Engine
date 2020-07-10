// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    //   constructor(sideA, sideB) {
    //     const area = sideA * sideB;
    //     const perimeter = sideA * 2 + sideB * 2;
    constructor(name, school, email, id) {
        this.name = name;
        this.officeNumber = officeNumber;
        this.email = email;
        this.id = id;

    }
    //     super(area, perimeter);
    //     this.sideA = sideA;
    //     this.sideB = sideB;
    //   }
    getSchool() {
        this.school = `${response.school}`;
    }

    getRole() {
        this.role = Intern
    };
}

module.exports = Intern;