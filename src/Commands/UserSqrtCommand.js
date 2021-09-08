export default class UserSqrtCommand {
    constructor(previousValue, currentValue) {
        this.currentValue = currentValue
        this.previousValue = previousValue
    }

    execute() {
        return Math.pow(this.previousValue, 1 / this.currentValue);
    }
}

