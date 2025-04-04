document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Xử lý khi gửi form
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !message) {
            showNotification("Vui lòng điền đầy đủ thông tin!", true);
            return;
        }

        if (!isValidEmail(email)) {
            showNotification("Email không hợp lệ! Vui lòng dùng email Gmail.", true);
            return;
        }

        if (!isValidPhone(phone)) {
            showNotification("Số điện thoại không hợp lệ! Cần đủ 10 số, bắt đầu bằng 0.", true);
            return;
        }

        // Gửi thành công
        showNotification("Tin nhắn của bạn đã được gửi thành công!");
        form.reset();
    });

    // Hiển thị thông báo nổi
    function showNotification(message, isError = false) {
        const log = document.createElement('div');
        log.textContent = message;
        log.style.position = 'fixed';
        log.style.top = '20px';
        log.style.right = '20px';
        log.style.background = isError ? '#ffe6e6' : 'rgb(75, 146, 75)';
        log.style.padding = '10px';
        log.style.border = isError ? '1px solid #ff3333' : '1px solid rgb(75, 146, 75)';
        log.style.zIndex = '1000';
        log.style.color = isError ? '#ff3333' : 'white';

        document.body.appendChild(log);
        setTimeout(() => log.remove(), 2500);
    }

    // Kiểm tra email (chỉ chấp nhận Gmail)
    function isValidEmail(email) {
        const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return pattern.test(email);
    }

    // Kiểm tra số điện thoại Việt Nam bắt đầu bằng 0 và đủ 10 số
    function isValidPhone(phone) {
        return /^0\d{9}$/.test(phone);
    }
});
