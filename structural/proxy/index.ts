/**
 * Interface declares common operations for both RealSubject and the
 * Proxy.
 */
interface CarDoor {
    open(password?: string): void,
    close(): void
}

/**
 * The RealSubject contains some core business logic.
 */
class CarAccess implements CarDoor {
    public open(): void {
        console.log('Opening car door');
    }
    public close(): void {
        console.log('Closing car door');
    }
}

/**
 * The Proxy has an interface identical to the RealSubject.
 */
class SecuritySystemProxy implements CarDoor{
    private door: CarAccess;

    constructor(door: CarAccess) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied');
        }
    }

    authenticate(password) {
        return password === 'Qwerty'
    }

    close() {
        this.door.close()
    }
}


/**
 * The client code
 */
const door = new SecuritySystemProxy(new CarAccess());

door.open('12345'); // "Access denied"
door.open('Qwerty'); // "Opening car door"
door.close(); // "Closing car door"
