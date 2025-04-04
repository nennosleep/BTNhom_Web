document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const viewProductsButton = document.querySelector('.cta-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const log = document.createElement('div');
            log.textContent = `Sản phẩm "${productName}" đã được thêm vào giỏ hàng`;
            log.style.position = 'fixed';
            log.style.top = '20px';
            log.style.right = '20px';
            log.style.background = 'rgb(75, 146, 75)'; 
            log.style.padding = '10px';
            log.style.border = '1px solid rgb(15, 133, 15)'; 
            log.style.zIndex = '1000';
            log.style.color = 'white';

            document.body.appendChild(log);

            setTimeout(() => {
                log.remove();
            }, 2500);
        });
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('buy-button')) return;
            this.classList.toggle('active');
        });
    });

    if (viewProductsButton) {
        viewProductsButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'products.html';
        });
    }
});