interface Car {
    model: string;
    price: string;
    maxSpeed: number;
}

/**
 * The Creator class declares the factory method
 */
abstract class CarCreator {
    public abstract factoryMethodCreateCar(model): Car;

    public createCar(model): Car {
        return this.factoryMethodCreateCar(model);
    }
}


/**
 * Concrete Creators override the factory method
 */
class BMWCreator extends CarCreator {
    public factoryMethodCreateCar(model): Car {
        if(model === 'X5') return new CreateBMW(model, 200, '80 000$');
        if(model === 'X6') return new CreateBMW(model, 220, '100 000$');
    }
}

class KIACreator extends CarCreator {
    public factoryMethodCreateCar(model): Car {
        if(model === 'Sportage') return new CreateKIA(model, 170, '40 000$');
    }
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class CreateBMW implements Car {
    public model: string;
    public maxSpeed: number;
    public price: string;
    constructor(model: string, maxSpeed: number, price: string) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.price = price;
    }
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class CreateKIA implements Car {
    public model: string;
    public maxSpeed: number;
    public price: string;
    constructor(model: string, maxSpeed: number, price: string) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.price = price;
    }
}

/**
 * The client code works with an instance of a concrete creator
 */
function clientCode(creator: CarCreator, model: string) {
    console.log(creator.createCar(model));
}

clientCode(new BMWCreator(), 'X5');
clientCode(new KIACreator(), 'Sportage');



/*npm install -g typescript
tsc index.ts
node index.js*/
