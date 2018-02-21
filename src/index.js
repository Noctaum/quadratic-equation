module.exports = function solveEquation(equation) {
  // your implementation

  	var string = equation;
	string = string.replace(/[^0-9-+x]/g, '');
	var reSec = /\d+(\.\d+)?/g;
	var secString = string.match(reSec);
	let first, second, third;
	let pseudo = string.split("");
	let mass = [];
	for(let i = 0; i<string.length; i++){
		if(string.charAt(i) === "x") {
			mass.push(i);
		}
	}
	first = pseudo.splice(0, mass[0]);
	pseudo.splice(0, 2);
	second = pseudo.splice(0, mass[1]-mass[0]-2);
	pseudo.splice(0, 1);
	third = pseudo;
	first = first.join("");
	second = second.join("");
	third = third.join("");
	console.log("========================");
	console.log(first);
	console.log(second);
	console.log(third);

	let discr = (+second)*(+second)-4*(+first)*(+third);
	let x1 = (-(+second) + Math.sqrt(discr))/(2*(+first));
	let x2 = (-(+second) - Math.sqrt(discr))/(2*(+first));
	if(x1 < x2) return [(x1).toFixed(0), (x2).toFixed(0)];
	else return [(x2).toFixed(0), (x1).toFixed(0)];
}

