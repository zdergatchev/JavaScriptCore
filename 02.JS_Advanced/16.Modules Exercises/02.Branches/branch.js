class Branch {
    constructor(id, branchName, companyName){
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees =[];
    }

    get employees(){
        return this._employees;
    }


    hire(employee){
        this._employees.push(employee);
    }

    toString(){
        let employeeString = '';

        for(let employee of this._employees){
            employeeString += `\n** ${employee}`;
        }
        if(this._employees.length ===0){
            return `@ ${this._companyName}, ${this._branchName}, ${this._id}\nEmployed:\nNone...`;
        }
        else{
            return `@ ${this._companyName}, ${this._branchName}, ${this._id}\nEmployed:${employeeString}`;

        }
    }
}

module.exports = Branch;