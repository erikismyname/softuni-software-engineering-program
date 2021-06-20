function solve(num) {

    let result = ['<div class="chessboard">'];

    let last = 'black';

    for (let a = 0; a < num; a++) {

        result.push('  <div>');

        for (let a = 0; a < num; a++) {

            if (last == 'black') {

                result.push('    <span class="black"></span>');

                last = 'white';

            } else {

                result.push('    <span class="white"></span>');

                last = 'black';

            }

        }

        if (num % 2 == 0) {

            last == 'white' ? last = 'black' : last = 'white';

        }

        result.push('  </div>');

    }

    result.push('</div>');

    return result.join('\n');

}

console.log(solve(4));
// chessboard(2);
/*

<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>

*/