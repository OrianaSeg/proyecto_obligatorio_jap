function loginSuccesful() {
    document.getElementById("signinForm").addEventListener("submit", function(e)
    {
        (e).preventDefault();
        let user = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        sessionStorage.setItem("user", user);
        sessionStorage.setItem("password", password);
        sessionStorage.getItem("user");

        if (user != null)
        {
            window.location.href ="index.html";
        }
    });   
}

document.addEventListener("DOMContentLoaded", function(e) {
  loginSuccesful();
});