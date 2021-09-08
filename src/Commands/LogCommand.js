export default class LogCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.log10(this.currentValue);
    }
}
