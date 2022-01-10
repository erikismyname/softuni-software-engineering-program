const rgbToHexColor = require('../06-rgbToHex');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Happy path', () => {

        it('Return a correct value for black', () => {

            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');

        });

        it('Return a correct value for white', () => {

            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');

        });

        it('Return a correct value for red', () => {

            expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');

        });

        it('Return a correct value for green', () => {

            expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');

        });

        it('Return a correct value for blue', () => {

            expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');

        });

        it('Return a correct value for yellow', () => {

            expect(rgbToHexColor(255, 255, 0)).to.equal('#FFFF00');

        });

    });

    describe('Non-happy path', () => {

        it('Return a correct value if input parameters are of invalid type', () => {

            expect(rgbToHexColor('1', 1, 1)).to.be.undefined;

            expect(rgbToHexColor(1, '1', 1)).to.be.undefined;

            expect(rgbToHexColor(1, 1, '1')).to.be.undefined;

        });

        it('Return a correct value if input parameters are out of range', () => {

            expect(rgbToHexColor(-1, 1, 1)).to.be.undefined;

            expect(rgbToHexColor(256, 1, 1)).to.be.undefined;

            expect(rgbToHexColor(1, -1, 1)).to.be.undefined;

            expect(rgbToHexColor(1, 256, 1)).to.be.undefined;

            expect(rgbToHexColor(1, 1, -1)).to.be.undefined;

            expect(rgbToHexColor(1, 1, 256)).to.be.undefined;

            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;

            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;

        });

    });

});