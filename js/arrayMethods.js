//!!!!!!!!!!!!!!!!!!!!!!!!! JUNIOR + !!!!

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Pants", category: "Clothing" },
//   { name: "Tablet", category: "Electronics" },
// ];

// function getProducts(products) {
//   return products.reduce((acc, product) => {
//     if (product.category === "Electronics") {
//       acc["Electronics"] = acc["Electronics"] || [];
//       acc["Electronics"].push(product);
//     } else if (product.category === "Clothing") {
//       acc["Clothing"] = acc["Clothing"] || [];
//       acc["Clothing"].push(product);
//     }
//     return acc;
//   }, {});
// }

// console.log(getProducts(products));

// const students = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "A" },
//   { name: "Dave", grade: "C" },
//   { name: "Eve", grade: "B" },
// ];

// function getProducts(students) {
//   return students.reduce((acc, student) => {
//     if (student.grade === "A") {
//       acc["A"] = acc["A"] || [];
//       acc["A"].push(student);
//     } else if (student.grade === "B") {
//       acc["B"] = acc["B"] || [];
//       acc["B"].push(student);
//     }
//     return acc;
//   }, {});
// }

// console.log(getProducts(students));

// const cities = [
//   { name: "New York", country: "USA" },
//   { name: "Los Angeles", country: "USA" },
//   { name: "Berlin", country: "Germany" },
//   { name: "Munich", country: "Germany" },
//   { name: "Tokyo", country: "Japan" },
// ];

// function getGroupe(cities) {
//   return cities.reduce((acc, city) => {
//     if (city.country === "USA") {
//       acc["USA"] = acc["USA"] || [];
//       acc["USA"].push(city);
//     } else if (city.country === "Germany") {
//       acc["Germany"] = acc["Germany"] || [];
//       acc["Germany"].push(city);
//     }
//     return acc;
//   }, {});
// }

// console.log(getGroupe(cities));

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 40 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 29 },
//   { name: "Eve", age: 33 },
// ];

// function getAverageAge(people) {
//   const peopleOver = people.filter((person) => person.age > 30);
//   return (
//     peopleOver.reduce((acc, person) => {
//       acc += person.age;
//       return acc;
//     }, 0) / peopleOver.length
//   );
// }

// console.log(getAverageAge(people));

// const products = [
//   { name: "TV", category: "Electronics", price: 500 },
//   { name: "Headphones", category: "Electronics", price: 80 },
//   { name: "Blender", category: "Home", price: 150 },
//   { name: "Sofa", category: "Furniture", price: 700 },
//   { name: "Table", category: "Furniture", price: 90 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
// ];

// function getNewObj(products) {
//   return products
//     .filter((product) => product.price > 100)
//     .reduce((acc, product) => {
//       if (!acc[product.category]) {
//         acc[product.category] = product.price;
//       } else {
//         acc[product.category] += product.price;
//       }
//       return acc;
//     }, {});
// }

// console.log(getNewObj(products));

const employees = [
  { name: "Alice", department: "IT", salary: 5000 },
  { name: "Bob", department: "HR", salary: 2500 },
  { name: "Charlie", department: "IT", salary: 7000 },
  { name: "David", department: "Marketing", salary: 3200 },
  { name: "Emma", department: "Marketing", salary: 2900 },
  { name: "Frank", department: "IT", salary: 4000 },
];

function getTotalSalary(employees) {
  return employees
    .filter((employee) => employee.salary > 3000)
    .reduce((acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = employee.salary;
      } else {
        acc[employee.department] += employee.salary;
      }
      return acc;
    }, {});
}

console.log(getTotalSalary(employees));

// function getTotalSalary(employees) {
//   return employees
//     .filter((employee) => employee.salary > 3000)
//     .map((employee) => ({
//       name: employee.name,
//       department: employee.department,
//     }));
// }

// console.log(getTotalSalary(employees));

// const products = [
//   { name: "TV", category: "Electronics", price: 500 },
//   { name: "Blender", category: "Home", price: 150 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Sofa", category: "Furniture", price: 700 },
//   { name: "Shirt", category: "Clothing", price: 50 },
// ];

// function groupByCategory(products) {
//   return products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//       acc[product.category].push(product);
//     } else {
//       acc[product.category].push(product);
//     }
//     return acc;
//   }, {});
// }

// console.log(groupByCategory(products));

