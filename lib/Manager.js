const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email)
        officeNum = this.officeNum;
    }
    officeNumber () {
        return this.officeNum;
    }
    role () {
        return this.role;
    }
}

module.exports = Manager; 

