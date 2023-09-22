  const data = localStorage.getItem('users');
  let users = [];
  if (data) {
    users = JSON.parse(data);
  }
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm?.addEventListener("submit", function (event) {
    event.preventDefault();


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (username == "" && password == "" && confirmPassword == "") {
      alert('Chưa điền đủ thông tin!')
      return;
    }


    if (password !== confirmPassword) {
      console.log(alert("Mật khẩu không khớp"));
      return;
    } else {
      const user = {
        username: username,
        password: password,
      }
      alert('Đăng kí thành công!')
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      location.href = "index.html";
    }
    





    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm?.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById('loginname').value;
      const password = document.getElementById('loginpassword').value;
      const data = localStorage.getItem('users');
      const list_of_users = JSON.parse(data);
      if (check_user_in_list(username, password, list_of_users)) {
          alert("Đăng nhập thành công!");
          location.href = "index.html";
      } else {
          alert("Tài khoản hoặc mật khẩu chưa chính xác!");
      }
  });

  function check_user_in_list(username, password, list_of_users) {
      for (const user of list_of_users) {
          if (user.username === username && user.password === password) {
              return true;
          }
      }
      return false;
  };
});