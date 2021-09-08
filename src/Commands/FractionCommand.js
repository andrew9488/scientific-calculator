export default class FractionCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return 1 / this.currentValue;
    }
}
