const InputEmail = document.getElementById("email");
const SubmitButton = document.querySelector(".submit-btn");

const ErrorMsg = document.getElementById("error-message");
const EmailValidColor = document.querySelector(".email");

const SignupContainer = document.querySelector(".newsletter-container");
const SuccessContainer = document.querySelector(".success-msg-container");

const SpanEmailValue = document.getElementById("email-span");
const DismissButton = document.querySelector(".dismiss-btn");

InputEmail.addEventListener("input", validEmail);
SubmitButton.addEventListener("click", handleSubmit);

function validEmail(e) {
    return emailRegex(e.target.value);
}

function handleSubmit() {
    const email = InputEmail.value;

    if (!emailRegex(email)) {
        ErrorMsg.classList.remove("hide-error-message");
        EmailValidColor.classList.add("ErrorEmail");
    } else {
        ErrorMsg.classList.add("hide-error-message");
        EmailValidColor.classList.remove("ErrorEmail");
        SignupContainer.classList.add("hidden");
        SuccessContainer.classList.add("show");
    }
    SpanEmailValue.innerHTML = email;
}

// Required Email Address @
function emailRegex(email) {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
}

// Reset The Page
DismissButton.addEventListener("click", () => {
    window.location.reload();
});
