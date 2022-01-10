function composeObject() {

    return { fighter, mage };

    function fighter(name) {

        return {

            name,

            health: 100,

            stamina: 100,

            fight() {

                this.stamina--;

                return `${this.name} slashes at the foe!`;

            },

        };

    }

    function mage(name) {

        return {

            name,

            health: 100,

            mana: 100,

            cast(spell) {

                this.mana--;

                return `${this.name} cast ${spell}`;

            },

        };

    }

}