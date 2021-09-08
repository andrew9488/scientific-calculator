export default class SubstractCommand {
    constructor(previousValue, currentValue) {
        this.currentValue = currentValue
        this.previousValue = previousValue
    }

    execute() {
        return this.previousValue - this.currentValue
    }
}