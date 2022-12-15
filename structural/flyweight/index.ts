/**
 * The Flyweight class
 */
class Auto {
    private model: string;

    constructor(model: string) {
        this.model = model;
    }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects.
 * When the client requests a flyweight, the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 */
class AutoFactory {
    private models: {[key: string]: Auto};

    constructor(name?: string) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if(model) return model;
        console.count('model')
        this.models[name] = new Auto(name);
        return  this.models[name]
    }

    getModelsFromCache() {
        console.table(this.models)
    }
}

/**
 * Client code
 */

const factory = new AutoFactory();

const kia = factory.create('Kia');
const audi = factory.create('Audi');
const bmw = factory.create('BMW');
const audi2 = factory.create('Audi');
const bmw2 = factory.create('BMW');
const bmw3 = factory.create('BMW');

console.log(factory.getModelsFromCache());
