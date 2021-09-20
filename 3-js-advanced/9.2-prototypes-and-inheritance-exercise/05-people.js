function getPeople() {

    const employeesTasks = {

        junior: ['is working on a simple task.'],

        senior: [

            'is working on a complicated task.',

            'is taking time off work.',

            'is supervising junior workers.',

        ],

        manager: [

            'scheduled a meeting.',

            'is preparing a quarterly report.',

        ],

    };

    class Employee {

        constructor(name, age, tasks) {

            this.name = name;

            this.age = age;

            this.tasks = tasks;

            this.salary = 0;

            this._index = 0;

        }

        work() {

            console.log(`${this.name} ${this.tasks[this._index % this.tasks.length]}`);

            this._index++;

        }

        collectSalary() {

            console.log(this.dividend ? `${this.name} received ${this.salary + this.dividend} this month.` : `${this.name} received ${this.salary} this month.`);

        }

    }

    class Junior extends Employee {

        constructor(name, age) {

            super(name, age, employeesTasks.junior);

        }

    }

    class Senior extends Employee {

        constructor(name, age) {

            super(name, age, employeesTasks.senior);

        }

    }

    class Manager extends Employee {

        constructor(name, age) {

            super(name, age, employeesTasks.manager);

            this.dividend = 0;

        }

    }

    return {

        Employee,

        Junior,

        Senior,

        Manager,

    };

}