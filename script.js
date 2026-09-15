emailjs.init({
  publicKey: "NRdabyC4chkZo1Pg7",
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_j1fxi2u",
        "template_6vw8yp7",
        params
    )
    .then(function () {

        document.getElementById("result").innerHTML =
        "Message Sent Successfully!";

        document.getElementById("result").style.color = "green";

        form.reset();

    })
    .catch(function (error) {
        console.log(error);
        alert(error.text);

        document.getElementById("result").innerHTML =
        "Failed to send message.";

        document.getElementById("result").style.color = "red";

        console.log(error);
    });

});