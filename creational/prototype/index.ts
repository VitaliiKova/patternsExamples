/**
 * Class that has cloning ability. Values of field
 * with different types will be cloned.
 */
class Prototype {
    public myPrimitive: any;
    public myObject: object;
    public myArray: string[];
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.myPrimitive = this.myPrimitive;
        clone.myObject = this.myObject;
        clone.myArray = [...this.myArray];

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

/**
 * The client code.
 */
function clientCode() {
    const p1 = new Prototype();
    p1.myPrimitive = 12345;
    p1.myObject = {foo: 133, bar: 325};
    p1.myArray = ['foo', 'bar'];
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    p2.myPrimitive = 321
    p2.myObject = {foo: 999, bar: 888};
    p2.myArray = ['11', '22'];

    console.log(p1);
    console.log(p2);
}

clientCode();
