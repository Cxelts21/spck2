document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
  
    registerForm?.addEventListener("submit", function (event) {
      event.preventDefault();
  

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  

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