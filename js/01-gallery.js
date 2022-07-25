import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

createImg(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = createImg(galleryItems);

function createImg(img) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('.gallery__image')) {
    return;
  }
  const galleryImage = event.target;

  const parentImageEl = galleryImage.closest('.gallery__item');

  galleryImage.classList.add('.gallery__link');
}

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);
