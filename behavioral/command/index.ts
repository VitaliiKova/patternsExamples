/**
 * The Command interface declares a method for executing a command.
 */
interface Account {
    name: string;
    balance: number;
}

abstract class AccountCommand {
    constructor(
        public account: Account,
        public amount: number
    ) {}
    public execute(): void {}
    public undo(): void {}
}


class Withdraw extends AccountCommand {
    public execute(): void {
        this.account.balance -= this.amount
    }
    public undo(): void {
        this.account.balance += this.amount
    }
}

class Income extends AccountCommand {
    public execute(): void {
        this.account.balance += this.amount
    }
    public undo(): void {
        this.account.balance -= this.amount
    }
}

class BankAccount implements Account {
    public name: string;
    public balance: number;

    constructor(name: string) {
        this.name = name;
        this.balance = 0;
    }
}

class Bank {
    public commands: AccountCommand[];

    constructor() {
        this.commands = [];
    }

    operation(account: Account, amount: number): void {
        const Command = amount < 0 ? Withdraw : Income;
        const command = new Command(account, Math.abs(amount));
        command.execute();
        this.commands.push(command);
    }
    undo(count: number): void {
        for (let i = 0; i < count; i++) {
            const command: AccountCommand = this.commands.pop();
            command.undo();
        }
    }
    showOperations(): void {
        const output = [];
        for (const command of this.commands) {
            output.push({
                operation: command.constructor.toString(),
                account: command.account.name,
                amount: command.amount
            })
            console.table(output);
        }
    }
}
/**
 * Usage
 */
const bank = new Bank();

const account1 = new BankAccount('Jonny Rocker');
bank.operation(account1, 1000);
bank.operation(account1, -50);

const account2 = new BankAccount('David Bill');
bank.operation(account2, 500);
bank.operation(account2, -100);
bank.operation(account2, 150);

bank.showOperations();
console.table([account1, account2]);

bank.undo(2);
bank.showOperations();
console.table([account1, account2]);

