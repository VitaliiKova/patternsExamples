/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products.
 */
interface AbstractFactory {
    createBMW(): AbstractBMW;
    createKIA(): AbstractKIA;
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant.
 */
class UkrCarFactory implements AbstractFactory {
    public createBMW(): AbstractBMW {
        return new UrkBMW();
    };

    public createKIA(): AbstractKIA {
        return new UkrKIA();
    };
}

class PlnCarFactory implements AbstractFactory {
    public createBMW(): AbstractBMW {
        return new PlnBMW();
    };

    public createKIA(): AbstractKIA {
        return new PlnKIA();
    };
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface AbstractBMW {
    createSedanBMW(): string;
}

interface AbstractKIA {
    createSedanKIA(): string;
    createSuvKIA(): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class UrkBMW implements AbstractBMW {
    public createSedanBMW(): string {
        return 'The result of Ukr BMW Sedan';
    }
}

class UkrKIA implements AbstractKIA {
    public createSedanKIA(): string {
        return 'The result of Ukr KIA Sedan';
    }
    public createSuvKIA(): string {
        return 'The result of Ukr KIA SUV';
    }
}


class PlnBMW implements AbstractBMW {
    public createSedanBMW(): string {
        return 'The result of Pln BMW Sedan';
    }
}

class PlnKIA implements AbstractKIA {
    public createSedanKIA(): string {
        return 'The result of Pln KIA Sedan';
    }
    public createSuvKIA(): string {
        return 'The result of Pln KIA SUV';
    }
}


/**
 * The client code works with factories and products only through abstract
 * types
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.createBMW();
    const productB = factory.createKIA();

    console.log(productA.createSedanBMW);
    console.log(productB.createSedanKIA());
    console.log(productB.createSuvKIA());
}

console.log('Client: Testing client code with the Ukr factory type...');
clientCode(new UkrCarFactory());

console.log('Client: Testing the same client code with the Pln factory type...');
clientCode(new PlnCarFactory());

