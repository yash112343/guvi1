$(document).ready(function () {

    $("#registerBtn").click(function () {

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        // Validation
        if (name === "" || email === "" || password === "") {
            alert("All fields are required");
            return;
        }

        // Gmail validation (as per requirement)
        if (!email.endsWith("@gmail.com")) {
            alert("Only Gmail is allowed");
            return;
        }

        $.ajax({
            url: "php/register.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                password: password
            },
            success: function (response) {

                let res = JSON.parse(response);

                if (res.status === "success") {
                    alert("Registration Successful");

                    // Redirect to login
                    window.location.href = "login.html";

                } else {
                    alert(res.message);
                }
            },
            error: function () {
                alert("Server Error");
            }
        });

    });

});