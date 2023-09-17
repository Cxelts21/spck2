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
        console.log(alert("Đăng kí thành công!"));
        location.href = "index.html";
      }

  
 
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    });
  });

  document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        let loginName = document.getElementById('loginName')
        let loginPassword = document.getElementById('loginPassword')

        let users = JSON.parse(localStorage.getItem('users')) ?? []

        for (var i = 0; i < users.length; i++) {
            if (loginName.value === users[i].userName) {
                if (loginPassword.value === users[i].password) {
                    localStorage.setItem("isLogin", 1);
                    location.href="index.html"
                } else {
                    alert('Password khong chinh xac!')
                }
            } else {
                alert('User khong ton tai!')
            }
        }

    })

    document.getElementById("btn-signup")
    .addEventListener('click', function (event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) ?? []

        let registerUsername = document.getElementById('username')
        let registerPassword = document.getElementById('password')

        let newuser = {
            id: users.length,
            userName: registerUsername.value,
            password: registerPassword.value
        }
        users.push(newuser)

        localStorage.setItem('users', JSON.stringify(users))

    })