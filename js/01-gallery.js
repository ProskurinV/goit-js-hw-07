import { galleryItems } from './gallery-items.js';
// Change code below this line

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

  const isImgEl = img;

  if (!isImgEl) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src =${event.target.dataset.source}>`,

    {
      onShow: instance => {
        galleryContainer.addEventListener('keydown', event => {
          if (event.code === 'Escape') {
            instance.close();
          }
        });
      },
      // onClose: instance => {
      //   galleryContainer.removeEventListener('keydown', event => {
      //     if (event.code === 'Escape') {
      //       instance.show();
      //     }
      //   });
      // },
    }
  );
  instance.show();
}

createImg(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);
