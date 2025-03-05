// Slider Tour Detail
var swiperThumb = new Swiper(".imagesThumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiperMain = new Swiper(".imagesMain", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumb,
  },
});

// Cart
const cart = localStorage.getItem("cart");
if(!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}
const formAddToCard = document.querySelector("[form-add-to-card]");
if(formAddToCard) {
  formAddToCard.addEventListener("submit", (event) => {
    event.preventDefault();

    const quantity = parseInt(event.target.elements.quantity.value);
    const tourId = parseInt(formAddToCard.getAttribute("tour-id"));
    
    if(quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      
      const indexExist = cart.findIndex(item => item.tourId == tourId);

      if(indexExist == -1) {
        cart.push({
          tourId: tourId,
          quantity: quantity
        });
      }
      else{
        cart[indexExist].quantity = cart[indexExist].quantity + quantity;
      }
      
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}