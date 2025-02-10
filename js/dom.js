//! 1. Зміна тексту
// Задача: Додай кнопку на сторінку. При кліку на неї текст у <p> змінюється на "Привіт, світ!".

// <p id="text">Це початковий текст</p>
// <button id="changeTextBtn">Змінити текст</button>
// Реалізація:

// Знайди кнопку та <p> через getElementById або querySelector.
// Додай обробник події click до кнопки, щоб змінити текст.

// const text = document.getElementById("text");
// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick(e) {
//   text.textContent = "Привіт, світ!";
// }

//! 2. Додавання елементів у список
// Задача: Додай новий елемент у список при натисканні на кнопку.

// Знайди список (ul) та кнопку.
// Додай обробник події для кнопки, який створює новий <li> і додає його в список.

// const list = document.getElementById("list");
// const btn1 = document.getElementById("addBtn");

// btn1.addEventListener("click", handleClick);

// function handleClick(evt) {
//   const li = document.createElement("li");
//   li.textContent = "Елемент";
//   list.append(li);
// }

//! 3. Видалення елемента
// Задача: При кліку на елемент списку видали цей елемент.
// const list = document.getElementById("list1");

// list.addEventListener("click", handleClick);

// function handleClick(evt) {
//   const elem = evt.target;
//   if (evt.target.classList.contains("li")) {
//     elem.remove();
//   }
//   console.log(elem);
// }

// Отримай всі <li> через querySelectorAll.
// Додай обробник події до кожного елемента списку, щоб при кліку на нього він видалявся.
