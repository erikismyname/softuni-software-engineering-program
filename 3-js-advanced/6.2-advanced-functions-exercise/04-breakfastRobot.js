function outer() {

    const ingredients = {

        protein: 0,

        carbohydrate: 0,

        fat: 0,

        flavour: 0,

    };

    const recipesLibrary = {

        apple: { carbohydrate: 1, flavour: 2 },

        lemonade: { carbohydrate: 10, flavour: 20 },

        burger: { carbohydrate: 5, fat: 7, flavour: 3 },

        eggs: { protein: 5, fat: 1, flavour: 1 },

        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },

    };

    return function manage(line) {

        const actions = {

            restock: ([ing, qty]) => {

                ingredients[ing] += Number(qty);

                return 'Success';

            },

            prepare: ([rec, qty]) => {

                qty = Number(qty);

                const currRecipe = recipesLibrary[rec];

                for (let product in currRecipe) {

                    if (ingredients[product] < currRecipe[product] * qty) {

                        return `Error: not enough ${product} in stock`;

                    }

                }

                for (let product in currRecipe) {

                    ingredients[product] -= (currRecipe[product] * qty);

                }

                return 'Success';

            },

            report: () => {

                const report = [];

                Object.entries(ingredients).forEach(([i, q]) => {

                    report.push(`${i}=${q}`);

                });

                return report.join(' ');

            },

        };

        const [command, ...values] = line.split(' ');

        return actions[command](values);

    }

}