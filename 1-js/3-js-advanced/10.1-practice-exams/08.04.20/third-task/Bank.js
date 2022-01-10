class Bank {

    constructor(bankName) {

        this._bankName = bankName;

        this.allCustomers = [];

    }

    newCustomer(customerData) {

        if (this.validateData('firstName', customerData.firstName)) {

            throw new Error(`${customerData.firstName} ${customerData.lastName} is already our customer!`);

        }

        customerData.transactionsInfo = [];

        this.allCustomers.push(customerData);

        return customerData;

    }

    depositMoney(personalId, amount) {

        if (!this.validateData('personalId', personalId)) {

            throw new Error('We have no customer with this ID!');

        }

        const currCust = this.validateData('personalId', personalId);

        if (!currCust.totalMoney) {

            currCust.totalMoney = 0;

        }

        currCust.totalMoney += amount;

        currCust.transactionsInfo.push(`${currCust.firstName} ${currCust.lastName} made deposit of ${amount}$!`);

        return `${currCust.totalMoney}$`;

    }

    withdrawMoney(personalId, amount) {

        if (!this.validateData('personalId', personalId)) {

            throw new Error('We have no customer with this ID!');

        }

        const currCust = this.validateData('personalId', personalId);

        if (amount > currCust.totalMoney) {

            throw new Error(`${currCust.firstName} ${currCust.lastName} does not have enough money to withdraw that amount!`);

        }

        currCust.totalMoney -= amount;

        currCust.transactionsInfo.push(`${currCust.firstName} ${currCust.lastName} withdrew ${amount}$!`);

        return `${currCust.totalMoney}$`;

    }

    customerInfo(personalId) {

        if (!this.validateData('personalId', personalId)) {

            throw new Error('We have no customer with this ID!');

        }

        const currCust = this.validateData('personalId', personalId);

        return `Bank name: ${this._bankName}\nCustomer name: ${currCust.firstName} ${currCust.lastName}\nCustomer ID: ${currCust.personalId}\nTotal Money: ${currCust.totalMoney}$\nTransactions:\n${currCust.transactionsInfo.map((e, i) => `${i + 1}. ${e}`).reverse().join('\n')}`;

    }

    validateData(criteria, inputData) {

        return this.allCustomers.find(e => e[criteria] == inputData);

    }

}