document.addEventListener('DOMContentLoaded', function() {
    const productsArray = Array.from(document.querySelectorAll('.product-card'));
    const filterBrand = document.querySelector('.filters-brand');
    const sortingProduct = document.querySelector('.filters-sorting');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const productGrid = document.querySelector('.product-grid');
    const buyButtons = document.querySelectorAll('.buy-button');

    // Hàm hiển thị thông báo
    function showNotification(message) {
        const log = document.createElement('div');
        log.textContent = message;
        Object.assign(log.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgb(75, 146, 75)',
            padding: '10px',
            border: '1px solid rgb(15, 133, 15)',
            zIndex: '1000',
            color: 'white'
        });

        document.body.appendChild(log);
        setTimeout(() => {
            log.remove();
            if (message.includes('giỏ hàng')) {
                window.location.href = 'cart.html';
            }
        }, 2500);
    }

    // Xử lý lọc theo thương hiệu
    if (filterBrand) {
        filterBrand.addEventListener('change', function() {
            filterAndSearchProducts();
        });
    }

    // Xử lý sắp xếp sản phẩm
    if (sortingProduct) {
        sortingProduct.addEventListener('change', function() {
            const sortOption = this.value;
            productsArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace(/[^\d]/g, ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace(/[^\d]/g, ''));
                return sortOption === 'increase' ? priceA - priceB : priceB - priceA;
            });
            
            productGrid.innerHTML = '';
            productsArray.forEach(item => productGrid.appendChild(item));
        });
    }

    // Xử lý tìm kiếm
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            filterAndSearchProducts();
        });
    }

    // Hàm kết hợp lọc và tìm kiếm
    function filterAndSearchProducts() {
        const selectedBrand = filterBrand ? filterBrand.value : 'all';
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';

        productsArray.forEach(item => {
            const brand = item.querySelector('h3').textContent.toLowerCase();
            const matchesBrand = selectedBrand === 'all' || brand.includes(selectedBrand);
            const matchesSearch = brand.includes(searchValue);
            item.style.display = matchesBrand && matchesSearch ? 'block' : 'none';
        });
    }

    productsArray.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('buy-button')) return;
            this.classList.toggle('active');
        });
    });

    // Xử lý nút mua hàng
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            showNotification(`Sản phẩm "${productName}" đã được thêm vào giỏ hàng`);
        });
    });
});