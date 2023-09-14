import { galleryItems } from "./gallery-items.js";


// Change code below this line
const gallery = document.querySelector(".gallery");

const items = [];

galleryItems.forEach((element) => {
  const item = document.createElement("div");
  item.className = "gallery__item";
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.href = element.original;
  const image = document.createElement("img");
  image.className = "gallery__image";
  image.src = element.preview;
  image.setAttribute("data-source", element.original);
  image.alt = element.description;

  item.append(link);
  link.append(image);
  items.push(item);
});
gallery.append(...items);
gallery.addEventListener("click", select);
function select(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const image = event.target.dataset.source;
  const imageAlt = event.target.alt;

  const instance = basicLightbox.create(`
        <img src="${image}" width="800" height="600" alt="${imageAlt}">
     `);

  instance.show();
}
console.log(galleryItems);