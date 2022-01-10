(function () {

    String.prototype.ensureStart = function (str) {

        const current = this.toString();

        return current.startsWith(str) ? current : str + current;

    };

    String.prototype.ensureEnd = function (str) {

        const current = this.toString();

        return current.endsWith(str) ? current : current + str;

    };

    String.prototype.isEmpty = function () {

        return this.toString() ? false : true;

    };

    String.prototype.truncate = function (n) {

        const current = this.toString();

        if (n < 4) {

            return '.'.repeat(n);

        }

        if (current.length <= n) {

            return current;

        } else if (current.length > n) {

            const lastIndex = current.slice(0, n - 2).lastIndexOf(' ');

            return lastIndex != -1 ? current.slice(0, lastIndex) + '...' : current.slice(0, n - 3) + '...';

        }

    };

    String.format = function (str, ...params) {

        const pattern = /{(\d+)}/;

        params.forEach(e => str = str.replace(pattern, e));

        return str;

    };

})();