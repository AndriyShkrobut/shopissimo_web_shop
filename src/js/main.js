document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search'),
    searchBtn = document.getElementById('searchBtn'),
    searchBox = document.querySelector('.search_box'),
    searchReset = document.querySelector('.search_reset'),
    cartBtn = document.getElementById('cartBtn'),
    cartBox = document.querySelector('.cart'),
    cartClose = document.getElementById('cartClose'),
    catalog = document.querySelector('.catalog');
  // minus = document.querySelectorAll('#minus'),
  // plus = document.querySelectorAll('#plus'),
  // quantity = document.querySelectorAll('.cart_item_amount_number');

  window.addEventListener('mouseup', event => {
    if (
      event.target !== search &&
      event.target.parentNode !== search &&
      searchBox.className === 'search_box search_box_open'
    ) {
      searchReset.style.opacity = 0;
      searchBox.classList.toggle('search_box_open');
    }
  });

  searchBtn.onclick = () => {
    if (searchBox.className === 'search_box') {
      // searchReset.style.opacity = 1;
      searchBox.classList.toggle('search_box_open');
      searchBox.focus();
    }
  };

  searchBox.oninput = () => {
    if (searchBox.value === '') {
      searchReset.style.opacity = 0;
    } else {
      searchReset.style.opacity = 1;
    }
  };

  searchReset.onclick = () => {
    if (searchBox.value !== '') {
      searchBox.value = '';
      searchBox.focus();
      searchReset.style.opacity = 0;
    }
  };

  cartBtn.onclick = () => {
    if (cartBox.className === 'cart') {
      cartBox.classList.toggle('cart_slide');
      search.classList.toggle('search_slided');
      cartBtn.style.backgroundColor = '#FFF';
      cartBtn.style.opacity = 0;
      catalog.classList.toggle('catalog_slided');
    }
  };

  cartClose.onclick = () => {
    if (cartBox.className === 'cart cart_slide') {
      cartBox.classList.toggle('cart_slide');
      search.classList.toggle('search_slided');
      cartBtn.style.backgroundColor = '#000';
      cartBtn.style.opacity = 1;
      catalog.classList.toggle('catalog_slided');
    }
  };

  searchBox.onfocus = () => {
    if (
      search.className === 'search' ||
      search.className === 'search search_slided'
    ) {
      search.classList.toggle('search_focus');
      if (searchBox.value !== '') {
        searchReset.style.opacity = 1;
      }
    }
  };
  searchBox.onblur = () => {
    if (
      search.classList.contains('search_focus') &&
      (search.classList.contains('search') ||
        search.classList.contains('search_slided'))
    ) {
      search.classList.toggle('search_focus');
      searchReset.style.opacity = 0;
    }
  };

  // let number = quantity.value;
  // minus.forEach(min => {
  //   // eslint-disable-next-line no-param-reassign
  //   min.onclick = function(event) {
  //     number += 1;

  //     event.preventDefault();
  //   };
  // });
});
