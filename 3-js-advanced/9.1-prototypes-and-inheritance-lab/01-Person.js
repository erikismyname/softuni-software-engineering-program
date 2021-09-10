function Person(firstName, lastName) {

    this.firstName = firstName;

    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {

        get: function () {

            return `${this.firstName} ${this.lastName}`;

        },

        set: function (value) {

            const pattern = /[A-Za-z]+ [A-Za-z]+/;

            if (value.match(pattern)) {

                const [firstName, lastName] = value.split(' ');

                this.firstName = firstName;

                this.lastName = lastName;

            }

        },

    });

}