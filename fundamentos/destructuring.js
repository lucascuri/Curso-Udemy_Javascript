const game = {
	name: 'The Witcher 3',
	year: '2015',
	gender: 'rpg',
	developer: 'CD Projekt Red',
	franchise: {
		name: 'The Witcher,',
		games: '3 games'
	}
}

const {name, year} = game;

console.log(name, year);

const {franchise: {name: n, games: gs}} = game;
console.log(n, gs);


const pc = {
	motherboard: 'Asus',
	cpu: 'Ryzen 5 2600',
	gpu: 'Geforce 1050 Ti',
	ram: 8
}

let {motherboard: mb, cpu: c} = pc;
console.log(mb, c);

// const {motherboard: mb, cpu: c, gpu: g, ram: r} = pc;
// console.log(mb, c, g, r);
