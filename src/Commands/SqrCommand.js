export default class SqrCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.pow(this.currentValue, 2);
    }
}
