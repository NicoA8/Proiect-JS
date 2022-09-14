// SUBSCRIBE
const formInputs = document.querySelectorAll("input");
const messageInput = document.querySelector("textarea");
const checkInputs = document.querySelectorAll('input[type="checkbox"]');
const submitForms = document.querySelectorAll("form");
const submitBox = document.querySelector(".submit-background");

submitForms.forEach(submitForm => {
  submitForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(messageInput.value);
    messageInput.value = "";
    checkInputs.forEach(checkInput => {
      console.log(checkInput.checked);
      checkInput.checked = false;
    });
  });
});
function fullForm() {
  if (parseInt($('input[name="not_robot"]').val()) == 12) {
    return true;
  } else {
    alert("You not enterd the correct value");
    return false;
  }
}