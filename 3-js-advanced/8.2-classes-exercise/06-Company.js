class Company {

    constructor() {

        this.departments = []; // It is incorrect to manipulate an array as an object

    }

    addEmployee(username, salary, position, department) {

        if (!this.checkNewEmployeeInput(username, salary, position, department)) {

            throw new Error('Invalid input!');

        }

        if (!this.departments[department]) {

            this.departments[department] = [];

        }

        this.departments[department].push({

            username,

            salary,

            position,

            department,

        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {

        let maxSum = 0;

        let departmentName = '';

        const result = [];

        Object.entries(this.departments).forEach(e => {

            let currentSum = e[1].reduce((acc, c, i, arr) => acc + (c.salary / arr.length), 0);

            if (currentSum > maxSum) {

                maxSum = currentSum;

                departmentName = e[0];

            }

        });

        result.push(`Best Department is: ${departmentName}`, `Average salary: ${maxSum.toFixed(2)}`);

        this.departments[departmentName].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).map(e => `${e.username} ${e.salary} ${e.position}`).forEach(e => result.push(e));

        return result.join('\n');

    }

    checkNewEmployeeInput(usrname, slry, pos, dep) {

        return usrname && slry > 0 && pos && dep;

    }

}