// pixabay-api.js
const API_KEY = 'YOUR_PIXABAY_API_KEY';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page, perPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// render-functions.js
export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    gallery.appendChild(imgElement);
  });
}

// main.js
import { fetchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';

let currentPage = 1;
const perPage = 15;
let searchQuery = '';

const loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  const images = await fetchImages(searchQuery, currentPage, perPage);
  renderImages(images);
});

// Additional logic to handle search input and initial image loading can be added here
