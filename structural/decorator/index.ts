/**
 * The base Car interface
 */
interface Car {
    getPrice(): number,
    getDescription(): string
}

/**
 * Concrete car provide default implementations of the operations.
 */
class Kia implements Car {
    private  price: number;
    private  model: string;
    constructor() {
        this.price = 25000;
        this.model = 'Kia'
    }

    getPrice(): number {
        return this.price;
    }

    getDescription(): string {
        return this.model
    }
}

/**
 * The Decorator classes follows the same interface as the other components.
 */

class Autopilot implements Car {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    getPrice(): number {
        return this.car.getPrice() + 5000;
    }

    getDescription(): string {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Parktronic implements Car {
    protected car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    getPrice(): number {
        return this.car.getPrice() + 3000;
    }

    getDescription(): string {
        return `${this.car.getDescription()} with parktronic`;
    }
}

/**
 * Create Kia with Autopilot & Parktronic
 */
let kia: Car = new Kia();
kia = new Autopilot(kia);
kia = new Parktronic(kia);

console.log(kia.getPrice(), kia.getDescription()); // 33000 'Kia with autopilot with parktronic'


/**
 * Create Kia with Parktronic only
 */
let kia2: Car = new Kia();
kia2 = new Parktronic(kia2);

console.log(kia2.getPrice(), kia2.getDescription()); // 28000 'Kia with parktronic'

