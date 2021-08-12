function attachEventsListeners() {

    document.querySelector('main').addEventListener('click', onClick);

    function onClick(ev) {

        if (ev.target.type == 'button') {

            const inputEl = ev.target.previousElementSibling;

            const timeObj = convertTime(inputEl.id, inputEl.value);

            document.getElementById('days').value = timeObj.days;

            document.getElementById('hours').value = timeObj.hours;

            document.getElementById('minutes').value = timeObj.minutes;

            document.getElementById('seconds').value = timeObj.seconds;

        }

    }

    function convertTime(type, val) {

        const timeData = {

            days: {

                days: val,

                hours: val * 24,

                minutes: val * 1440,

                seconds: val * 86400,

            },

            hours: {

                days: val / 24,

                hours: val,

                minutes: val * 60,

                seconds: val * 3600,

            },

            minutes: {

                days: val / 1440,

                hours: val / 60,

                minutes: val,

                seconds: val * 60,

            },

            seconds: {

                days: val / 86400,

                hours: val / 3600,

                minutes: val / 60,

                seconds: val,

            },

        };

        return timeData[type];

    }

}