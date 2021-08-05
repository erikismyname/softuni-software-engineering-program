function createObject() {

    const nums = [];

    return {

        add(el) {

            nums.push(el);

            this.size++;
            
            return nums.sort((a, b) => a - b);

        },

        remove(idx) {

            if (checkRange(idx)) {

                nums.splice(idx, 1);

                this.size--;

            }

        },

        get(idx) {

            if (checkRange(idx)) {

                return nums[idx];

            }

        },

        size: 0,

    };

    function checkRange(num) {

        return num >= 0 && num < nums.length;

    }

}

let list = createObject();
console.log(list);
list.add(5);
console.log(list.size);
list.add(6);
console.log(list.size);
list.add(7);
console.log(list.size);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
