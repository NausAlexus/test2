

document.getElementById("phoneNumber").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+-]/g, ""); // Разрешает только цифры, + и -
});
function validateForm() {
    let phoneNumber = document.getElementById("phoneNumber");
    let privacyPolicy = document.getElementById("privacy-policy");

    if (phoneNumber.checkValidity() && privacyPolicy.checkValidity()) {
        alert("The operation was successful");
    } else {
        phoneNumber.reportValidity();
        privacyPolicy.reportValidity();
    }
}

document.getElementById("registerButton").addEventListener("click", validateForm);
