//! Завдання 1: map

// Створи новий масив, у якому кожне число буде подвоєно.
// Виведи результат у консоль.

// const numbers = [2, 4, 6, 8, 10];

// function getNewArrdoubleNum(arr) {
//   const newArr = arr.map((item) => item * 2);
//   return newArr;
// }

// console.log(getNewArrdoubleNum(numbers));

// Створи масив, у якому будуть лише імена користувачів (["Alice", "Bob", "Charlie"]).

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// function getNewArr(arr) {
//   const newArr = arr.map((item) => item.name);
//   return newArr;
// }

// console.log(getNewArr(users));

//? Задача 2: Отримати довжини слів

// const words = ["apple", "banana", "kiwi", "orange"];

// function getWordsLength(arr) {
//   const wordsLength = arr.map((item) => item.length);
//   return wordsLength;
// }

// console.log(getWordsLength(words));

//? Задача 3: Перетворити числа в строки

// const numbers = [10, 20, 30, 40, 50];

// function numbersToString(arr) {
//   const stringsArr = arr.map((item) => String(item));
//   return stringsArr;
// }

// console.log(numbersToString(numbers));

//? Задача 4: Форматування імен

// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Jack", lastName: "White" },
// ];

// function getFullName(arr) {
//   const fullName = arr.map((item) => `${item.firstName} ${item.lastName}`);
//   return fullName;
// }

// console.log(getFullName(people));

//? Задача 5: Додати ПДВ

// const prices = [100, 200, 300, 400];
// const vat = 0.2; // 20%

// function addMwSt(arr) {
//   return arr.map((item) => item * vat + item);
// }

// console.log(addMwSt(prices));

//? Задача 6: Виділити першу букву

// const words = ["Hello", "World", "JavaScript", "Map"];

// function markFirstLetter(arr) {
//   return arr.map((item) => item[0]);
// }

// console.log(markFirstLetter(words));

//? Задача 7: Зміна реєстру

// const words = ["hello", "world", "javascript", "map"];

// function toUpperCaseArr(arr) {
//   return arr.map((item) => item.toUpperCase());
// }

// console.log(toUpperCaseArr(words));

//! Завдання 2: filter

// Створи новий масив, у якому будуть тільки числа більше 20.
// Виведи результат у консоль.

// const numbers = [10, 15, 20, 25, 30, 35];

// console.log(numbers.filter((item) => item >= 20));

// Створи масив, у якому будуть тільки продукти, дорожчі за 700.

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 },
//   { name: "Monitor", price: 300 },
// ];

// function createArr(arr) {
//   const newArr = arr.filter((item) => item.price > 700);
//   return newArr;
// }

// console.log(createArr(products));

//? Завдання 2: Вибір парних чисел.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEvenNumbers(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }

// console.log(filterEvenNumbers(numbers)); // [2, 4, 6, 8, 10]

//? Завдання 2: Фільтрування довгих слів
// Напиши функцію, яка приймає масив слів і повертає слова довжиною більше 5 символів.

// const words = ["apple", "banana", "kiwi", "watermelon", "grape"];

// function filterLongWords(arr) {
//   return arr.filter((item) => item.length > 5);
// }

// console.log(filterLongWords(words)); // ["banana", "watermelon"]

//? Завдання 3: Вибір користувачів за віком

// Опис: Є масив об’єктів, що представляють користувачів. Вибери користувачів, яким більше 18 років.

// function filterAdultUsers(arr) {
//   return arr.filter((item) => item.age >= 18);
// }

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 15 },
//   { name: "David", age: 18 },
// ];
// console.log(filterAdultUsers(users));
// // [{ name: "Bob", age: 22 }, { name: "Charlie", age: 19 }]

//? Завдання 4: Фільтр об'єктів із конкретною властивістю

// Опис: Напиши функцію, яка фільтрує об'єкти за певною властивістю. Наприклад, з масиву товарів поверни лише ті, в яких inStock дорівнює true.

// const products = [
//   { name: "Laptop", inStock: true },
//   { name: "Phone", inStock: false },
//   { name: "Tablet", inStock: true },
// ];

// function filterInStockProducts(arr) {
//   return arr.filter((item) => Boolean(item.inStock) item.isStock);
// }
// console.log(filterInStockProducts(products));
// // [{ name: "Laptop", inStock: true }, { name: "Tablet", inStock: true }]

//? Завдання 5: Вибір чисел, кратних 3

// const numbers = [3, 5, 9, 12, 14, 18, 20];

// function filterMultiplesOfThree(arr) {
//   return arr.filter((item) => item % 3 === 0);
// }

