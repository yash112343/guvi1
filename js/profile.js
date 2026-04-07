$(document).ready(function () {

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    // Fill basic info
    $("#name").val(user.name);
    $("#email").val(user.email);

    // Load profile from backend
    $.ajax({
        url: "php/profile.php",
        type: "POST",
        data: { email: user.email, action: "get" },
        success: function (res) {
            let data = JSON.parse(res);

            if (data.status === "success") {
                $("#age").val(data.profile.age);
                $("#dob").val(data.profile.dob);
                $("#contact").val(data.profile.contact);
            }
        }
    });

    // Save profile
    $("#saveBtn").click(function () {

        let age = $("#age").val();
        let dob = $("#dob").val();
        let contact = $("#contact").val();

        $.ajax({
            url: "php/profile.php",
            type: "POST",
            data: {
                email: user.email,
                age: age,
                dob: dob,
                contact: contact,
                action: "save"
            },
            success: function (res) {
                let data = JSON.parse(res);

                if (data.status === "success") {
                    alert("Profile Updated");
                } else {
                    alert("Error saving profile");
                }
            }
        });

    });

});