class Diner {
	constructor() {
		this.meal = [];
		this.mealCost = 0;
		this.tip = 0;
		this.tax = 0;
	}
	
	addDish(dishName, dishCost, tipPerc) {
		this.meal.push(dishName);
		this.mealCost += dishCost;
		this.calcTax();
		this.calcTip(tipPerc);
	}

	calcTax() {
		this.tax = this.round(this.mealCost * 0.12);
	}

	calcTip(perc) {
		this.tip = this.round(this.mealCost * perc);
	}

	round(num) {
		return Math.round(num * 100) / 100;
	}
}

module.exports = Diner;