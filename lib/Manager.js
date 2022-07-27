const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email)
        this.officeNum = officeNum;
    }
    officeNumber () {
        return this.officeNum;
    }
    role () {
        return "Manager";
    }
}

module.exports = Manager; 

