// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    //   constructor(sideA, sideB) {
    //     const area = sideA * sideB;
    //     const perimeter = sideA * 2 + sideB * 2;
    constructor(name, officeNumber, email, id) {
        this.name = name;
        this.officeNumber = officeNumber;
        this.email = email;
        this.id = id;

    }
    //     super(area, perimeter);
    //     this.sideA = sideA;
    //     this.sideB = sideB;
    //   }

    getRole() {
        this.role = Manager
    };
}

module.exports = Manager;