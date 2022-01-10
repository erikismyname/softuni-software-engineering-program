function modifyClass(inpClass) {

    inpClass.prototype.species = 'Human';

    inpClass.prototype.toSpeciesString = function () {

        return `I am a ${this.species}. ${this.toString()}`;

    }

}