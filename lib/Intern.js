const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        school = this.school;
    }
    school () {
        return this.school;
    }
    role () {
        return "Intern";
    }
}

module.exports = Intern;