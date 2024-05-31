// +++++++++++++++task-01++++++++++++++++++++++++++++++++++++++++++
// const categoriesList = document.getElementById('categories'); // отримання елементу ul#categories
// let categoryCount = 0; // змінна для рахунку категорій
// let subCategoryCounts = []; // масив для зберігання кількостей підкатегорій

// // проходимось по кожен li.item у sписку ul#categories
// for (const item of categoriesList.querySelectorAll('.item')) {
//   const h2Element = item.querySelector('h2'); // отримуємо заголовок категорії
//   let subCategoryCount = item.querySelectorAll('li').length; // кількість елементів li у цій категорії

//   console.log(
//     `Категорія "${h2Element.textContent}" має ${subCategoryCount} підкатегорій`
//   );

//   // оновлення статистики
//   categoryCount++;
//   subCategoryCounts.push(subCategoryCount);
// }

// console.log(`Загалом є ${categoryCount} категорій:`);
// console.table([...subCategoryCounts]); // відображення результатів у форматі таблиці
// ++++++++++++++++++end-task-01+++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++task-02+++++++++++++++++++++++++++++++++++++++++
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector('.gallery');

// const fragment = document.createDocumentFragment();

// images.forEach(image => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');

//   img.src = image.url;
//   img.alt = image.alt;

//   li.appendChild(img);
//   fragment.appendChild(li);
// });

// gallery.appendChild(fragment);
// +++++++++++++++++++++end-task-02+++++++++++++++++++++++++++++++++++++

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector('.gallery');

// const fragment = document.createDocumentFragment();

// images.forEach(image => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');

//   img.src = image.url;
//   img.alt = image.alt;

//   li.appendChild(img);
//   fragment.appendChild(li);
// });

// document.querySelector('.gallery').appendChild(fragment);

// +++++++++++++++++++==task-03+++++++++++++++++++++++++++++++++++++++++

// шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш
// ============ (23 03 24) ЗАДАНИЕ 1 ВЕРСИЯ  ОТ 23 03 24------------------РАБОТАЕТ---------------------------------------
// const categoriesList = document.querySelectorAll('#categories .item');

// console.log(`У списку ${categoriesList.length} категорій:`);

// categoriesList.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryItemsCount = category.querySelectorAll('ul li').length;

//   console.log(`- Категорія: ${categoryName}`);
//   console.log(`- Кількість елементів: ${categoryItemsCount}`);
// });
// ===================== ЗАДАНИЕ 2 ==================================================================================
