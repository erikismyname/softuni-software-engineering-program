function manageTickets(arr, criteria) {

    class Ticket {

        constructor(destination, price, status) {

            this.destination = destination;

            this.price = price;

            this.status = status;

        }

    }

    const result = [];

    arr.forEach(e => {

        const [destination, price, status] = e.split('|').map(e => !isNaN(e) ? Number(e) : e);

        result.push(new Ticket(destination, price, status));

    });

    return sortTickets(result, criteria);

    function sortTickets(arr, criteria) {

        return criteria == 'price' ? arr.sort((a, b) => a.price - b.price) : arr.sort((a, b) => a[criteria].localeCompare(b[criteria]));

    }

}

// console.log(manageTickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));

console.log(manageTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'

));