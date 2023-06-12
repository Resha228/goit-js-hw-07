import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const createItems = () => {
  galleryEl.innerHTML = createImageEl(galleryItems).join('');
};

const createImageEl = (items) => {
  return items.map(({ original, preview, description }) => `
    <li class="gallery__item">
        <a 
            class="gallery__link"
            href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}"
                />
        </a>
    </li>`
  );
};

createItems();

const lightbox = new SimpleLightbox(`.gallery a`, { 
    captionsData: "alt",  
    captionType: "alt",
    captionDelay: 250,
});
console.log(galleryItems);