// const orders = [
//   { id: 1, status: "pending", amount: 100 },
//   { id: 2, status: "shipped", amount: 200 },
//   { id: 3, status: "delivered", amount: 150 },
//   { id: 4, status: "pending", amount: 50 },
//   { id: 5, status: "shipped", amount: 300 },
// ];

// function groupByStatus(orders) {
//   return orders.reduce((acc, order) => {
//     if (!acc[order.status]) {
//       acc[order.status] = acc[order.status] || [];
//       acc[order.status].push(order);
//     } else {
//       acc[order.status].push(order);
//     }
//     return acc;
//   }, {});
// }

// console.log(groupByStatus(orders));

const text = "JavaScript is great and JavaScript is fun";

function countWords(text) {
  return text
    .toLowerCase()
    .split(" ")
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
}

console.log(countWords(text));

// const text = "Hello World";

// function countLetters(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .reduce((acc, char) => {
//       if (char !== " ") {
//         if (acc[char]) {
//           acc[char] += 1;
//         } else {
//           acc[char] = 1;
//         }
//       }
//       return acc;
//     }, {});
// }

// console.log(countLetters(text));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 32 },
//   { name: "Charlie", age: 29 },
//   { name: "Dave", age: 40 },
//   { name: "Eve", age: 23 },
// ];

// function groupUsersByAge(users) {
//   return users.reduce((acc, user) => {
//     if (user.age >= 20 && user.age <= 30) {
//       acc["20-30"] = acc["20-30"] || [];
//       acc["20-30"].push(user);
//     } else if (user.age > 31 && user.age <= 40) {
//       acc["31-40"] = acc["31-40"] || [];
//       acc["31-40"].push(user);
//     }
//     return acc;
//   }, {});
// }

// console.log(groupUsersByAge(users));

// const employees = [
//   { name: "John", salary: 1500 },
//   { name: "Anna", salary: 2500 },
//   { name: "Mike", salary: 3200 },
//   { name: "Laura", salary: 2700 },
//   { name: "Steve", salary: 1800 },
// ];

// function groupEmployeeBySalaries(employees) {
//   return employees.reduce((acc, employee) => {
//     if (employee.salary >= 1000 && employee.salary <= 2000) {
//       acc["1000 - 2000"] = acc["1000 - 2000"] || [];
//       acc["1000 - 2000"].push(employee);
//     } else if (employee.salary >= 2001 && employee.salary <= 3000) {
//       acc["2001 - 3000"] = acc["2001 - 3000"] || [];
//       acc["2001 - 3000"].push(employee);
//     } else if (employee.salary >= 3001) {
//       acc["3001"] = acc["3001"] || [];
//       acc["3001"].push(employee);
//     }
//     return acc;
//   }, {});
// }

// const articles = [
//   { title: "HTML Basics", tags: ["HTML", "CSS", "Web"] },
//   { title: "CSS Flexbox", tags: ["CSS", "Flexbox", "Web"] },
//   { title: "JavaScript Arrays", tags: ["JavaScript", "Arrays", "Web"] },
//   { title: "React Hooks", tags: ["React", "Hooks", "JavaScript"] },
//   { title: "Git Basics", tags: ["Git", "Version Control", "Web"] },
// ];

// function getUniqueTags(articles) {
//   return articles
//     .flatMap((article) => article.tags)
//     .filter((item, index, arr) => arr.indexOf(item) === index);
// }

// console.log(getUniqueTags(articles));

// console.log(groupEmployeeBySalaries(employees));

// const products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Phone", category: "Electronics", price: 800 },
//   { name: "Shirt", category: "Clothing", price: 30 },
//   { name: "Shoes", category: "Clothing", price: 200 },
//   { name: "Fridge", category: "Home", price: 101 },
//   { name: "Washing Machine", category: "Home", price: 300 },
// ];

// function getQuantityOfProducts(products) {
//   return products
//     .filter((product) => product.price > 100)
//     .reduce((acc, product) => {
//       if (acc[product.category]) {
//         acc[product.category] += 1;
//       } else {
//         acc[product.category] = 1;
//       }

//       return acc;
//     }, {});
// }

// function getQuantityOfProducts(products) {
//   return products
//     .filter((product) => product.price > 100)
//     .reduce((acc, product) => {
//       acc[product.category] = (acc[product.category] || 0) + 1;
//       return acc;
//     }, {});
// }

// console.log(getQuantityOfProducts(products));

