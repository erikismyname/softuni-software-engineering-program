function solve() {

    return {

        hasClima(obj) {

            obj.temp = 21;

            obj.tempSettings = 21;

            obj.adjustTemp = () => {

                if (obj.temp < obj.tempSettings) {

                    obj.temp++;

                } else if (obj.temp > obj.tempSettings) {

                    obj.temp--;

                }

            };

        },

        hasAudio(obj) {

            obj.currentTrack = {

                name: null,

                artist: null,

            };

            obj.nowPlaying = () => {

                if (obj.currentTrack.name && obj.currentTrack.artist) {

                    return `Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`;

                }

            };

        },

        hasParktronic(obj) {

            obj.checkDistance = (dist) => {

                if (dist < 0.1) {

                    return 'Beep! Beep! Beep!';

                } else if (dist >= 0.1 && dist < 0.25) {

                    return 'Beep! Beep!';

                } else if (dist >= 0.25 && dist < 0.5) {

                    return 'Beep!';

                }

                return '';

            };

        },

    };

}