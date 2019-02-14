document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelector('.navBtns'),
    search = document.querySelector('.search'),
    searchBtn = document.getElementById('searchBtn'),
    searchBox = document.querySelector('.search_box'),
    cartBtn = document.getElementById('cartBtn'),
    cartBox = document.querySelector('.cart'),
    cartIcon = document.querySelector('.cls-1'),
    cartClose = document.getElementById('cartClose'),
    catalog = document.querySelector('.catalog');

  searchBtn.onclick = event => {
    if (
      (searchBox.style.width === '' && searchBox.style.padding === '') ||
      (searchBox.style.width === '0px' && searchBox.style.padding === '0px')
    ) {
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

  cartBtn.onclick = () => {
    if (cartBox.style.right === '-21vw' || cartBox.style.right === '') {
      cartBox.style.right = 0;
      btns.classList.toggle('navBtns_slided');
      cartBtn.style.backgroundColor = '#FFF';
      cartBtn.style.opacity = 0;
      catalog.classList.toggle('catalog_slided');
    }
  };

  cartClose.onclick = () => {
    if (cartBox.style.right !== '-21vw' || cartBox.style.right !== '') {
      cartBox.style.right = '-21vw';
      btns.classList.toggle('navBtns_slided');
      cartBtn.style.backgroundColor = '#000';
      cartBtn.style.opacity = 1;
      cartIcon.style.fill = '#FFF';
      catalog.classList.toggle('catalog_slided');
    }
  };

  searchBox.onblur = event => {
    if (search.className === 'search search_focus') {
      search.classList.toggle('search_focus');
      searchBox.style.padding = '0px';
      searchBox.style.width = '0px';
      searchBtn.className = 'search_btn btn';
      event.stopPropagation();
    }
  };
});
