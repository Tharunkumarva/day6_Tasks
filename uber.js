class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }
    
    calculatePrice(kilometers, minutes) {
        const totalPrice = this.baseFare + (this.costPerKilometer * kilometers) + (this.costPerMinute * minutes);
        return totalPrice;
    }
}

let baseFare = 100;
let costPerKilometer = 25;
let costPerMinute = 5;

let calculator = new UberPriceCalculator(baseFare, costPerKilometer, costPerMinute);

let kilometers = 15;
let minutes = 10;

let price = calculator.calculatePrice(kilometers, minutes);
console.log(price);
