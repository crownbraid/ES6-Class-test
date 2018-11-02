class Menu {
	constructor() {
		this.dishes = {};
	}

	addDish(dishName, cost) {
		this.dishes[dishName] = cost;
	}
}

module.exports = Menu;