// console.log(filterMultiplesOfThree(numbers)); // [3, 9, 12, 18]

//? Завдання 6: Видалення порожніх рядків

// const strings = ["hello", " ", "", "world", "JavaScript", "   "];

// function removeEmptyStrings(arr) {
//   return arr.filter((item) => item.trim() != "");
// }

// console.log(removeEmptyStrings(strings)); // ["hello", "world", "JavaScript"]

//? Завдання 7: Фільтр чисел в діапазоні
// Опис: Напиши функцію, яка приймає масив чисел і повертає лише ті, що знаходяться в діапазоні від 10 до 20.

// const numbers = [5, 10, 15, 20, 25, 30];

// function filterNumbersInRange(arr, min, max) {
//   return arr.filter((item) => min <= item && item <= max);
// }

// console.log(filterNumbersInRange(numbers, 10, 20)); // [10, 15, 20]

//! Завдання 3: reduce

// Використай reduce, щоб обчислити суму чисел у масиві.

// const numbers = [1, 2, 3, 4, 5];

// function getSum(numbers) {
//   return numbers.reduce((acc, num) => (acc += num), 0);
// }

// console.log(getSum(numbers));

// Використай reduce, щоб обчислити загальну вартість покупок.

// const cart = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 },
// ];

// function getPurchaseSum(cart) {
//   return cart.reduce((acc, product) => (acc += product.price), 0);
// }

// console.log(getPurchaseSum(cart));

//? REDUCE() Задача 1: Сума чисел у масиві

// const numbers = [10, 20, 30, 40];

// console.log(numbers.reduce((acc, num) => (acc += num), 0));

// Знайди суму чисел
// 100

//? Завдання 2: Об'єднання рядків
// Опис: Напиши функцію, яка приймає масив рядків і об'єднує їх в один рядок через кому.

// const words = ["apple", "banana", "cherry"];

// function joinStrings(words) {
//   return words.reduce((acc, word) => (acc += `${word},`), "");
// }

// console.log(joinStrings(words)); // "apple, banana, cherry"

// Задача 2: Об'єднання масивів
// Опис:
// Є масив, що містить вкладені масиви. Використовуй reduce, щоб об'єднати їх в один.

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(arrays.reduce((acc, num) => acc.concat(num), []));

// Об'єднай вкладені масиви в один
// [1, 2, 3, 4, 5, 6]

//? Завдання 3: Пошук максимального числа

// Опис: Використовуй reduce, щоб знайти найбільше число в масиві.

// const numbers = [10, 5, 20, 7, 1000];

// function findMax(numbers) {
//   return numbers.reduce((acc, numb) => (acc < numb ? numb : acc), 0);
// }

// console.log(findMax(numbers)); // 30

// Задача 3: Підрахунок кількості символів у рядках
// Опис:
// Є масив рядків. Підрахуй загальну кількість символів у всіх рядках.

// const words = ["apple", "banana", "cherry"];

// console.log(words.reduce((acc, word) => (acc += word.length), 0));

// Підрахуй кількість символів у всіх рядках
// 17

//? Завдання 4: Групування об'єктів за властивістю

//? Задача 4: Групування за властивістю
// Опис:
// Є масив об'єктів із інформацією про продукти. Використай reduce, щоб згрупувати продукти за їхньою категорією.

// const products = [
//   { name: "Apple", category: "Fruit" },
//   { name: "Carrot", category: "Vegetable" },
//   { name: "Banana", category: "Fruit" },
//   { name: "Spinach", category: "Vegetable" },
// ];

// function createGroupedCategory(products) {
//   return products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }
//     acc[product.category].push(product);
//     return acc;
//   }, {});
// }

// console.log(createGroupedCategory(products));

// Групуй за категорією
// {
//   Fruit: [{ name: "Apple", category: "Fruit" }, { name: "Banana", category: "Fruit" }],
//   Vegetable: [{ name: "Carrot", category: "Vegetable" }, { name: "Spinach", category: "Vegetable" }]
// }

// !!! Опис: Напиши функцію, яка групує об'єкти за певною властивістю. Наприклад, є масив об'єктів із кольорами, потрібно створити об'єкт, де ключами будуть кольори, а значенням — масиви відповідних об'єктів.

// const items = [
//   { name: "Apple", color: "red" },
//   { name: "Banana", color: "yellow" },
//   { name: "Cherry", color: "red" },
//   { name: "Lemon", color: "yellow" },
// ];

