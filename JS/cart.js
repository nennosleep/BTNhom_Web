document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.querySelector('.checkout-button');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            // thông báo Thanh toán thành công
            const log = document.createElement('div');
            log.textContent = `Thanh toán thành công`;
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
                log.style.opacity = '0';
                setTimeout(() => log.remove(), 500);
            }, 2000);

            // Đặt lại số lượng và tổng tiền
            document.querySelectorAll('.cart-table tbody tr').forEach(row => {
                const quantityInput = row.querySelector('.quantity-input');
                const totalCell = row.querySelector('td:nth-child(4)'); // Cột tổng tiền

                if (quantityInput && totalCell) {
                    quantityInput.value = 0;
                    totalCell.textContent = "0đ";
                }
            });

            // Cập nhật tổng cộng
            const cartSummary = document.querySelector('.cart-summary p');
            if (cartSummary) {
                cartSummary.textContent = "0đ";
            }
        });
    }
});
