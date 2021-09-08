export default class CbrtCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.cbrt(this.currentValue);
    }
}
