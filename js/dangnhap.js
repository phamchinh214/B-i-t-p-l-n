function login() {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();
        if (email === userInfo.email && password === userInfo.password) {
            alert('đăng nhập thành công !');
            window.location.href = 'TrangChuChinh.html';
            return false;
        } else {
            alert('Sai tài khoản hoặc mật khẩu !');
            resetForm();
            return false;
        }
    } else {
        alert('No user registered yet!');
        return false;
    }
}