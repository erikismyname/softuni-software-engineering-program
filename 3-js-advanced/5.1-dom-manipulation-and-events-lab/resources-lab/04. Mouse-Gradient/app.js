function attachGradientEvents() {

    document.getElementById('gradient-box').addEventListener('mousemove', onMouseMove);

    function onMouseMove(ev) {

        const percent = Math.floor((ev.offsetX / 300) * 100);

        document.getElementById('result').textContent = `${percent}%`;

    }

}