//reference type
/* let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 === object3);

//context
function fun1() {
	let a = a;
}
console.log(this); */

//instatiantion
class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm  ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`Weee I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

console.log(wizard1.play());