// function groupByColor(items) {
//   return items.reduce((acc, item) => {
//     if (!acc[item.color]) {
//       acc[item.color] = [];
//     }
//     acc[item.color].push(item);
//     console.log(acc);
//     return acc;
//   }, {});
// }

// function groupByColor(items) {
//   const grouped = {};
//   items.forEach((item) => {
//     if (!grouped[item.color]) {
//       grouped[item.color] = [];
//     } else {
//       grouped[item.color].push(item);
//     }
//   });
//   return grouped;
// }
// console.log(groupByColor(items));
// {
//   red: [{ name: "Apple", color: "red" }, { name: "Cherry", color: "red" }],
//   yellow: [{ name: "Banana", color: "yellow" }, { name: "Lemon", color: "yellow" }]
// }

//? Завдання 5: Підрахунок кількості елементів
// Опис: Напиши функцію, яка підраховує кількість кожного унікального елемента в масиві.

// const obj = {};

// const item = "Name";

// obj[item] = [];
// obj[item].push("igor");
// obj[item].push("ira");

// console.log(obj);

// const items = [1, 3, 4, 3, 4, 4, 5, 4];

// function countOccurrences(items) {
//   let count = {};
//   items.forEach((item) => {
//     if (count[item]) {
//       count[item] += 1;
//     } else {
//       count[item] = 1;
//     }
//   });
//   return count;
// }

// console.log(countOccurrences(items));

//? МЕТОД 1;
// function countOccurrences(items) {
//   return items.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countOccurrences(items));
// { apple: 3, banana: 2, orange: 1 }

//? МЕТОД 2;
// function countOccurrences(items) {
//   let counts = {};
//   items.forEach((item) => {
//     counts[item] = (counts[item] || 0) + 1;
//   });
//   return counts;
// }

//? МЕТОД 3;

// function countOccurrences(items) {
//   let counts = {};
//   for (let i = 0; i < items.length; i += 1) {
//     const item = items[i];

//     counts[item] = (counts[item] || 0) + 1;
//   }
//   return counts;
// }

//? Задача 5: Підрахунок кількості елементів
// Опис:
// Є масив рядків. Використай reduce, щоб підрахувати кількість кожного унікального елемента.

// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function countFunction(items) {
//   return items.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countFunction(items));

// Підрахуй кількість кожного елемента
// { apple: 3, banana: 2, orange: 1 }

// Задача 6: Найбільше число
// Опис:
// Є масив чисел. Використай reduce, щоб знайти найбільше число.

// const numbers = [10, 45, 22, 78, 3, 90, 56];

// console.log(numbers.reduce((acc, num) => (acc > num ? acc : num), 0));

// Знайди найбільше число

// 90

//! Задача 7: Перетворення масиву об'єктів у об'єкт
// Опис:
// Є масив об'єктів. Використай reduce, щоб перетворити його у об'єкт, де ключами будуть id, а значеннями — об'єкти.

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// function getObjById(users) {
//   return users.reduce((acc, userName) => {
//     if (!acc[userName.id]) {
//       acc[userName.id] = userName;
//     }
//     return acc;
//   }, {});
// }

// console.log(getObjById(users));

// Перетвори у об'єкт за id
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }

//? Задача 8: Створення речення

// Є масив слів. Використай reduce, щоб об'єднати їх в одне речення.

// const words = ["JavaScript", "is", "fun"];

// function concatWords(words) {
//   return words.reduce((acc, word) => `${acc} ${word}`, "");
// }

// console.log(concatWords(words));

// Створи речення
// "JavaScript is fun"

// Задача 9: Обчислення середнього значення
// Опис:
// Є масив чисел. Використай reduce, щоб знайти середнє значення.

// const numbers = [10, 20, 30, 40, 50];

// function getAvarage(numbers) {
//   const length = numbers.length;
//   const sum = numbers.reduce((acc, num) => (acc += num), 0);
//   return sum / length;
// }

// console.log(getAvarage(numbers));

// Знайди середнє значення
// 30

//? Задача 10: Видалення дублікатів
// Опис:
// Є масив чисел із повторюваними значеннями. Використай reduce, щоб видалити дублікатні значення.

// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

// function deleteDuplicate(numbers) {
//   return numbers.reduce((acc, num) => {
//     if (!acc.includes(num)) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);
// }

// console.log(deleteDuplicate(numbers));

// Видали дублікати
// [1, 2, 3, 4, 5, 6, 7]

//? Завдання 4: find і findIndex

// Знайди перше число, яке більше за 25, за допомогою find.
// Знайди індекс цього числа за допомогою findIndex.

// const numbers = [10, 20, 30, 40, 50];

