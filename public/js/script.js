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

//Show alert
const alertAddCartSuccess = () => {
  const showAlert = document.querySelector("[show-alert]")
  if (showAlert) {
    showAlert.classList.remove("alert-hidden");
    showAlert.classList.remove("d-none");
    const time = parseInt(showAlert.getAttribute("data-time"));
    const closeAlert = document.querySelector("[close-alert]");
    closeAlert.addEventListener("click", () => {
      showAlert.classList.add("alert-hidden");
    });
    setTimeout(() => {
      showAlert.classList.add("alert-hidden");
    }, time);
  }
}

// Mini Cart 
const showMiniCart = () => {
  const miniCart = document.querySelector("[mini-cart]");
  if (miniCart) {
    const cartStr = JSON.parse(localStorage.getItem("cart"));
    if (cartStr) {
      const totalQuantity = cartStr.reduce((sum, item) => sum + item.quantity, 0);
      miniCart.innerHTML = totalQuantity;
    }
  }
}

showMiniCart();

// Cart
const cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}
const formAddToCard = document.querySelector("[form-add-to-card]");
if (formAddToCard) {
  formAddToCard.addEventListener("submit", (event) => {
    event.preventDefault();

    const quantity = parseInt(event.target.elements.quantity.value);
    const tourId = parseInt(formAddToCard.getAttribute("tour-id"));

    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));

      const indexExist = cart.findIndex(item => item.tourId == tourId);

      if (indexExist == -1) {
        cart.push({
          tourId: tourId,
          quantity: quantity
        });
      } else {
        cart[indexExist].quantity = cart[indexExist].quantity + quantity;
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alertAddCartSuccess();
      showMiniCart();
    }
  });
}