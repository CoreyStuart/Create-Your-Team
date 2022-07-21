const Employee = require('./Employee');

class Engieneer extends Employee {
    constructor (name, id, email, Github) {
        super (name, id, email)
        Github = this.Github;
    }
    github () {
        return this.Github;
    }
    role () {
        return this.role;
    }
}

module.exports = Engineer;