// 1 Дан масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
//   Знайти суму та кількість позитивних елементів.
const myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

/*
const sumPositiveEl = [];
let sum = 0;
for (let i = 0; i < myArr.length; i++){
	if (myArr[i] > 0){
		sumPositiveEl.push(myArr[i])
		sum = sum + myArr[i]
		
	}
}
console.log(sumPositiveEl);
console.log("Сума позитивних елементів = "+sum);
console.log("Кількість позитивних елементів = "+sumPositiveEl.length);
*/




// 2 Знайти мінімальний елемент масиву та його порядковий номер.
/*
let minElement = Math.min(...myArr);
console.log("Мінімальний елемент в масиві = "+minElement);
console.log("Порядковий номер мінімального елементу в масиві = "+myArr.indexOf(minElement))
*/




//3 Знайти максимальний елемент масиву та його порядковий номер.
/*
let maxElement = Math.max(...myArr);
console.log("Максимальний елемент в масиві = "+maxElement);
console.log("Порядковий номер максимального елементу в масиві = "+myArr.indexOf(maxElement))
*/




//4 Визначити кількість негативних елементів.
/*
const negativeElements = [];

for(let i = 0; i < myArr.length; i++) {
	if (myArr[i] < 0) {
		negativeElements.push(myArr[i]);
	}
}
console.log("Кількість негативних елементів в масиві = "+negativeElements.length);
*/




//5 Знайти кількість непарних позитивних елементів.
/*
const oddPositiveElements = [];
 for (let i = 1; i < myArr.length; i++) {
	 if (myArr[i] % 2 > 0 && myArr[i] > 0){
		 oddPositiveElements.push(myArr[i]);
	 }
 }
 console.log(oddPositiveElements);
 console.log("Кількість непарних позитивних елементів = "+oddPositiveElements.length);
*/




// 6 Знайти кількість парних позитивних елементів.
/*
const evenPositiveElements = [];
 for (let i = 1; i < myArr.length; i++) {
	 if (myArr[i] % 2 === 0 && myArr[i] > 0){
		 evenPositiveElements.push(myArr[i]);
	 }
 }
 console.log(evenPositiveElements);
 console.log("Кількість парних позитивних елементів = "+evenPositiveElements.length);
*/




// 7 Знайти суму парних позитивних елементів.
/*
const sumEvenPositiveElements = [];
let sum = 0
 for (let i = 1; i < myArr.length; i++) {
	 if (myArr[i] % 2 === 0 && myArr[i] > 0){
		 sumEvenPositiveElements.push(myArr[i])
		 sum = sum + myArr[i];
	 }
 }
 console.log(sumEvenPositiveElements);
 console.log("Сума парних позитивних елементів = "+sum);
 */
 
 
 
 
// 8 Знайти суму непарних позитивних елементів.
/*
const sumOddPositiveElements = [];
let sum = 0
 for (let i = 1; i < myArr.length; i++) {
	 if (myArr[i] % 2 > 0 && myArr[i] > 0){
		 sumOddPositiveElements.push(myArr[i])
		 sum = sum + myArr[i];
	 }
 }
 console.log(sumOddPositiveElements);
 console.log("Сума непарних позитивних елементів = "+sum);
*/




// 9 Знайти добуток позитивних елементів.
/*
const multPositiveElements = [];
let mult = 1
 for (let i = 0; i < myArr.length; i++) {
	 if (myArr[i] > 0){
		 multPositiveElements.push(myArr[i])
		 mult = mult * myArr[i];
		 console.log(mult);
	 }
 }
 console.log(multPositiveElements);
 console.log("Добуток  позитивних елементів = "+mult);
*/




// 10 Знайти найбільший серед елементів масиву, ост альні обнулити.
/*
let keepMax = myArr.splice(0,myArr.length,Math.max(...myArr));
console.log(myArr);
*/