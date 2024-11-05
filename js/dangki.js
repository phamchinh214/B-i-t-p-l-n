
    function validateForm() {
        clearErrors();

        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (name && !nameRegex.test(name)) {
            alert('Tên không hợp lệ! Tên phải có ít nhất 2 từ và bắt đầu bằng chữ cái hoa và không dấu.');
            return false;
        }

        var phoneRegex = /^\d{10}$/;
        if (phone && !phoneRegex.test(phone)) {
            alert('Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.');
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            alert('Địa chỉ email không hợp lệ');
            return false;
        }

        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (password && !passwordRegex.test(password)) {
            alert('Mật khẩu không hợp lệ. Mật khẩu cần có ít nhất 8 ký tự, bao gồm chữ cái viết thường, chữ cái viết hoa và số.');
            return false;
        }

        if (name === "" || phone === "" || email === "" || password === "") {
            alert('Vui lòng điền đầy đủ thông tin.');
            return false;
        }

        // Kiểm tra xem email đã tồn tại trong localStorage chưa
        var registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
        if (registeredEmails.includes(email)) {
            alert('Email này đã được đăng ký. Vui lòng sử dụng email khác.');
            return false;
        } else {
            // Thêm email mới vào mảng registeredEmails và lưu lại vào localStorage
            registeredEmails.push(email);
            localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
        }

        // Lưu thông tin vào localStorage
        var userInfo = {
            name: name,
            phone: phone,
            email: email,
            password: password
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        alert('Đăng ký thành công!');

        // Reset form
        document.getElementById('registrationForm').reset();

        return false; 
    }

    function displayError(id, message) {
        var errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    function clearErrors() {
        var errorMessages = document.getElementsByClassName('error-message');
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].textContent = '';
        }
    }