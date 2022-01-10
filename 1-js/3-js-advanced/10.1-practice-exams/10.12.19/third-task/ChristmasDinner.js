class ChristmasDinner {

    constructor(budget) {

        this.budget = budget;

        this.dishes = [];

        this.products = [];

        this.guests = {};

    }

    get budget() {

        return this._budget;

    }

    set budget(value) {

        if (value < 0) {

            throw new Error('The budget cannot be a negative number');

        }

        this._budget = value;

    }

    shopping([productName, productPrice]) {

        if (productPrice > this.budget) {

            throw new Error('Not enough money to buy this product');

        }

        this.products.push(productName);

        this.budget -= productPrice;

        return `You have successfully bought ${productName}!`;

    }

    recipes(recipeData) {

        for (let product of recipeData.productsList) {

            if (!this.products.includes(product)) {

                throw new Error('We do not have this product');

            }

        }

        const recipeName = recipeData.recipeName;

        const productsList = recipeData.productsList;

        this.dishes.push({ recipeName, productsList });

        return `${recipeName} has been successfully cooked!`;

    }

    inviteGuests(name, dish) {

        const currentDish = this.dishes.find(e => e.recipeName == dish);

        if (!currentDish) {

            throw new Error('We do not have this dish');

        }

        if (this.guests[name]) {

            throw new Error('This guest has already been invited');

        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;

    }

    showAttendance() {

        const result = [];

        Object.entries(this.guests).forEach(([k, v]) => {

            result.push(`${k} will eat ${v}, which consists of ${this.dishes.find(e => e.recipeName == v).productsList.join(', ')}`);

        });

        return result.join('\n');

    }

}