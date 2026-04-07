$(document).ready(function () {

    $("#loginBtn").click(function () {

        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        if (email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        $.ajax({
            url: "php/login.php",
            type: "POST",
            data: {
                email: email,
                password: password
            },
            success: function (response) {

                let res = JSON.parse(response);

                if (res.status === "success") {

                    // Store in localStorage
                    localStorage.setItem("user", JSON.stringify(res.user));

                    alert("Login Successful");

                    // Redirect
                    window.location.href = "profile.html";

                } else {
                    alert("Invalid Email or Password");
                }
            },
            error: function () {
                alert("Server Error");
            }
        });

    });

});