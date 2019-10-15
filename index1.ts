console.log('Hello');

function add(a: number, b: number) {
	return a + b;
}

console.log(add(7, 8));

let mute: boolean = true;

// numeros y strings
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Gustavo', 6500000);

console.log(peopleAndNumbers);

enum Color {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}

let color: Color = Color.Verde;

console.log(`Mi Color es ${color}`);

let comodin: any = 'asdas';
comodin = 1654;

console.log(comodin);

let someObject: object = {
	name: 'Gustavo',
};

console.log(someObject);

function createAdder(a: number): (number) => number {
	return function(b: number) {
		return b + a;
	};
}

interface Rectagulo {
	ancho: number;
	alto: number;
}

let rec: Rectagulo = {
	ancho: 9,
	alto: 9,
};

function area(r: Rectagulo): number {
	return r.alto * r.ancho;
}

console.log(area(rec));
