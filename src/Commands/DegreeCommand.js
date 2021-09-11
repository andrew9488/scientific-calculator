export default class DegreeCommand {
    constructor(currentValue, previousValue) {
        this.currentValue = currentValue;
        this.previousValue = previousValue;
    }

    execute() {
        return Math.pow(this.currentValue, this.previousValue);
    }
}