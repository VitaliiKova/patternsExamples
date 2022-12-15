class Engine {
    public simpleInterfase(): string {
        return 'Engine 1.6 - br-br-brr-brrrrr';
    }
}

class EngineV8 {
    public complicatedInterfase(): string {
        return 'Engine V8 - wrooom wroooom!!!';
    }
}

/**
 * The Adapter makes the EngineV8 interface compatible with the Engine1_6
 * interface.
 */
class EngineV8Adapter extends Engine {
    private engine: EngineV8;

    constructor(engine: EngineV8) {
        super();
        this.engine = engine;
    }

    public simpleInterfase(): string {
        return this.engine.complicatedInterfase();
    }
}

/**
 * The client code supports all classes that follow the Engine interface.
 */
function clientStartEngine(engine: Engine) {
    console.log(engine.simpleInterfase());
}

const oldEngine = new Engine();
clientStartEngine(oldEngine); // Engine 1.6 - br-br-brr-brrrrr

const engineAdapter = new EngineV8Adapter(new EngineV8());
clientStartEngine(engineAdapter); // Engine V8 - wrooom wroooom!!!

/*const justEngineV8 = new EngineV8();
clientStartEngine(justEngineV8);*/ // ERROR


