// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Приложение для поиска изображений</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <form id="search-form">
//         <input type="text" id="search-input" placeholder="Введите поисковый запрос">
//         <button type="submit">Поиск</button>
//     </form>
//     <div class="loader"></div>
//     <div id="gallery" class="gallery"></div>
//     <script type="module" src="main.js"></script>
// </body>
// </html>

// // pixabay-api.js
// const apiKey = 'YOUR_API_KEY';

// export async function fetchImages(searchQuery) {
//     const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Не удалось загрузить изображения');
//         }
//         const data = await response.json();
//         return data.hits;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

// export function renderImages(images) {
//     const galleryContainer = document.getElementById('gallery');
//     galleryContainer.innerHTML = '';

//     images.forEach(image => {
//         const imageElement = document.createElement('img');
//         imageElement.src = image.webformatURL; // Changed to webformatURL
//         imageElement.alt = image.tags; // Changed to tags

//         galleryContainer.appendChild(imageElement);
//     });
// }

// export function clearGallery() {
//     const galleryContainer = document.getElementById('gallery');
//     galleryContainer.innerHTML = '';
// }

// // main.js
// import iziToast from "izitoast";
// import SimpleLightbox from "simplelightbox";
// import { fetchImages } from "./pixabay-api.js";
// import { renderImages, clearGallery } from "./render-functions.js";

// const searchForm = document.querySelector('#search-form');
// const loader = document.querySelector('.loader');

// searchForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const searchInput = document.querySelector('#search-input');
//     const searchQuery = searchInput.value.trim();

//     if (searchQuery === '') {
//         iziToast.error({
//             title: 'Ошибка',
//             message: 'Пожалуйста, введите поисковый запрос',
//         });
//         return;
//     }

//     clearGallery();
//     loader.style.display = 'block';

//     try {
//         const images = await fetchImages(searchQuery);
//         if (images.length === 0) {
//             iziToast.info({
//                 title: 'Информация',
//                 message: 'Извините, изображения по вашему запросу не найдены. Пожалуйста, попробуйте снова!',
//             });
//         } else {
//             renderImages(images);
//             const lightbox = new SimpleLightbox('.gallery a');
//             lightbox.refresh();
//         }
//     } catch (error) {
//         console.error(error);
//         iziToast.error({
//             title: 'Ошибка',
//             message: 'Не удалось загрузить изображения. Пожалуйста, попробуйте снова.',
//         });
//     } finally {
//         loader.style.display = 'none';
//     }
// });

// /* style.css */
// .loader {
//     width: 48px;
//     height: 48px;
//     border: 3px solid #FFF;
//     border-radius: 50%;
//     display: inline-block;
//     position: relative;
//     box-sizing: border-box;
//     animation: rotation 1s linear infinite;
// }

// .loader::after {
//     content: '';
//     box-sizing: border-box;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 56px;
//     height: 56px;
//     border-radius: 50%;
//     border: 3px solid;
//     border-color: #FF3D00 transparent;
// }

// @keyframes rotation {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
// }
