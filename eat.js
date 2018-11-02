
// create menu
const Menu = require('./restaurant-classes/menu');

const breakfastMenu = new Menu;
breakfastMenu.addDish("friedEgg", 0.95);
breakfastMenu.addDish("poachedEgg", 1.85);
breakfastMenu.addDish("pancakeStack", 2.95);
breakfastMenu.addDish("waffle", 4.50);
breakfastMenu.addDish("bacon", 1.95);
breakfastMenu.addDish("cornedBeefHash", 2.85);
breakfastMenu.addDish("orangeJuice", 1.25);
breakfastMenu.addDish("coffee", 0.95);
breakfastMenu.addDish("comboMeal", 5.50);



// create table
const Table = require('./restaurant-classes/table');

const familyLouis = new Table;
familyLouis.setMenu(breakfastMenu);
familyLouis.addDiner("alex");
familyLouis.addDiner("moses");
familyLouis.addDiner("ellen");
familyLouis.addDiner("bonita");



// table places orders
familyLouis.orders("alex", "waffle");
familyLouis.orders("alex", "coffee");
familyLouis.orders("moses", "comboMeal");
familyLouis.orders("ellen", "friedEgg");
familyLouis.orders("ellen", "pancakeStack");
familyLouis.orders("ellen", "bacon");
familyLouis.orders("ellen", "bacon");
familyLouis.orders("ellen", "cornedBeefHash");
familyLouis.orders("ellen", "orangeJuice");
familyLouis.orders("bonita", "friedEgg");
familyLouis.orders("bonita", "bacon");
familyLouis.orders("bonita", "orangeJuice");



// table requests bill
familyLouis.printBill();


