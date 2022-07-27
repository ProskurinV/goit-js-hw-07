import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImg(galleryItems);

function createImg(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

createImg(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
