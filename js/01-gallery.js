import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const instance = basicLightbox.create('<img src="" width="800" height="600">');

const createItems = () => {
  galleryEl.innerHTML = createImageEl(galleryItems).join('');
};

const createImageEl = (items) => {
  return items.map(({ original, preview, description }) => `
    <li class="gallery__item">
        <a 
            class="gallery__link"
            href="${original}">
                <img class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"
                />
        </a>
    </li>`
  );
};

galleryEl.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery')) return;

  const { source } = e.target.dataset;

  instance.element().querySelector('img').src = source;
  instance.show();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();
    instance.close();
  }
});

createItems();
console.log(galleryItems);
