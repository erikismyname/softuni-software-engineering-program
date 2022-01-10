class Restaurant {

    constructor(budgetMoney) {

        this.budgetMoney = budgetMoney;

        this.menu = {};

        this.stockProducts = {};

        this.history = [];

    }

    loadProducts(arr) {

        // this.history = [];

        arr.forEach(e => {

            const [productName, productQty, productPrice] = e.split(' ').map(e => isNaN(e) ? e : Number(e));

            if (productPrice <= this.budgetMoney) {

                this.budgetMoney -= productPrice;

                if (!this.stockProducts[productName]) {

                    this.stockProducts[productName] = 0;

                }

                this.stockProducts[productName] += productQty;

                this.history.push(`Successfully loaded ${productQty} ${productName}`);

            } else {

                this.history.push(`There was not enough money to load ${productQty} ${productName}`);

            }

        });

        return this.history.join('\n');

    }

    addToMenu(meal, neededProductsArr, price) {

        if (this.menu[meal]) {

            return `The ${meal} is already in the our menu, try something different.`;

        }

        this.menu[meal] = { products: neededProductsArr, price };

        const menuLength = Object.entries(this.menu).length;

        return menuLength == 1 ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?` : `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`

    }

    showTheMenu() {

        const entries = Object.entries(this.menu);

        return !entries.length ? 'Our menu is not ready yet, please come later...' : entries.map(([n, v]) => `${n} - $ ${v.price}`).join('\n');

    }

    makeTheOrder(meal) {

        if (!this.menu[meal]) {

            return `There is not ${meal} yet in our menu, do you want to order something else?`

        }

        const mealProducts = this.menu[meal].products;

        for (let data of mealProducts) {

            const [productName, productQty] = data.split(' ').map(e => isNaN(e) ? e : Number(e));

            if (this._validateProductData(productName, productQty)) {

                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

            }

        }

        this.budgetMoney += this.menu[meal].price;

        mealProducts.forEach(e => {

            const [productName, productQty] = e.split(' ').map(e => isNaN(e) ? e : Number(e));

            this.stockProducts[productName] -= productQty;

        });

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

    }

    _validateProductData(productName, productQty) {

        return !this.stockProducts[productName] || productQty > this.stockProducts[productName];

    }

}