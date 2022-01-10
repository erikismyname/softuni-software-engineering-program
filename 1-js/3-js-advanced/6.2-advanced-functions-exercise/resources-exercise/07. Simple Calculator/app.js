function calculator() {

    let aInputEl;

    let bInputEl;

    let resultInputEl;

    return {

        init(aId, bId, resultId) {

            aInputEl = document.querySelector(aId);

            bInputEl = document.querySelector(bId);

            resultInputEl = document.querySelector(resultId)

        },

        add() {

            resultInputEl.value = Number(aInputEl.value) + Number(bInputEl.value);

        },

        subtract() {

            resultInputEl.value = Number(aInputEl.value) - Number(bInputEl.value);

        },

    };

}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');