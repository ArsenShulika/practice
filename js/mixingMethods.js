//!!! Завдання 1: Перетворення і фільтрація

// const data = ["123.45", "abc", "42", "10.5", "NaN", "Infinity", "-50"];

// Витягни з масиву лише ті елементи, які можна перетворити на числа (використай filter() і isNaN()).
// Перетвори всі залишені елементи на числа (використай map() і parseFloat()).
// Округли всі числа до цілого за допомогою Math.round().
// [123, 42, 11, -50];

// function getIntNumbers(data) {
//   const newArr = data
//     .filter((numb) => !isNaN(numb) && isFinite(numb))
//     .map((numb) => Math.round(parseFloat(numb)));
//   return newArr;
// }

// console.log(getIntNumbers(data));

//? Завдання 2: Обробка дат

// const dateStr = "2025-02-04";

// function getNewData(dateStr) {
//   console.log(
//     dateStr
//       .split("-")
//       .map((item) => parseInt(item, 10))
//       .join(".")
//   );
//   console.log(dateStr.replaceAll("-", "."));
// }

// getNewData(dateStr);
// Розбий рядок на рік, місяць і день за допомогою split().
// Перетвори кожен елемент у число (використай map() і parseInt()).
// Створи новий формат дати у вигляді 04.02.2025 за допомогою join().

//? Завдання 3: Пошук і округлення

// const numbers = [10.3, 25.7, 18.4, 7.8, 50.6, 42.3];

// Знайди перше число, яке більше за 20 (використай find()).
// Округли знайдене число до найближчого цілого (використай Math.round()).
// Перетвори це число в рядок у двійковій системі (використай toString(2)).

// function getNumber(numbers) {
//   const getNumb = numbers.find((number) => number > 20);
//   return Math.round(getNumb).toString(2);
// }

// console.log(getNumber(numbers));

//? Завдання 4: Аналіз тексту

// const text = "JavaScript is amazing! It is the best programming language.";

// Зроби всі символи у тексті маленькими (використай toLowerCase()).
// Порахуй кількість слів у тексті (використай split() і length).
// Заміні всі слова "is" на "IS" (використай replaceAll()).

// function combiningMethods(text) {
//   const replace = text.replaceAll("is", "IS");
//   const str = text.toLowerCase().split(" ").length;
//   return replace;
// }

// console.log(combiningMethods(text));

//? Завдання 5: Генерація випадкових чисел

// Генерує масив із 10 випадкових цілих чисел у діапазоні від 1 до 100 (використай Math.random() і Math.floor()).
// Відсортовує цей масив у порядку зростання (використай sort()).
// Знаходить максимальне і мінімальне значення (використай Math.max() і Math.min() з оператором розпакування ...).

// function randomNumber(min, max) {
//   let newArr = [];
//   for (let i = 0; i < 10; i += 1) {
//     const numb = Math.floor(Math.random() * (max - min) + min);
//     newArr.push(numb);
//   }
//   const sortedArr = newArr.toSorted((a, b) => a - b);
//   const minN = Math.min(...sortedArr);
//   const maxN = Math.max(...sortedArr);
//   return maxN;
// }

// console.log(randomNumber(4, 100));

// Завдання 6: Перетворення масивів

// const strings = ["10.5px", "20px", "30.7px", "hello", "50px"];

// function getNumbers(strings) {
//   const arr = strings.filter((value) => !isNaN(parseFloat(value)));
//   console.log(arr);
//   const arrNumbers = arr.map((item) => parseFloat(item));
//   const sum = arrNumbers.reduce((acc, num) => (acc += num), 0);
//   return sum.toFixed(2);
// }

// console.log(getNumbers(strings));

// Видали всі елементи, які не містять чисел (використай filter() і parseFloat()).
// Перетвори залишені елементи на числа (використай map() і parseFloat()).
// Знайди суму цих чисел (використай reduce()).
// Округли результат до 2 знаків після коми (використай toFixed()).

//? Завдання 7: Статистика по масиву

// const numbers = [12.5, 15, 8.3, 10, 25, 18];

// function roundNumbers(numbers) {
//   const roundNum = numbers.map((numb) => Math.floor(numb));
//   console.log(roundNum);
//   const length = roundNum.length;
//   console.log(length);
//   const avarage = roundNum.reduce((acc, num) => (acc += num), 0) / length;
//   console.log(avarage);
//   return avarage;
// }

// console.log(roundNumbers(numbers));

// Округли всі числа вниз (використай Math.floor()).
// Знайди середнє арифметичне (сума чисел поділена на їх кількість).
// Перевір, чи всі числа є парними (використай every()).

//? Завдання 8: Перетворення і сортування тексту

// const names = ["alice", "dAVID", "Charlie", "BOB"];

// function firstLetterToUpperCase(names) {
//   const firstLetter = names.map(
//     (userName) =>
//       userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
//   );
//   const sortedArr = firstLetter
//     .toSorted((a, b) => a.localeCompare(b))
//     .join(",");
//   console.log(sortedArr);
// }

// console.log(firstLetterToUpperCase(names));

// const str = "ghgslDDf";

// console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
// Перетвори кожне ім'я так, щоб перша літера була великою, а решта маленькими (використай map() і toUpperCase()/toLowerCase()).
// Відсортуй імена в алфавітному порядку (використай sort()).
// Об'єднай імена в один рядок через кому (використай join()).

//? Завдання 9: Робота з валютою

// const prices = [1234.567, 45.789, 3.1, 67.99, 120];

// function currency(prices) {
//   console.log(prices.map((price) => `$${price.toFixed(2)}`).join(", "));
// }

// console.log(currency(prices));

// Перетвори кожне число у формат валюти з 2 знаками після коми (використай toFixed()).
// Додай до кожного числа символ валюти $ (використай map()).
// Збери числа у рядок через кому (використай join()).

//? Завдання 10: Функція калькулятор

const expression = "10 + 20 - 5 * 2 / 2";

// function divideString(expression) {
//   const arr = expression.split(" ");
//   console.log(arr);
//   const getResult =
//     Number(arr[0]) + Number(arr[2]) - (arr[4] * arr[6]) / arr[8];
//   return getResult;
// }

// console.log(divideString(expression));

function calculate(expression) {
  const arr = expression.split(" "); // Розділяємо вираз на масив

  // Спочатку обробляємо множення та ділення
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      arr.splice(i - 1, 3, Number(arr[i - 1]) * Number(arr[i + 1]));
      i--; // Повертаємось на 1 крок назад, щоб перевірити новий результат
    } else if (arr[i] === "/") {
      arr.splice(i - 1, 3, Number(arr[i - 1]) / Number(arr[i + 1]));
      i--; // Повертаємось на 1 крок назад
    }
  }

  // Тепер обробляємо додавання та віднімання
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      arr.splice(i - 1, 3, Number(arr[i - 1]) + Number(arr[i + 1]));
      i--;
    } else if (arr[i] === "-") {
      arr.splice(i - 1, 3, Number(arr[i - 1]) - Number(arr[i + 1]));
      i--;
    }
  }

  return arr[0]; // Повертаємо результат
}

console.log(calculate(expression)); // Результат: 25

// Розбий рядок на масив чисел і операторів (використай split()).
// Виконай усі математичні операції у правильному порядку (додай, відніми, помнож і поділи числа).
// Виведи результат обчислення.
