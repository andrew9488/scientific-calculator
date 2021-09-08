export default class MultiplyCommand {
    constructor(previousValue, currentValue) {
        this.currentValue = currentValue;
        this.previousValue = previousValue;
    }

    execute() {
        return this.previousValue * this.currentValue;
    }
}
