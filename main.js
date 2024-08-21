
class Employee {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    employeeDetail() {
        console.log(`Name:${this.name}  Position:${this.position} Salary:${this.salary}`);
    }
    salaryIncrement(faiz) {
        this.salary += ((this.salary * faiz) / 100)
    }
    static compareSalary(personalTotal) {
        const sortedArray = personalTotal.sort((item1, item2) => item2.salary - item1.salary);
        const highestSalaryEmployee = sortedArray[0];
        console.log(`En yüksek maaşli isci: ${highestSalaryEmployee.name} Maas: ${highestSalaryEmployee.salary}`);
    }
}


class Manager extends Employee {
    constructor(name, position, salary) {
        super(name, position, salary)
    }
    detail() {
        this.employeeDetail()
    }
}

class AdministrativeStaff extends Employee {
    constructor(name, position, salary) {
        super(name, position, salary)
    }

    detail() {
        this.employeeDetail()
    }
}

class Company {
    constructor(...name) {
        this.personal = name;
    }

    personalDetail() {
        console.log("Personallar haqqinda melumat : ");
        
        this.personal.forEach((personal) => console.log(personal.name, personal.position, personal.salary));
    }

    totalSalary() {
        this.totalSalaryRes = 0;
        this.personal.forEach((item) => this.totalSalaryRes += item.salary)
        console.log(`Umumi personala xerclenen maas : ${this.totalSalaryRes}`);
    }

    highSalary() {
        return Employee.compareSalary(this.personal)
    }
}


const manager1 = new Manager("Muzo", "founder", 18000)
manager1.salaryIncrement(20)

const administrativeStaff1 = new AdministrativeStaff("Ayxan", "admin", 20020)
const general = new Company(manager1, administrativeStaff1);
// console.log(general.personal);
   
general.highSalary()
general.personalDetail()
general.totalSalary()
