class Neighbor {
    //apartment complex properties
    constructor(name, unit, numberOfHellos) {
        this._name = name;
        this._unit = unit;
        this._numberOfHellos = numberOfHellos;
    }

    //Checks number of hellos
    saidHello() {
        if (this._numberOfHellos > 5) {
            console.log('Neighbor is around too much')
        } else {
            console.log ('Wonder if my neighbor is ok?')
        }
    }
    
}

class NeighborOne extends Neighbor {
    //NeighborOne instance with Neighbor properties and looks out window
    constructor(name, unit, numberOfHellos, looksOutWindow) {
        super(name, unit, numberOfHellos);
        this._looksOutWindow = looksOutWindow;
    }
}

class NeighborTwo extends Neighbor {
    //NeighorTwo instance with Neighbor properties and isNosey methos
    constructor(name, unit, numberOfHellos, isNosey = false) {
        super(name, unit, numberOfHellos);
        this.isNosey = isNosey;
    }

    //Checks nosey neighbors. If nosey, change to true, if not nosey print message
    nosey() {
        if(this.isNosey) {
            this.isNosey = true;
        } else {
            console.log('Oh, you not in my business today')
        }
    }
}

//create class instances
let neighbor = new Neighbor('Karen', 2, 2);
let neighborOne = new NeighborOne('Rick', 1, 3, 5);
let neighborTwo = new NeighborTwo('Gail', 3, 7, true);

//parent class method call
neighbor.saidHello(2);
neighborOne.saidHello(1);
neighborTwo.saidHello(7);

//nosey call
neighborTwo.nosey()

console.log(neighbor);
console.log(neighborOne);
console.log(neighborTwo);
