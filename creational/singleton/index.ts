/**
 * The Singleton class defines the `getInstance` method that lets access
 * the unique singleton instance.
 */
class Singleton {
    private static instance: Singleton;

    /**
     * Constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }


    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        console.log('Hello world')
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

    s2.someBusinessLogic();
}

clientCode();
