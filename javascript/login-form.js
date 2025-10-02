const loginForm = document.querySelector("#login-form");

document.querySelector("#menu-button").addEventListener("click", () => {
    loginForm.style.display = "block";
    loginForm.style.animation = "fadeIn 0.5s";
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            loginForm.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});