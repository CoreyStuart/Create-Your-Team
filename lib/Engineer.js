const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, Github) {
        super (name, id, email)
        Github = this.Github;
    }
    github () {
        return this.Github;
    }
    role () {
        return "Engineer";
    }
}

module.exports = Engineer;