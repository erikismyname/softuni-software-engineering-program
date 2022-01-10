function attachEventsListeners() {

    const fromInputEl = document.getElementById('inputDistance');

    const fromSelectEl = document.getElementById('inputUnits');

    const toInputEl = document.getElementById('outputDistance');

    const toSelectEl = document.getElementById('outputUnits');

    document.getElementById('convert').addEventListener('click', onConvert);

    function onConvert() {

        const inputValToM = convertToMeters(fromSelectEl.value, fromInputEl.value);

        toInputEl.value = convertToDesired(toSelectEl.value, inputValToM);

    }

    function convertToMeters(type, value) {

        const data = {

            km: value * 1000,

            m: value,

            cm: value / 100,

            mm: value / 1000,

            mi: value * 1609.34,

            yrd: value * 0.9144,

            ft: value * 0.3048,

            in: value * 0.0254,

        };

        return data[type];

    }

    function convertToDesired(type, value) {

        const data = {

            km: value / 1000,

            m: value,

            cm: value / 0.01,

            mm: value / 0.001,

            mi: value / 1609.34,

            yrd: value / 0.9144,

            ft: value / 0.3048,

            in: value / 0.0254,

        };

        return data[type];

    }

}