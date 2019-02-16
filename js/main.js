"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var search = document.querySelector('.search'),
      searchBtn = document.getElementById('searchBtn'),
      searchBox = document.querySelector('.search_box'),
      cartBtn = document.getElementById('cartBtn'),
      cartBox = document.querySelector('.cart'),
      cartIcon = document.querySelector('.cls-1'),
      cartClose = document.getElementById('cartClose'),
      catalog = document.querySelector('.catalog'); // minus = document.querySelectorAll('#minus'),
  // plus = document.querySelectorAll('#plus'),
  // quantity = document.querySelectorAll('.cart_item_amount_number');

  searchBtn.onclick = function (event) {
    if (searchBox.style.width === '' && searchBox.style.padding === '' || searchBox.style.width === '0px' && searchBox.style.padding === '0px') {
      searchBtn.className = 'search_btn_close btn';
      searchBox.style.width = '400px';
      searchBox.style.padding = '10px 15px';
      searchBox.focus();
      search.classList.toggle('search_focus');
      event.stopPropagation();
    } else {
      searchBtn.className = 'search_btn btn';
      searchBox.style.width = '0px';
      searchBox.style.padding = '0px';
      search.classList.toggle('search_focus');
    }
  };

  cartBtn.onclick = function () {
    if (cartBox.className === 'cart'
    /* || cartBox.style.right === '' */
    ) {
        // cartBox.style.right = 0;
        cartBox.classList.toggle('cart_slide');
        search.classList.toggle('search_slided');
        cartBtn.style.backgroundColor = '#FFF';
        cartBtn.style.opacity = 0;
        catalog.classList.toggle('catalog_slided');
      }
  };

  cartClose.onclick = function () {
    if (
    /* cartBox.style.right !== '-21vw' */
    cartBox.className === 'cart cart_slide' || cartBox.style.right !== '') {
      // cartBox.style.right = '-21vw';
      cartBox.classList.toggle('cart_slide');
      search.classList.toggle('search_slided');
      cartBtn.style.backgroundColor = '#000';
      cartBtn.style.opacity = 1;
      cartIcon.style.fill = '#FFF';
      catalog.classList.toggle('catalog_slided');
    }
  };

  searchBox.onblur = function (event) {
    if (search.className === 'search search_focus') {
      search.classList.toggle('search_focus');
      searchBox.style.padding = '0px';
      searchBox.style.width = '0px';
      searchBtn.className = 'search_btn btn';
      event.stopPropagation();
    }
  }; // let number = quantity.value;
  // minus.forEach(min => {
  //   // eslint-disable-next-line no-param-reassign
  //   min.onclick = function(event) {
  //     number += 1;
  //     event.preventDefault();
  //   };
  // });

});