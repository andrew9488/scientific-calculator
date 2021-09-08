function factorial(n) {
    if (n < 1) return 1;
    return n !== 1 ? n * factorial(n - 1) : 1;
}

export default class FactorialCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return factorial(this.currentValue);
    }
}
