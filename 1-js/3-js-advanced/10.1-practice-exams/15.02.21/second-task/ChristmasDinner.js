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

    shopping([productType, productPrice]) {

        if (productPrice > this.budget) {

            throw new Error('Not enough money to buy this product');

        }

        this.products.push(productType);

        this.budget -= productPrice;

        return `You have successfully bought ${productType}!`;

    }

    recipes(recipeObj) {

        for (let product of recipeObj.productsList) {

            if (!this.products.includes(product)) {

                throw new Error('We do not have this product');

            }

        }

        this.dishes.push(recipeObj);

        return `${recipeObj.recipeName} has been successfully cooked!`;

    }

    inviteGuests(name, dish) {

        const currentDish = this.dishes.find(e => e.recipeName == dish);

        if (!currentDish) {

            throw new Error('We do not have this dish');

        } else if (this.guests[name]) {

            throw new Error('This guest has already been invited');

        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;

    }

    showAttendance() {

        return Object.entries(this.guests)
            .map(([n, d]) => `${n} will eat ${d}, which consists of ${this.dishes.find(e => e.recipeName == d).productsList.join(', ')}`)
            .join('\n');

    }

}