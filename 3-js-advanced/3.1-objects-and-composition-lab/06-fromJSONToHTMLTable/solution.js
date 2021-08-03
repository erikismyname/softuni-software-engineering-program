function solve(JSONArr) {

    const arr = JSON.parse(JSONArr);

    const result = ['<table>'];

    result.push(createHeadings(arr));

    result.push(createValues(arr));

    result.push('</table>');

    return result.join('\n');

    function createValues(arr) {

        const values = [];

        arr.forEach(e => {

            let currentRow = ['   <tr>'];

            Object.values(e).forEach(v => {

                currentRow.push(`<td>${checkForEntities(v)}</td>`)

            });

            currentRow.push('</tr>');

            values.push(currentRow.join(''));

        });

        return values.join('\n');

    }

    function createHeadings(arr) {

        const headings = ['   <tr>'];

        Object.keys(arr[0]).forEach(e => headings.push(`<th>${checkForEntities(e)}</th>`));

        headings.push('</tr>');

        return headings.join('');

    }

    function checkForEntities(str) {

        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }

}