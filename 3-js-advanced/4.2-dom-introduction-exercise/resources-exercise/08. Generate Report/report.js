function generateReport() {

    const tableHeadingsElmts = document.querySelectorAll('th');

    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    const reportData = gatherData(tableRows);

    document.getElementById('output').value = JSON.stringify(reportData, null, 2)

    function gatherData(arr) {

        const result = [];

        arr.forEach(r => {

            let currentData = {};

            Array.from(r.children).forEach((c, i) => {

                let checkbox = tableHeadingsElmts[i].querySelector('input');

                if (checkbox.checked) {

                    currentData[tableHeadingsElmts[i].textContent.toLowerCase().trim()] = c.textContent;

                }

            });

            result.push(currentData);

        });

        return result;

    }

}