export default class TenDegreeCommand {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    execute() {
        return Math.pow(10, this.currentValue);
    }
}
