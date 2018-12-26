var a = 20;
let b = 30;
const c = 60;

var a = 40;
let b = 50;
const c = 70;

function teste(a,b,c) {
	if (a>b && a>c) {
		console.log(a + " é o maior número.");	
	} else if (b>a && b>c) {
		console.log(b + " é o maior número.");
	} else if (c>a && c>b) {
		console.log(c + " é o maior número.");
	}
	
}

teste(650,45,40);

