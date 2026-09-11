document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".loginpage");
  const emailInput = document.querySelector('input[type="email"]');
  const errorMsg = document.getElementById("email-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (event) => {
    const emailValue = emailInput.value.trim();

    if (!emailRegex.test(emailValue)) {
      event.preventDefault(); 
      
      errorMsg.textContent = "Please enter a valid email address.";
      errorMsg.style.display = "block";
      emailInput.classList.add("input-error");
      emailInput.focus();
    } else {
      errorMsg.style.display = "none";
      emailInput.classList.remove("input-error");
    }
  });
  emailInput.addEventListener("input", () => {
    errorMsg.style.display = "none";
    emailInput.classList.remove("input-error");
  });
});