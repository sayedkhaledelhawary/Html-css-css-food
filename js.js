let search = document.querySelector('.search-from');
document.querySelector("#search-btn").onclick =() => {
    search.classList.toggle("active");
    menu.classList.remove("active");
    user.classList.remove("active");
    shopping.classList.remove("active");
}


let shopping = document.querySelector('.shopping-cart');
document.querySelector("#cart-btn").onclick =() => {
    shopping.classList.toggle("active");
    menu.classList.remove("active");
    user.classList.remove("active");
    search.classList.remove("active");
}


let user = document.querySelector('.login-frome');
document.querySelector("#user-btn").onclick =() => {
    user.classList.toggle("active");
    menu.classList.remove("active");
    shopping.classList.remove("active");
    search.classList.remove("active");
}

let menu = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick =() => {
    menu.classList.toggle("active");
    user.classList.remove("active");
    shopping.classList.remove("active");
    search.classList.remove("active");
}



window.onscroll =() => {
    menu.classList.remove("active");
    user.classList.remove("active");
    shopping.classList.remove("active");
    search.classList.remove("active");

}





var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });







  

  var swiper = new Swiper(".reviw-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });