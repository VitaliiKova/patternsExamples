class ConveyorFacade {
    protected conveyorSubsystem1: ConveyorSubsystem1;
    protected conveyorSubsystem2: ConveyorSubsystem2;

    constructor(conveyorSubsystem1?: ConveyorSubsystem1, conveyorSubsystem2?: ConveyorSubsystem2) {
        this.conveyorSubsystem1 = conveyorSubsystem1 || new ConveyorSubsystem1();
        this.conveyorSubsystem2 = conveyorSubsystem2 || new ConveyorSubsystem2();
    }

    /**
     * The Facade's methods are convenient shortcuts to the difficult
     * functionality of the subsystems
     */
    public createCar(): string {
        let result = 'Facade initializes conveyorSubsystem1:\n';
        result += this.conveyorSubsystem1.setBody();
        result += this.conveyorSubsystem1.setEngine();
        result += this.conveyorSubsystem1.setWheels();
        result += 'Facade initializes conveyorSubsystem2:\n';
        result += this.conveyorSubsystem2.setInterior();
        result += this.conveyorSubsystem2.setExterior();

        return result;
    }
}

class ConveyorSubsystem1 {
    public setBody(): string {
        return 'Subsystem1: body set!\n';
    }
    public setEngine(): string {
        return 'Subsystem1: engine set!\n';
    }
    public setWheels(): string {
        return 'Subsystem1: wheels set!\n';
    }
}

class ConveyorSubsystem2 {
    public setInterior(): string {
        return 'Subsystem2: interior added!\n';
    }
    public setExterior(): string {
        return 'Subsystem2: exterior added!\n';
    }
}

/**
 * The client code
 */

const subsystem1 = new ConveyorSubsystem1();
const subsystem2 = new ConveyorSubsystem2();
const conveyorFacade = new ConveyorFacade(subsystem1, subsystem2);

const car = conveyorFacade.createCar();

console.log(car);

