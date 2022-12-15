/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface CarBuilder {
    addBody(string): void;
    addSeats(number): void;
    addAutoPilot(boolean): void;
    addParktronic(boolean): void;
    updateEngine(string): void;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps.
 */
class Builder implements CarBuilder {
    private car: Car;

    /**
     * A fresh builder instance should contain a blank product object, which is
     * used in further assembly.
     */
    constructor() {
        this.reset();
    }

    /**
     * Set default car
     */
    public reset(): void {
        this.car = new Car();
    }

    /**
     * All production steps work with the same product instance.
     */
    public addBody(body: string): void {
        this.car.body = body;
    };
    public addSeats(seats: number): void {
        this.car.seats = seats;
    };
    public addAutoPilot(isAutoPilot: boolean): void {
        this.car.isAutoPilot = isAutoPilot;
    };
    public addParktronic(isParktronic: boolean): void {
        this.car.isParktronic = isParktronic;
    };
    public updateEngine(engine: string): void {
        this.car.engine = engine;
    };

    public getCar(): Car {
        const result = this.car;
        this.reset();

        console.log(result);
        return result;
    }
}

/**
 * Car by default
 */
class Car {
    public body = '';
    public seats = 0;
    public engine = '1.6';
    public isAutoPilot = false;
    public isParktronic = false;
}

class Director {
    private builder: Builder;

    /**
     * The Director works with any builder instance that the client code passes to it.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    public buildFamilyCar(): void {
        this.builder.addBody('Minivan');
        this.builder.addSeats(8);
        this.builder.updateEngine('2.5');
        this.builder.addParktronic(true);
    }

    public buildSportCar(): void {
        this.builder.addBody('Coupe');
        this.builder.addSeats(2);
        this.builder.updateEngine('5.0');
        this.builder.addAutoPilot(true);
        this.builder.addParktronic(true);
    }
}

/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
function clientCode(director: Director) {
    const builder = new Builder();
    director.setBuilder(builder);

    console.log('buildFamilyCar:');
    director.buildFamilyCar();
    builder.getCar();

    console.log('buildSportCar:');
    director.buildSportCar();
    builder.getCar();

    console.log('build custom car:');
    builder.addBody('Sedan');
    builder.addSeats(4);
    builder.updateEngine('1.6');
    builder.getCar();
}

const director = new Director();
clientCode(director);




