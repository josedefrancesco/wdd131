document.querySelector(".submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  const feedback = document.getElementById("feedback");

  let errorMsg = "";


  if (cardNumber !== "1234123412341234") {
    errorMsg += "Card number is not valid\n";
  }


  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear() % 100;

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    errorMsg += "Card is expired\n";
  }

  if (errorMsg) {
    feedback.textContent = errorMsg;
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Payment submitted successfully!";
    feedback.style.color = "green";
  }
});