// function findeNumber(numbers) {
//   // return numbers.find((number) => number > 24);
//   return numbers.findIndex((number) => number > 20);
// }

// console.log(findeNumber(numbers));

// Знайди користувача з іменем "Bob".
// Виведи знайденого користувача та його індекс.

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 3, name: "Charlie", age: 35 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 2, name: "Bob", age: 30 },
// ];

// function gerUserName(users) {
//   // return users.find((user) => user.name === "Bob");
//   return users.findIndex((user) => user.name === "Bob");
// }

// console.log(gerUserName(users));

// Задача 1: Знайти перший об'єкт із певною властивістю

// const books = [
//   { title: "The Catcher in the Rye", pages: 277 },
//   { title: "Moby Dick", pages: 635 },
//   { title: "1984", pages: 328 },
//   { title: "The Great Gatsby", pages: 180 },
// ];

// console.log(books.find((book) => book.pages > 300));

// Знайди першу книгу, де pages > 300
// { title: "Moby Dick", pages: 635 }

// Задача 2: Знайти індекс певного елемента

// const numbers = [10, 25, 45, 60, 30, 75];

// console.log(numbers.findIndex((number) => number > 50));

// Знайди індекс першого числа > 50
// 3

// Задача 3: Пошук користувача за іменем

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "John Doe" },
//   { id: 3, name: "Jane Smith" },
// ];

// Знайди користувача з ім'ям "John Doe"
// { id: 2, name: "John Doe" }

// console.log(users.find((user) => user.name === "John Doe"));

// Задача 4: Знайти перший непарний елемент

// const numbers = [2, 4, 6, 8, 9, 10];

// // Знайди перше непарне число
// // 9

// console.log(numbers.find((number) => number % 2 === 1));

// Задача 5: Знайти індекс об'єкта з певним значенням

// const products = [
//   { id: 1, name: "Bread", price: 15 },
//   { id: 2, name: "Milk", price: 10 },
//   { id: 3, name: "Cheese", price: 25 },
//   { id: 4, name: "Butter", price: 18 },
// ];

// console.log(products.findIndex((product) => product.price > 20));

// Знайди індекс продукту з price > 20
// 2

// Задача 6: Пошук за складеним значенням

// const students = [
//   { name: "Alex", scores: { math: 85, english: 78 } },
//   { name: "Sophie", scores: { math: 92, english: 88 } },
//   { name: "Michael", scores: { math: 80, english: 95 } },
// ];

// console.log(students.find((student) => student.scores.math > 90));

// Знайди студента, у якого math > 90
// { name: "Sophie", scores: { math: 92, english: 88 } }

// Задача 7: Знайти відсутній елемент

// const values = [true, true, true, false, true, false];

// console.log(values.findIndex((value) => value === false));

// Знайди індекс першого false
// 3

// Задача 8: Знайти об'єкт за ID

// const tasks = [
//   { id: 1, title: "Do laundry" },
//   { id: 2, title: "Clean room" },
//   { id: 3, title: "Buy groceries" },
//   { id: 4, title: "Study JavaScript" },
// ];

// console.log(tasks.find((task) => task.id === 3));

// Знайди завдання з id === 3
// { id: 3, title: "Buy groceries" }

//? Завдання 6: some і every

// Перевір, чи хоча б одне число більше за 35, використовуючи some.
// Перевір, чи всі числа більше за 5, використовуючи every.
// Є масив об'єктів:

// const numbers = [10, 20, 30, 40, 50];

// console.log(numbers.some((number) => number > 35));
// console.log(numbers.every((number) => number > 5));

// Перевір, чи всі продукти дорожчі за 400.
// Перевір, чи є хоча б один продукт дорожчий за 1000.

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 },
// ];

// console.log(products.every((product) => product.price > 400));
// console.log(products.some((product) => product.price > 1000));

//? Завдання 7: forEach

// За допомогою forEach виведи кожне число в консоль.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((numb) => console.log(numb));

// За допомогою forEach виведи імена всіх користувачів у консоль.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// users.forEach((user) => console.log(user.name));

//? Завдання 8: Комбінування методів
// Використай filter, щоб залишити тільки парні числа.
// Використай map, щоб помножити ці числа на 2.
// Використай reduce, щоб знайти суму отриманих чисел.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function chainingMethods(numbers) {
//   return numbers
//     .filter((numb) => numb % 2 === 0)
//     .map((numb) => numb * 2)
//     .reduce((acc, numb) => (acc += numb), 0);
// }

// console.log(chainingMethods(numbers));
