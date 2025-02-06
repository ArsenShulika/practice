//? Завдання 1: toFixed() ПЕРЕТВОРЮЄ ЧИСЛО В РЯДОК

// Округли це число до 2 знаків після коми.
// Округли це число до 0 знаків після коми.
// Перетвори результат у рядок, використовуючи toFixed().

// const num = 12.34567;

// console.log(num.toFixed(2));

// function roundNum(number) {
//   const zeroafterComa = number.toFixed(0);
//   return Number(number.toFixed(2));
// }

// console.log(roundNum(num));

//? Завдання 2: Math.round(), Math.ceil(), Math.floor()

// Округли це число до найближчого цілого за допомогою Math.round().
// Округли число вгору за допомогою Math.ceil().
// Округли число вниз за допомогою Math.floor().

// const num = 7.8;

// function roundNum(number) {
//   const round = Math.round(number);
//   const ceil = Math.ceil(number);
//   const floor = Math.floor(number);
//   return floor;
// }

// console.log(roundNum(num));

// Зроби округлення вгору та вниз. Перевір, як працюють методи з від’ємними числами.

// const negativeNum = -3.6;

// function roundNum(number) {
//   const ceil = Math.ceil(number);
//   const floor = Math.floor(number);
//   return ceil;
// }

// console.log(roundNum(negativeNum));

//? Завдання 3: Math.min() і Math.max()

// Знайди найменше число в масиві за допомогою Math.min() (використай ...).
// Знайди найбільше число за допомогою Math.max().

// const numbers = [10, 5, 20, 8, 15];

// function minNumber(number) {
//   const minN = Math.min(...numbers);
//   const maxN = Math.max(...number);
//   return maxN;
// }

// console.log(minNumber(numbers));

//? Завдання 4: Math.random()

//! Створи функцію, яка повертає випадкове число від 0 до 1.

// function getRandomNumber() {
//   return Math.random();
// }

// console.log(getRandomNumber());

// Створи функцію, яка повертає випадкове ціле число в діапазоні від 1 до 10.
// Створи функцію, яка повертає випадкове число в заданому діапазоні (наприклад, від min до max):

// function getRandomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInRange(2, 100));

//? Завдання 5: isNaN() і Number.isFinite()

// Перевір, які з цих змінних є числовими значеннями за допомогою isNaN() та Number.isFinite().

// const a = "123";
// const b = "abc";
// const c = 10 / 0; // Infinity
// const d = NaN;

// function isNumber(value) {
//   return isNaN(value);
// }

// console.log(isNumber(c));

// Створи новий масив, який буде містити тільки числові значення (використай filter() та методи перевірки).

// const values = [10, "20", NaN, Infinity, "hello"];

// function getNumbers(arr) {
//   const result = arr.filter((item) =>
//     /* !isNaN(item) */ /* Number.isFinite(item) */ isFinite(item)
//   );
//   return result;
// }

// console.log(getNumbers(values));

// console.log(values);

//? Завдання 6: parseInt() і parseFloat()

// Перетвори рядки в числа за допомогою parseInt() та parseFloat().
// Перевір, що станеться, якщо викликати ці методи для str3.

// const str1 = "42";
// const str2 = "42.99px";
// const str3 = "Hello 123";
// const str4 = "99.99";

// function getStringFromNumber(str) {
//   const newStr = parseInt(str);
//   //   const newStr = parseFloat(str);

//   return newStr;
// }

// console.log(getStringFromNumber(str1));

//? Завдання 7: toString()

// Перетвори числа у рядок у десятковій системі.
// Перетвори числа у рядок у шістнадцятковій (16), вісімковій (8) та двійковій (2) системах числення.

// const num1 = 255;
// const num2 = 10;

// function toString(number) {
//   console.log(number.toString(2));
//   console.log(number.toString(8));
//   return number.toString(16);
// }

// console.log(toString(num2));

//? Завдання 8: Перевірка цілих чисел

// Перевір, чи є кожна зі змінних цілим числом за допомогою Number.isInteger().

// const num1 = 42;
// const num2 = 42.5;
// const num3 = "100";

// function isInteger(value) {
//   return Number.isInteger(value);
// }

// console.log(isInteger(num3));

// Знайди тільки цілі числа за допомогою filter() і Number.isInteger().

// const numbers = [10, 15.5, 20, 3.14, 50];

// function isInteger(arr) {
//   const result = arr.filter((item) => Number.isInteger(item));
//   return result;
// }

// console.log(isInteger(numbers));

//? Завдання 9: Math.pow() і Math.sqrt()

// Знайди квадратний корінь із цього числа за допомогою Math.sqrt().
// Зведи це число в ступінь 2 та 3 за допомогою Math.pow().

// const num = 16;

// function getSqrt(number) {
//   console.log(Math.pow(number, 10));
//   return Math.sqrt(number);
// }

// console.log(getSqrt(num));

//? Завдання 10: Комбінування методів

// Округли кожне число до найближчого цілого.
// Знайди суму всіх чисел.
// Знайди найбільше і найменше число.

// const numbers = [4.6, 2.3, 7.8, 1.5, 5.9];
// // let sum = 0;
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// function roundNumb(arr) {
//   const result = arr.map((item) => Math.round(item));
//   const sum = result.reduce((acc, num) => acc + num, 0);
//   //   for (const item of result) {
//   //     sum += item;
//   //   }
//   return sum;
// }

// console.log(roundNumb(numbers));

// Виведи це число у вигляді валюти з двома знаками після коми ("12,345.68"). (Підказка: використовуй toLocaleString()).

const num = 12345.6789;
