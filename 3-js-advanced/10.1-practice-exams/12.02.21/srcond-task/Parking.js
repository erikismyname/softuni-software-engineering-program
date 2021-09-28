class Parking {

    constructor(capacity) {

        this.capacity = capacity;

        this.vehicles = [];

    }

    addCar(carModel, carNumber) {

        if (this.vehicles.length + 1 > this.capacity) {

            throw new Error('Not enough parking space.');

        }

        this.vehicles.push({

            carModel,

            carNumber,

            payed: false,

        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;

    }

    removeCar(carNumber) {

        const currentCar = this.vehicles.find(e => e.carNumber == carNumber);

        if (!currentCar) {

            throw new Error('The car, you\'re looking for, is not found.');

        } else if (currentCar && !currentCar.payed) {

            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);

        }

        this.vehicles.splice(this.vehicles.indexOf(currentCar), 1);

        return `${carNumber} left the parking lot.`;

    }

    pay(carNumber) {

        const currentCar = this.vehicles.find(e => e.carNumber == carNumber);

        if (!currentCar) {

            throw new Error(`${carNumber} is not in the parking lot.`);

        } else if (currentCar && currentCar.payed) {

            throw new Error(`${carNumber}'s driver has already payed his ticket.`);

        }

        currentCar.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;

    }

    getStatistics(carNumber) {

        if (carNumber) {

            const currentCar = this.vehicles.find(e => e.carNumber == carNumber);

            return `${currentCar.carModel} == ${currentCar.carNumber} - ${currentCar.payed ? 'Has payed' : 'Not payed'}`;

        }

        const result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`];

        this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel)).map(e => `${e.carModel} == ${e.carNumber} - ${e.payed ? 'Has payed' : 'Not payed'}`).forEach(e => result.push(e));

        return result.join('\n');

    }

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
