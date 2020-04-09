class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
      class Manager extends Employee {
      constructor(name, hireDate, salary, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
      }
      jobDescription(){
        console.log(this.name + "was hired on " + this.hireDate + " and makes " + this.salary + " becuase he " + this.descriptionOfJob);
      }
    }
      class Designer extends Employee{
      constructor(name, hireDate, salary, experience){
        super(name, salary, hireDate);
        this.experience = experience;
      }
      yearsExperience(){
        console.log(this.name + "was hired on " + this.hireDate + " and makes " + this.salary + " becuase they have " + this.experience);
      }
    }
     class SalesAssociate extends Employee{
      constructor(name, hireDate, salary, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
      }
      degreeCompleted(){
        console.log(this.name + "was hired on " + this.hireDate + " and makes " + this.salary + " with only a " + this.degrees);
      }

    }
    let John = new Manager(" John ", "03/27/2015", 60000, "manages the sales staff.");
    John.jobDescription();
    let Kelly = new Designer(" Kelly ", "01/04/2012", 150000, "ten years experience.");
    Kelly.yearsExperience();
    let Dave = new SalesAssociate(" Dave ", "06/07/1999 ", 55000, " highschool dipolma.");
    Dave.degreeCompleted();