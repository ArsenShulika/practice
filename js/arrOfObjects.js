// console.log(addProperty(products));
// Завдання:
// За допомогою map, створити новий масив, у якому кожному продукту додається властивість discountedPrice (ціна зі знижкою 10%).

//? Задача 1: Фільтрація та трансформація
// Дано масив об'єктів із товарами:

// const products = [
//   { id: 1, name: "Laptop", price: 3000, category: "electronics" },
//   { id: 2, name: "Phone", price: 1200, category: "electronics" },
//   { id: 3, name: "Chair", price: 300, category: "furniture" },
//   { id: 4, name: "Table", price: 800, category: "furniture" },
//   { id: 5, name: "Headphones", price: 200, category: "electronics" },
// ];

// function getFilteredProductNames(products, filterValue) {
//   return products
//     .filter((product) => product.price < filterValue)
//     .map((product) => ({
//       name: product.name,
//       price: (product.price * 1.1).toFixed(2),
//     }));
// }

// console.table(getFilteredProductNames(products, 1000));

// Відфільтруй товари з категорії "electronics", які коштують більше ніж 1000.
// Для кожного такого товару поверни об'єкт, де є лише name та price, збільшений на 10%.
// Поверни результат у вигляді нового масиву.

//? Задача 2: Сортування та обчислення
// Дано масив користувачів:

// const users = [
//   { id: 1, name: "Alice", age: 25, score: 88 },
//   { id: 2, name: "Bob", age: 30, score: 72 },
//   { id: 3, name: "Charlie", age: 22, score: 95 },
//   { id: 4, name: "David", age: 28, score: 64 },
//   { id: 5, name: "Eve", age: 35, score: 80 },
// ];

// function getSortedArrAndAvgValue(users) {
//   if (!users.length) {
//     return { sortedUsers: [], average: 0 };
//   }
//   const average =
//     users.reduce((acc, user) => (acc += user.score), 0) / users.length;

//   const sortedUsers = users.toSorted((a, b) => a.age - b.age);
//   return { sortedUsers, average };
// }

// console.log(getSortedArrAndAvgValue(users));

// Відсортуй користувачів за їхнім віком у порядку зростання.
// Знайди середній бал (score) усіх користувачів.
// Поверни відсортований масив і середній бал.

//? Задача 3: Пошук і групування
// Дано масив книг:

// const books = [
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Fiction",
//     year: 1951,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction",
//     year: 1960,
//   },
//   {
//     title: "Sapiens",
//     author: "Yuval Noah Harari",
//     genre: "Non-fiction",
//     year: 2011,
//   },
//   {
//     title: "Educated",
//     author: "Tara Westover",
//     genre: "Non-fiction",
//     year: 2018,
//   },
//   { title: "1984", author: "George Orwell", genre: "Fiction", year: 1949 },
// ];

// function getBooks(books) {
//   const filteredBooks = books.filter((book) => book.year > 2000);
//   const newObj = {};
//   books.forEach((book) => {
//     if (!newObj[book.genre]) {
//       newObj[book.genre] = [];
//       newObj[book.genre].push(book.title);
//     } else {
//       newObj[book.genre].push(book.title);
//     }
//   });
//   return { newObj, filteredBooks };
// }

// console.log(getBooks(books));

// Знайди всі книги, написані після 2000 року.
// Створи новий об'єкт, де ключі — це жанри, а значення — масиви назв книг, що належать до цих жанрів.
// Поверни цей об'єкт.

// function getBooks(books) {
//   const filteredBooks = books.filter((book) => book.year > 2000);
//   const grouped = books.reduce((acc, book) => {
//     if (!acc[book.genre]) {
//       acc[book.genre] = [];
//       acc[book.genre].push(book.title);
//     } else {
//       acc[book.genre].push(book.title);
//     }
//     return acc;
//   }, {});
//   return { filteredBooks, grouped };
// }

// console.log(getBooks(books));

// Знайди всі книги, написані після 2000 року.
// Створи новий об'єкт, де ключі — це жанри, а значення — масиви назв книг, що належать до цих жанрів.
// Поверни цей об'єкт.

//? Задача 4: Зведення даних
// Дано масив замовлень:

// const orders = [
//   { id: 1, customer: "Alice", items: 4, total: 400 },
//   { id: 2, customer: "Bob", items: 2, total: 150 },
//   { id: 3, customer: "Alice", items: 1, total: 50 },
//   { id: 4, customer: "Charlie", items: 5, total: 500 },
//   { id: 5, customer: "Bob", items: 3, total: 300 },
// ];

// function groupedOrders(orders) {
//   const grouped = orders.reduce((acc, order) => {
//     if (!acc[order.customer]) {
//       acc[order.customer] = { customer: order.customer, items: 0, total: 0 };
//     }
//     acc[order.customer].items += order.items;
//     acc[order.customer].total += order.total;
//     return acc;
//   }, {});
//   return Object.values(grouped);
// }

// console.log(groupedOrders(orders));

// Згрупуй замовлення за клієнтами.
// Для кожного клієнта порахуй загальну кількість замовлених товарів (items) і загальну суму замовлень (total).
// Поверни результат у вигляді масиву об'єктів:

//? Задача 5: Комплексне завдання
// Дано масив студентів:

// const students = [
//   { id: 1, name: "Alice", marks: [85, 92, 78], city: "New York" },
//   { id: 2, name: "Bob", marks: [75, 80, 68], city: "Chicago" },
//   { id: 3, name: "Charlie", marks: [95, 90, 85], city: "New York" },
//   { id: 4, name: "David", marks: [60, 65, 70], city: "Chicago" },
// ];

