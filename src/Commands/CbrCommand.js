export default class CbrCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.pow(this.currentValue, 3);
    }
}
