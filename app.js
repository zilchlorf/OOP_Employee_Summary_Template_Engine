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
// Initialize a new employee role


inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Intern', 'Engineer', 'Manager']
    },

    // {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Hey Engineer, what is your Github username?',
    //     when: (answers) => prompt.choices === 'Engineer'
    // },
    // {
    //     type: 'input',
    //     name: 'officeNumber',
    //     message: 'Hey Manager, what is your Office number?',
    //     when: function (response) {
    //         if (response.role === Manager);
    //     }
    // },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'id',
        message: 'What your employee id number?'
    }

]).then(function (response) {
    console.log('response is:', response);

    switch (response.role) {
        case "Engineer":
            inquirer.prompt({ type: 'input', name: 'github', message: 'hey engineer, what is your github username?' }).then(function (engineer) {
                var developer = new Engineer(response.name, response.id, response.email, engineer.github);
                employees.push(developer);
            })
            break;
        case "Intern":
            inquirer.prompt({ type: 'input', name: 'school', message: 'Intern, which school did your parents send you to?' }).then(function (intern) {
                var coffeePusher = new Intern(response.name, response.id, response.email, intern.school);
                employees.push(coffeePusher);
            })
            break;
        case "Manager":
            break;
        default:
            break;
    }
});

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
