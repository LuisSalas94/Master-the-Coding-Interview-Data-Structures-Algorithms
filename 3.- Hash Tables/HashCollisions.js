let user = {
	age: 54,
	name: "Luis",
	magic: true,
	scream: function () {
		console.log('"ahhhhhhhh"');
	},
};

console.log(user.age);
user.spell = "abra kadabra";
console.log(user.spell);
user.scream();
