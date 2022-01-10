function getClasses() {

    class Manufacturer {

        constructor(manufacturer) {

            if (this.constructor == Manufacturer) {

                throw new Error('Error!');

            }

            this.manufacturer = manufacturer;

        }

    }

    class Keyboard extends Manufacturer {

        constructor(manufacturer, responseTime) {

            super(manufacturer);

            this.responseTime = responseTime;

        }

    }

    class Monitor extends Manufacturer {

        constructor(manufacturer, width, height) {

            super(manufacturer);

            this.width = width;

            this.height = height;

        }

    }

    class Battery extends Manufacturer {

        constructor(manufacturer, expectedLife) {

            super(manufacturer);

            this.expectedLife = expectedLife;

        }

    }

    class Computer extends Manufacturer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {

            super(manufacturer);
            
            if (this.constructor == Computer) {
                
                throw new Error('Error!');
                
            }

            this.processorSpeed = processorSpeed;

            this.ram = ram;

            this.hardDiskSpace = hardDiskSpace;

        }

    }

    class Laptop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {

            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            this.weight = weight;

            this.color = color;

            this.battery = battery;

        }

        get battery() {

            return this._battery;

        }

        set battery(value) {

            if (!(value instanceof Battery)) {
                
                throw new TypeError('Error!');
                
            }

            this._battery = value;

        }

    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            
            this.keyboard = keyboard;

            this.monitor = monitor;

        }

        get keyboard() {

            return this._keyboard;

        }

        set keyboard(value) {

            if (!(value instanceof Keyboard)) {
                
                throw new TypeError('Error!');
                
            }

            this._keyboard = value;

        }

        get monitor() {

            return this._monitor;

        }

        set monitor(value) {

            if (!(value instanceof Monitor)) {
                
                throw new TypeError('Error!');
                
            }

            this._monitor = value;

        }

    }

    return {

        Manufacturer,

        Keyboard,

        Monitor,

        Battery,

        Computer,

        Laptop,

        Desktop,

    };

}