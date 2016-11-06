class  Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}



console.log(getPersons());
// let p = new Person("Ivan", "Ivanov", 25, "ivan@ivan.bg");
// console.log('' + p);