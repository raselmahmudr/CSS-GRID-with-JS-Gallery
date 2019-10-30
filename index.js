let gallery = document.querySelector(".gallery");
let galleryItems = document.querySelectorAll(".gallery-item");

//! Get Grid Parent Element Style Property......... ( like grid-gap = 10 )
function getCssPropertyValue(element, style) {
  let allStyles = window.getComputedStyle(element);
  let getStyle = allStyles.getPropertyValue(style);
  return parseInt(getStyle);
}

//! Get Image height ( as a individual image size )
function getHeight(item) {
  return item.querySelector("img").getBoundingClientRect().height;
}

//! when Resize browser window....... (  for responsive)
let resizeAll = function() {  
  let gridAutoRows = getCssPropertyValue(gallery, "grid-auto-rows");
  let gap = getCssPropertyValue(gallery, "grid-row-gap");

  gallery.querySelectorAll(".gallery-item").forEach(item => {
    item.style.gridRowEnd = `span ${Math.ceil( (getHeight(item) + gap) / (gridAutoRows + gap))} `;
  });
};

gallery.querySelectorAll("img").forEach(img => {
  img.addEventListener("load", function() {

    let gridAutoRows = getCssPropertyValue(gallery, "grid-auto-rows");
    
    let gap = getCssPropertyValue(gallery, "grid-row-gap");
    console.log(gap)
    ;
    let galleryItem = img.parentElement;
    galleryItem.style.gridRowEnd = `span ${Math.ceil( (getHeight(galleryItem) + gap) / (gridAutoRows + gap))} `;
  });
});

window.addEventListener("resize", resizeAll);

