export default class TenPowCommand {
    constructor(currentValue) {
        this.currentValue = currentValue

    }

    execute() {
        return Math.pow(10, this.currentValue);
    }
}