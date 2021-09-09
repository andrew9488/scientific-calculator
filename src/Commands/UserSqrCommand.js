export default class UserSqrCommand {
    constructor(previousValue, currentValue) {
        this.currentValue = currentValue;
        this.previousValue = previousValue;
    }

    execute() {
        return Math.pow(this.previousValue, this.currentValue);
    }
}
