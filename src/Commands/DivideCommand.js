export default class DivideCommand {
    constructor(previousValue, currentValue) {
        this.currentValue = currentValue;
        this.previousValue = previousValue;
    }

    execute() {
        return this.previousValue / this.currentValue;
    }
}
