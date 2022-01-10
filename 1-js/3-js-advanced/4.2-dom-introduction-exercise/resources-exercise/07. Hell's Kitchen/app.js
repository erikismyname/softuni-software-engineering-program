function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const inputText = JSON.parse(document.querySelector('textarea').value);

      const restaurants = formatInput(inputText);

      const bestRestaurant = findBestRestaurant(restaurants);

      const [bestRestaurantInfo, workersInfo] = document.querySelectorAll('p');

      bestRestaurantInfo.textContent = displayBestRestaurantInfo(bestRestaurant);

      workersInfo.textContent = displayWorkersInfo(bestRestaurant[1].workers);

   }

   function displayBestRestaurantInfo(arr) {

      return `Name: ${arr[0]} Average Salary: ${arr[1].avgSalary.toFixed(2)} Best Salary: ${arr[1].bestSalary.toFixed(2)}`;

   }

   function displayWorkersInfo(arr) {

      const result = [];

      arr.forEach(e => {

         result.push(`Name: ${e.workerName} With Salary: ${e.salary}`);

      });

      return result.join(' ');

   }

   function findBestRestaurant(obj) {

      return Object.entries(obj).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

   }

   function formatInput(arr) {

      const restaurants = {};

      arr.forEach(e => {

         const [restaurantName, workersInfo] = e.split(' - ');

         let workers = [];

         workersInfo.split(', ').forEach(w => {

            const [workerName, salary] = w.split(' ').map(e => isNaN(e) ? e : Number(e));

            workers.push({ workerName, salary });

         });

         if (restaurants[restaurantName]) {

            workers = workers.concat(restaurants[restaurantName].workers);

         }

         const bestSalary = workers.sort((a, b) => b.salary - a.salary)[0].salary;

         const avgSalary = workers.reduce((acc, c, i, arr) => acc + c.salary / arr.length, 0);

         restaurants[restaurantName] = {

            restaurantName,

            workers,

            avgSalary,

            bestSalary,

         };

      });

      return restaurants;

   }

}