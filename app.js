const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
var employees = []
// render(employees);
// Initialize a new employee role

console.log('Please enter informaton for your team members')
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Good day Manager, what is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'id',
        message: 'What your is your employee id number?'
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Intern', 'Engineer', 'No more team members to add']
    }

]).then(function (response) {
    switch (response.role) {
        case "Engineer":
            inquirer.prompt({ type: 'input', name: 'github', message: 'What is the github username of the engineer?' }).then(function (engineer) {
                let employee = new Engineer(response.name, response.id, response.email, engineer.github);
                employees.push(employee);
            })
            break;
        case "Intern":
            inquirer.prompt({ type: 'input', name: 'school', message: 'Which school did the intern attend?' }).then(function (intern) {
                let employee = new Intern(response.name, response.id, response.email, intern.school);
                employees.push(employee);
            })
            break;
        case "No more team members to add":

            render(employees);
            break;
        default:
            break;
    };
})




//push employees to an array, push that array to the render function. then you're done. MAKE SURE THE ORDER OF YOUR NEW CONSTRUCTORS MATCHES THE ORIGINAL CLASS

// *****// pass employees into render function ******

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
