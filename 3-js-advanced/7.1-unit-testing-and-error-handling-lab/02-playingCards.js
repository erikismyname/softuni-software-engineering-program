function composeObject(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suitsUtfData = {

        'S': '\u2660',

        'H': '\u2665',

        'D': '\u2666',

        'C': '\u2663',

    };

    if (validateInput(face, suit)) {

        throw new Error('Error');

    }

    return {

        face,

        suit,

        toString: () => `${face}${suitsUtfData[suit]}`,

    };

    function validateInput(face, suit) {

        return !validFaces.includes(face) || !suitsUtfData[suit];

    }

}