// function getFilteredArr(students) {
//   const studentAverageScore = students
//     .map((student) => {
//       const average =
//         student.marks.reduce((acc, mark) => acc + mark, 0) /
//         student.marks.length;
//       return { ...student, average };
//     })
//     .filter((student) => student.city === "New York" && student.average > 80)
//     .map((student) => student.name);
//   return studentAverageScore;
// }

// console.log(getFilteredArr(students));

// Для кожного студента обчисли середній бал (average).
// Відфільтруй студентів із міста "New York", чий середній бал більше 80.
// Поверни масив імен студентів, що залишились після фільтрації.

//? Задача 1: Вибір популярних товарів

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1500, rating: 4.5 },
//   { id: 2, name: "Phone", category: "Electronics", price: 800, rating: 4.7 },
//   { id: 3, name: "T-shirt", category: "Clothing", price: 30, rating: 3.9 },
//   {
//     id: 4,
//     name: "Headphones",
//     category: "Electronics",
//     price: 200,
//     rating: 4.7,
//   },
//   { id: 5, name: "Shoes", category: "Clothing", price: 100, rating: 4.8 },
// ];

// function getProducts(products) {
//   const filteredProducts = products.filter(
//     (product) => product.rating > 4.5 && product.category === "Electronics"
//   );

//   const productDetails = filteredProducts.reduce(
//     (acc, product) => {
//       acc.productNames.push(product.name);
//       acc.productPrices.push(product.price);
//       acc.totalPrice += product.price;
//       return acc;
//     },
//     { productNames: [], productPrices: [], totalPrice: 0 }
//   );

//   return productDetails;
// }

// console.log(getProducts(products));

// Фільтруй товари за категорією "Electronics" з рейтингом понад 4.5.
// Трансформуй їх у масив назв товарів.
// Порахуй загальну суму цих товарів.

//? Задача 2: Аналіз транзакцій клієнта
//? Дано масив транзакцій:

const transactions = [
  { id: 1, user: "Alice", type: "deposit", amount: 1000 },
  { id: 2, user: "Bob", type: "withdrawal", amount: 500 },
  { id: 3, user: "Alice", type: "withdrawal", amount: 200 },
  { id: 4, user: "Alice", type: "deposit", amount: 500 },
  { id: 5, user: "Bob", type: "deposit", amount: 1500 },
];

function getResult(transactions) {
  return (grouped = transactions.reduce((acc, transaction) => {
    const { user, type, amount } = transaction;
    if (!acc[user]) {
      acc[user] = {
        user,
        totalTransactions: 0,
        totalDeposit: 0,
        totalWithdrawals: 0,
      };
    }
  }));
}

console.log(getResult(transactions));

// Групуй транзакції за користувачами.
// Для кожного користувача порахуй:
// Загальну кількість транзакцій.
// Суму "deposit".
// Суму "withdrawal".

// Поверни результат у вигляді масиву:

// [
//   { user: "Alice", totalTransactions: 3, totalDeposits: 1500, totalWithdrawals: 200 },
//   { user: "Bob", totalTransactions: 2, totalDeposits: 1500, totalWithdrawals: 500 },
// ];

//? Задача 3: Об'єднання категорій
// Дано масив об'єктів з категоріями:

const categories = [
  { name: "Electronics", products: ["Laptop", "Phone", "Headphones"] },
  { name: "Clothing", products: ["T-shirt", "Shoes", "Jacket"] },
  { name: "Books", products: ["Fiction", "Non-fiction", "Fantasy"] },
];

// Створи масив усіх назв товарів, незалежно від категорії, у вигляді одного плоского масиву.
// Використай flatMap.
// Відфільтруй товари, назва яких довша за 5 символів.
// Результат має виглядати так:

// ["Laptop", "Headphones", "T-shirt", "Shoes", "Jacket", "Fiction", "Non-fiction", "Fantasy"]

//? Задача 4: Рейтинг учнів
// Дано масив учнів з їхніми оцінками:

const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [70, 75, 68] },
  { name: "Charlie", scores: [95, 100, 98] },
  { name: "David", scores: [50, 60, 55] },
];

// Розрахуй середній бал для кожного учня.
// Відфільтруй учнів, чий середній бал вище 80.
// Трансформуй їх у масив об'єктів з полями name і averageScore.
// Результат:

// [
//   { name: "Alice", averageScore: 84.33 },
//   { name: "Charlie", averageScore: 97.67 },
// ];

//? Задача 5: Оцінка відгуків
// У тебе є масив відгуків:

const reviews = [
  { id: 1, user: "Alice", comment: "Great product!", rating: 5 },
  { id: 2, user: "Bob", comment: "Not bad", rating: 3 },
  { id: 3, user: "Charlie", comment: "Terrible experience!", rating: 1 },
  { id: 4, user: "Alice", comment: "Fast shipping", rating: 4 },
  { id: 5, user: "Bob", comment: "Amazing quality", rating: 5 },
];

// Відфільтруй усі відгуки з рейтингом нижче 4.
// Групуй відгуки за користувачами.
// Для кожного користувача порахуй середній рейтинг їхніх відгуків.
// Результат:

// [
//   { user: "Alice", averageRating: 4.5 },
//   { user: "Bob", averageRating: 4 },
// ];
