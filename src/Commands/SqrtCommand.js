export default class SqrtCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.sqrt(this.currentValue);
    }
}
