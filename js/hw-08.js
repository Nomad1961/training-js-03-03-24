const galleryContainer = document.querySelector('.gallery');
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  // Add more image objects as needed
];

// Create gallery markup
const galleryMarkup = images.reduce(
  (markup, { preview, original, description }) => {
    return (
      markup +
      `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `
    );
  },
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Event delegation for opening modal
galleryContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageUrl = e.target.dataset.source;
  console.log(largeImageUrl); // Output the large image URL to console
});

// Include basicLightbox library
const script = document.createElement('script');
script.src =
  'https://cdn.jsdelivr.net/npm/basiclightbox/dist/basicLightbox.min.js';
document.body.appendChild(script);
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

// Answer
// html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Gallery</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <ul class="gallery"></ul>

//   <script src="script.js"></script>
// </body>
// </html>

// css
// .gallery {
//   display: flex;
//   flex-wrap: wrap;
//   list-style: none;
// }

// .gallery-item {
//   margin: 10px;
// }

// .gallery-link {
//   text-decoration: none;
// }

// .gallery-image {
//   max-width: 100%;
// }
