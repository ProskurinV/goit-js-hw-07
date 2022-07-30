import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImg(galleryItems);

function createImg(img) {
  return img
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

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src =${event.target.dataset.source}>`,

    {
      onShow: instance => {
        console.log('add Listener');
        window.addEventListener('keydown', handleEscape);
      },
      onClose: instance => {
        console.log('remove Listener');
        window.removeEventListener('keydown', handleEscape);
      },
    }
  );

  function handleEscape(event) {
    if (event.key === 'Escape') {
      console.log('esc');
      instance.close();
      return;
    }
  }

  instance.show();
}

createImg(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);
