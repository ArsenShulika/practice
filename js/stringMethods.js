// ? Завдання 1: toUpperCase() і toLowerCase()

// ?     Перетвори всі символи в рядку у верхній регістр.
// ?     Перетвори всі символи в рядку у нижній регістр.

// const text = "Hello World!";

// function toUpperRegister(str) {
//   const newStr = str.toUpperCase();
//   return newStr;
// }

// console.log(toUpperCase(text));

// function toLowerCase(str) {
//   const newStr = str.toLowerCase();
//   return newStr;
// }

// console.log(toLowerCase(text));

// ? Завдання 2: trim(), trimStart() і trimEnd()

// ?    Видали всі зайві пробіли з початку і кінця рядка.
// ?    Видали тільки пробіли з початку.
// ?    Видали тільки пробіли з кінця.

// const input = "   JavaScript is awesome!   ";

// function getTrimmedValue(str) {
//   const trimmedValues = str.trim();
//   const trimStartValues = str.trimStart();
//   const trimEndValues = str.trimEnd();
//   return (
//     console.log(trimmedValues.length),
//     console.log(trimStartValues.length),
//     console.log(trimEndValues.length)
//   );
// }

// console.log(getTrimmedValue(input));

// ? Завдання 3: split() і join()

// ?Розбий цей рядок на масив слів.
// ?Перетвори масив слів назад у рядок, розділивши їх символом -.

// const sentence = "JavaScript is fun";

// function modifyStr(str) {
//   return str.split(" ").join("-");
// }

// console.log(modifyStr(sentence));

// ?Розбий цей рядок на окремі частини (рік, місяць, день) і виведи масив.
// ?Збери назад рядок у форматі 04.02.2025.

// const date = "2025-02-04";

// function modifyDate(str) {
//   return str.split("-").join(".");
// }

// console.log(modifyDate(date));

// ? Завдання 4: replace() і replaceAll()

// ?   Замініть перше слово "apples" на "bananas".
// ?   Замініть всі слова "apples" на "bananas".

// const text = "I like apples. Apples are my favorite fruit.";

// function replaceWord(str) {
//   return str.toLowerCase().replace("apples", "bananas");
// }

// console.log(replaceWord(text));

// ?Замініть домен example.com на gmail.com.

// const email = "john.doe@example.com";

// function replaceWord(str) {
//   return str.replace("example.com", "gmail.com");
// }

// console.log(replaceWord(email));

// ? Завдання 5: includes(), startsWith() і endsWith().

// ?   Перевір, чи містить рядок підрядок example.
// ?   Перевір, чи починається рядок з https.
// ?   Перевір, чи закінчується рядок на .com.

// const url = "https://example.com";

// function checkIncludeWord(str) {
//   const isTrue = str.includes("example");
//   const startsWith = str.startsWith("https");
//   const endsWith = str.endsWith(".com");
//   return endsWith;
// }

// console.log(checkIncludeWord(url));

// ? Перевір, чи рядок містить слово "JavaScript".
// ? Перевір, чи рядок починається зі слова "Welcome".

// const message = "Welcome to JavaScript!";

// function includesWord(str) {
//   const isTrue = str.includes("JavaScript");
//   const startsWith = str.startsWith("Welcome");
//   return startsWith;
// }

// console.log(includesWord(message));

// ? Завдання 6: substring(), slice() і substr()

//?  Витягни слово "JavaScript" за допомогою substring.
//?  Витягни слово "amazing" за допомогою slice.
//?  Витягни слово "is" за допомогою substr.

// const text = "JavaScript is amazing!";

// function extractOfWord(str) {
//   const substrMethode = str.substring(0, 10);
//   const sliceMethode = str.slice(14, 21);
//   const substrSecond = str.substring(11, 13);
//   return substrSecond;
// }

// console.log(extractOfWord(text));

//? Завдання 7: indexOf() і lastIndexOf()

//? Знайди першу позицію символу o в рядку.
//? Знайди останню позицію символу o в рядку.
//? Знайди позицію слова "fox" у рядку.

// const sentence = "The quick brown fox jumps over the lazy dog.";

// function findIndex(str) {
//   const index = str.indexOf("o");
//   const lastIndex = str.lastIndexOf("o");
//   const indexInArray = str.split(" ").indexOf("fox");
//   return indexInArray;
// }

// console.log(findIndex(sentence));

//? Завдання 8: padStart() і padEnd()

//? Додай до рядка символи 0, щоб довжина рядка стала рівною 5 ("00042").
//? Додай до рядка символи * з кінця, щоб довжина рядка стала рівною 7 ("42*****").

// const number = "42";

// function addSymbol(str) {
//   const padStart = str.padStart(5, "0");
//   const padEnd = str.padEnd(7, "*");

//   return padEnd;
// }

// console.log(addSymbol(number));

//? Завдання 9: charAt() і charCodeAt()

//? Виведи символ, який знаходиться на 4-й позиції (індекс 3).
//? Виведи ASCII-код символу на 1-й позиції (індекс 0).

// const word = "JavaScript";

// function getChar(str) {
//   const getCharAt = str.charAt(3);
//   const gerASIIcode = str.charCodeAt(1);
//   return gerASIIcode;
// }

// console.log(getChar(word));

//? Завдання 10: Комбінування методів

//? Видали пробіли на початку і в кінці.
//? Зроби так, щоб перша літера імені та прізвища була великою, а решта літер — маленькими ("John Doe").

// const fullName = "   john doe   ";

// function changeFirstLetterCase(str) {
//   return str
//     .trim()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(changeFirstLetterCase(fullName));

//? Перетвори рядок у масив.
//? Зроби так, щоб кожне слово починалося з великої літери (["Html", "Css", "Javascript", "React"]).
//? З'єднай слова назад у рядок через кому.

// const keywords = "html,css,javascript,react";

// function firstLetterCase(str) {
//   return str
//     .trim()
//     .split(",")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(", ");
// }

// console.log(firstLetterCase(keywords));
