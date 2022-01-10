function mainController(inputJSON, criteria) {

    const arr = JSON.parse(inputJSON);

    const result = [];

    return criteria == 'all' ? getAllEmployees(arr) : filterEmployees(arr);

    function getAllEmployees(arr) {

        arr.forEach((o, i) => {

            result.push(`${i}. ${o.first_name} ${o.last_name} - ${o.email}`);

        });

        return result.join('\n');

    }

    function filterEmployees(arr) {

        const [key, val] = criteria.split('-');

        arr.filter(o => o[key] == val).forEach((o, i) => {

            result.push(`${i}. ${o.first_name} ${o.last_name} - ${o.email}`);

        });

        return result.join('\n');

    }

}

console.log(mainController(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
));