// const products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Phone", category: "Electronics", price: 800 },
//   { name: "Shirt", category: "Clothing", price: 30 },
//   { name: "Shoes", category: "Clothing", price: 50 },
//   { name: "Fridge", category: "Home", price: 400 },
//   { name: "Washing Machine", category: "Home", price: 300 },
// ];

// function getProducts(products) {
//   const product = products
//     .filter((product) => product.name.includes("Sh"))
//     .reduce((acc, product) => {
//       acc.push(product.name);
//       return acc;
//     }, []);

//   return product;
// }

// console.log(getProducts(products));

// const orders = [
//   {
//     orderId: 1,
//     items: [
//       { name: "Laptop", price: 1200 },
//       { name: "Phone", price: 800 },
//     ],
//   },
//   { orderId: 2, items: [{ name: "Shoes", price: 50 }] },
//   {
//     orderId: 3,
//     items: [
//       { name: "Shirt", price: 30 },
//       { name: "Washing Machine", price: 400 },
//     ],
//   },
// ];

// function getNewObj(orders) {
//   return orders
//     .flatMap((order) => order.items)
//     .map((item) => ({ name: item.name, price: item.price }));
// }

// console.log(getNewObj(orders));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! JUNIOR !!!!!!!!!!!!!!!!!!!!

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // console.log(numbers.filter((num) => num % 2 === 0));
// // console.log(numbers.reduce((acc, num) => (acc += num), 0));
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// console.log(users.map((user) => user.name));
// console.log(users.filter((user) => user.age > 25));
// console.log(users.reduce((acc, user) => (acc += user.age), 0) / users.length);

// const categories = [
//   ["Electronics", "Computers"],
//   ["Clothing", "Shoes"],
//   ["Home", "Kitchen"],
// ];

// console.log(categories.flatMap((category) => category));

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function getNumberOfEl(fruits) {
//   // return fruits.reduce((acc, fruit) => {
//   //   if (!acc[fruit]) {
//   //     acc[fruit] = 1;
//   //   } else {
//   //     acc[fruit] += 1;
//   //   }
//   //   return acc;
//   // }, {});

//   const obj = {};
//   fruits.forEach((fruit) => {
//     obj[fruit] = (obj[fruit] || 0) + 1;
//   });
//   return obj;
// }
// console.log(getNumberOfEl(fruits));

// // const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// function countOccurrences(numbers) {
//   return numbers.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});
// }
// // console.log(countOccurrences(numbers));

// const text = "aabbbcc123!";

// function countCharacters(text) {
//   return text.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(countCharacters(text));

// const items = [
//   { category: "fruit" },
//   { category: "vegetable" },
//   { category: "fruit" },
//   { category: "meat" },
//   { category: "vegetable" },
//   { category: "fruit" },
// ];

// // function countCategories(items) {
// //   return items.reduce((acc, item) => {
// //     acc[item.category] = (acc[item.category] || 0) + 1;
// //     return acc;
// //   }, {});
// // }

// function countCategories(items) {
//   const obj = {};
//   items.forEach((item) => {
//     obj[item.category] = (obj[item.category] || 0) + 1;
//   });
//   return obj;
// }

// console.log(countCategories(items));

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function countEvenAndOdd(numbers) {
//   return numbers.reduce(
//     (acc, num) => {
//       if (num % 2 === 0) {
//         acc.even += 1;
//       } else {
//         acc.odd += 1;
//       }
//       return acc;
//     },
//     { even: 0, odd: 0 }
//   );
// }

// // console.log(countEvenAndOdd(numbers));

// const words = ["hello", "world", "javascript"];

// function countCharactersInArray(words) {
//   return words
//     .join("")
//     .split("")
//     .reduce((acc, char) => {
//       acc[char] = (acc[char] || 0) + 1;
//       return acc;
//     }, {});
// }

// console.log(countCharactersInArray(words));

// // const people = [
// //   { name: "John", age: 25 },
// //   { name: "Sarah", age: 40 },
// //   { name: "Michael", age: 55 },
// //   { name: "Emma", age: 28 },
// //   { name: "James", age: 35 },
// // ];

// // function countAgeGroups(people) {
// //   people.filter;
// // }

// // console.log(countAgeGroups(people));

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((numb) => console.log(numb));

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 800 },
// ];

// console.log(products.toSorted((a, b) => b.price - a.price));

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map((num) => num * num));
// str = "This is an example!";

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseWords(str));

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
