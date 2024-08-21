// // OOP Task
// // Employe adinda bir class yaradirsiz ad position salary qebul eden constructor qurun
// // daha sonra details deye function qurun burda name position ve salary dinamik olaraq versin
// // daha sonra ele bir functionn qurun ki ona faiz olaraq necese reqem verildiyinde hemin 
// // iscinin maasina o qeder % artim olsun meselen 100 manat alirsa 50% gonderdikde 150m olsun
// // elave olaraq bir static function qurun ve iki iscinin maaslarini muqayise elesin hansi coxdusa 
// // onu qaytarsin

// // Manager , AdministrativeStaff  adinda classlar yaradin ve onlarinda 
// // constructorunda name salary position olsun ve detail deye func olsun orda
// // constructorda gelen  name salary position haqqinda melumati eks etdirsin


// // Company adinda class yaradin constructor olaraq name qebul etsin ve gelen name 
// // uygun olaraq butun iscileri ozunde toplayan array qurun  company classi daxilinde


// // butun isciler haqqinda melumat veren function olsun
// // Sirketin toplam verilen maasini hesablayan function olsun
// // en cox maas alan isci haqqinda melumat veren function olsun 


// daha duzgun helli main.js de yazilib


class Employee {

    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }

    detailsEmployee() {
        console.log(`Name:${this.name} , Position:${this.position} , Salary:${this.salary}`);
    }

    calculatePercent(percent) {
        console.log(`${this.name} Salary with ${percent}% increment is ${this.salary += (this.salary * (percent / 100))}`);
    }

    static compareSalary(employee1, employee2) {
        if (employee1.salary > employee2.salary) {
            console.log(`${employee1.name} has higher salary which is ${employee1.salary}`);
        } else {
            console.log(`${employee2.name} has higher salary which is ${employee2.salary}`);
        }
    }

}

const person1 = new Employee ("Rovshan","Manager",1000);
const person2 = new Employee ("Muzo","Sales",1200);
person1.details();
person1.calculatePercent(50)
Employee.compareSalary(person1,person2)



// //------------------------------------------------------------------------------------



class Manager extends Employee {

    constructor(name, position, salary) {
        super(name,position,salary)
    }

    details() {
      super.details()
    }
}


class AdministrativeStaff extends Employee {

    constructor(name, position, salary) {
        super(name,position,salary)
    }

    details() {
        super.details()
    }
}


// //-----------------------------------------------------------------------------------


class Company {

    constructor(name, salary) {
        this.name = name
        this.salary = salary
        Company.names.push(this.name)
        Company.salaries.push(this.salary)
    }

    info() {
        console.log(`Employee: ${this.name} ,Salary: ${this.salary}$`);
    }

    static names = []
    static salaries = []

    static sumSalaries() {
        return Company.salaries.reduce((sum, current) => sum + current, 0)
    }

    static highestSalary() {
        return Math.max(...Company.salaries)
    }

}

// const person3 = new Company("Rovshan", 500);
// person3.info()
// const person4 = new Company("Mehman", 600);
// person4.info()
// const person5 = new Company("Rauf", 400)
// person5.info()
// console.log(Company.names);
// console.log(`Salary of employees in the array: ${Company.salaries}`);
// console.log(`Sum of employee salaries :${Company.sumSalaries()}`);
// console.log(`Highest salary:${Company.highestSalary()}$`);














