export default class LnCommand {
    constructor(currentValue) {
        this.currentValue = currentValue
    }

    execute() {
        return Math.log(this.currentValue);
    }
}