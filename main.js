//First problem (#7) - declaration
function product (number1, number2, number3) {
	result = number1 * number2 * number3
	return result  
}

//First problem - invocation
let a = 2;
let b = 4;
let c = 7;
let d = product (a, b, c);

const productofthree ={
	First_number: a,
	Second_number: b,
	Third_number: c,
	product: d,
};
console.log(productofthree);


//Second problem (#14) - declaration
function greatest (number1, number2, number3) {

	if (number1 > number2 && number1 > number3) {
		return number1
	}

	else if (number2 > number1 && number2 > number3) {
		return number2
	}

	else 
		return number3
}


//Second problem - invocation
let e = 24.7;
let f = 247;
let g = 24/7;
let h = greatest (e, f, g); 

 const greatestnumber ={
 	First_number: e,
	Second_number: f,
	Third_number: g,
	greatest: h,
 };

 console.log(greatestnumber);


 //Thrid problem (#11) - declaration
function eventest (number) {

	if (number % 2 == 0) {
		return 'even'
	}

	else if (number % 2 == 1) {
		return 'odd'
	}

	else 
		return 'thats not a whole number you dummy'
}

 //Third problem - invocation 
let i = 247;
let j = eventest (i);

const evenornot ={
	Your_number: i,
	status: j,
};

console.log(evenornot);