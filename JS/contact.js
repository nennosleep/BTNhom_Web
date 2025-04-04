document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Khi load trang, xóa dữ liệu cũ và reset form
    localStorage.removeItem("contactForm");
    form.reset();

    // Xử lý khi gửi form
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        if (!validateEmail(email)) {
            createNotification("Email không hợp lệ!", true);
            return;
        }

        if (!validatePhone(phone)) {
            createNotification("Số điện thoại không hợp lệ!", true);
            return;
        }

        if (name === "" || message === "") {
            createNotification("Vui lòng điền đầy đủ thông tin!", true);
            return;
        }

        createNotification("Tin nhắn của bạn đã được gửi thành công!");
        form.reset();
    });

    // Hàm hiển thị thông báo
    function createNotification(message, isError = false) {
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

    // Kiểm tra email hợp lệ
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return re.test(email);
    }

    // Kiểm tra số điện thoại hợp lệ
    function validatePhone(phone) {
        const re = /^0[0-9]{9}$/;
        return re.test(phone);
    }
});
