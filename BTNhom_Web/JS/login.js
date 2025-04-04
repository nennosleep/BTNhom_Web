document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("button");
    
    function logMessage(message, isError = true) {
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
        
        setTimeout(() => {
            log.style.opacity = '0';
            setTimeout(() => log.remove(), 500);
        }, 2500);
    }
    
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            logMessage("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (password.length < 6) {
            logMessage("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        logMessage("Đăng nhập thành công!", false);
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
});
