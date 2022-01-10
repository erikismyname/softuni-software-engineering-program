function generateCards(arr) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suitsUtfData = {

        'S': '\u2660',

        'H': '\u2665',

        'D': '\u2666',

        'C': '\u2663',

    };

    return arr.map(getCard).filter(e => e).join(' ');

    function getCard(card) {

        const face = card.slice(0, -1);

        const suit = card.slice(-1);

        if (validateCard(face, suit)) {

            console.log(`Invalid card: ${card}`);

            return;
            
        }

        return `${face}${suitsUtfData[suit]}`;

    }

    function validateCard(face, suit) {

        return !validFaces.includes(face) || !suitsUtfData[suit];

    }

}