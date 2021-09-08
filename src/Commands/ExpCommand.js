export default class ExpCommand {
    constructor(currentValue) {
        this.currentValue = currentValue

    }

    execute() {
        return Math.exp(this.currentValue);
    }
}