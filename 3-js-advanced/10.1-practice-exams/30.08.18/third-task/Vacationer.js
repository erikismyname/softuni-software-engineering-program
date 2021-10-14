class Vacationer {

    constructor(fullName, creditCard) {

        this.fullName = fullName;

        this.creditCard = creditCard;

        this.idNumber = this.generateIDNumber();

        this.wishList = [];

    }

    get fullName() {

        return this._fullName;

    }

    set fullName(value) {

        const pattern = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/;

        if (value.length != 3) {

            throw new Error('Name must include first name, middle name and last name');

        }

        if (!pattern.test(value.join(' '))) {

            throw new Error('Invalid full name');

        }


        this._fullName = {

            firstName: value[0],

            middleName: value[1],

            lastName: value[2],

        };

    }

    get creditCard() {

        return this._creditCard;

    }

    set creditCard(value) {

        if (value) {

            if (value.length < 3) {

                throw new Error('Missing credit card information');

            }

            const [cardNumber, expirationDate, securityNumber] = value;

            if (typeof cardNumber != 'number' || typeof securityNumber != 'number') {

                throw new Error('Invalid credit card details');

            }


            this._creditCard = {

                cardNumber,

                expirationDate,

                securityNumber,

            };

        } else {

            this._creditCard = {

                cardNumber: 1111,

                expirationDate: '',

                securityNumber: 111,

            };

        }

    }

    generateIDNumber() {

        const vowels = ['a', 'e', 'i', 'o', 'u'];

        const firstNameLetterCode = this.fullName.firstName.charCodeAt(0);

        const middleNameLength = this.fullName.middleName.length;

        let id = (231 * firstNameLetterCode) + (139 * middleNameLength);

        const lastNameChar = this.fullName.lastName[this.fullName.lastName.length - 1];

        vowels.includes(lastNameChar) ? id += '8' : id += '7';

        return id;

    }

    addCreditCardInfo(arr) {

        this.creditCard = arr;

    }

    addDestinationToWishList(destination) {

        if (this.wishList.includes(destination)) {

            throw new Error('Destination already exists in wishlist');

        }

        this.wishList.push(destination);

        this.wishList.sort((a, b) => a.length - b.length);

    }

    getVacationerInfo() {

        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${!this.wishList.length ? 'empty' : this.wishList.join(', ')}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;

    }

}