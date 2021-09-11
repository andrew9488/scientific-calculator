export default class PercentCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return this.currentValue / 100;
    }
}