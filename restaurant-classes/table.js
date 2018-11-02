const Diner = require('./diner');


class Table {
	constructor() {
		this.numDiners = 0;
		this.diners = {};
		this.menu;
		this.total = 0;
		this.totTax = 0;
		this.totTip = 0;
		this.totalWithTaxAndTip = 0;
		this.billSplit = 0;
	}

	addDiner(dinerName) {
		this.diners[dinerName] = new Diner;
		this.numDiners++;
	}

	setMenu(menu) {
		this.menu = menu.dishes;
	}

	orders(dinerName, dish) {
		this.diners[dinerName].addDish(dish, this.menu[dish], .20);
	}

	calcBill() {
		for (let diner in this.diners) {
			this.total += this.diners[diner].mealCost;
			this.totTip += this.diners[diner].tip;
			this.totTax += this.diners[diner].tax;
		}
		this.totalWithTaxAndTip = this.total + this.totTax + this.totTip;
		this.billSplit = this.totalWithTaxAndTip / this.numDiners;
	}
		
	printBill() {
		this.calcBill();

		console.log(`The total is $${this.totalWithTaxAndTip}. ` + 
			`That's $${this.total}, plus $${this.totTax} tax and a 20% gratuity.` + 
			`\nTo split the check, including tip, each diner can pay $${this.billSplit}.` +
			`\n\nOtherwise, here's the breakdown:\n`
		);

		for (let diner in this.diners) {
			const dinerStats = this.diners[diner];
			console.log(`\t${diner} owes $${dinerStats.mealCost} plus $${dinerStats.tax} tax plus $${dinerStats.tip} tip.\n`);
		}
	}
}

module.exports = Table;