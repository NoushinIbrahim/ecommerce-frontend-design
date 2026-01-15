// Timer countdown functionality
function startTimer() {
  const timer = {
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  };

  setInterval(() => {
    timer.seconds--;

    if (timer.seconds < 0) {
      timer.seconds = 59;
      timer.minutes--;
    }

    if (timer.minutes < 0) {
      timer.minutes = 59;
      timer.hours--;
    }

    if (timer.hours < 0) {
      timer.hours = 23;
      timer.days--;
    }

    if (timer.days < 0) {
      timer.days = 0;
      timer.hours = 0;
      timer.minutes = 0;
      timer.seconds = 0;
    }

    const timeBoxes = document.querySelectorAll(".time-box");
    if (timeBoxes.length >= 4) {
      timeBoxes[0].textContent = `${String(timer.days).padStart(2, "0")} Days`;
      timeBoxes[1].textContent = `${String(timer.hours).padStart(2, "0")} Hour`;
      timeBoxes[2].textContent = `${String(timer.minutes).padStart(
        2,
        "0"
      )} Min`;
      timeBoxes[3].textContent = `${String(timer.seconds).padStart(
        2,
        "0"
      )} Sec`;
    }
  }, 1000);
}

// Start timer on page load
startTimer();

// Category hover effect
document.querySelectorAll(".categories-sidebar li").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.color = "#4A90E2";
  });

  item.addEventListener("mouseleave", function () {
    this.style.color = "#333";
  });
});

// Deal card click
document.querySelectorAll(".deal-card").forEach((card) => {
  card.addEventListener("click", function () {
    alert("Product details page would open here");
  });
});

// Product card click
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", function () {
    alert("Product details page would open here");
  });
});

// Quote form submission
document
  .querySelector(".quote-form button")
  ?.addEventListener("click", function (e) {
    e.preventDefault();
    const item = document.querySelector(".quote-form input").value;
    const details = document.querySelector(".quote-form textarea").value;
    const quantity = document.querySelector(".quantity-input input").value;

    if (item && details && quantity) {
      alert("Quote sent successfully!");
      document.querySelector(".quote-form input").value = "";
      document.querySelector(".quote-form textarea").value = "";
      document.querySelector(".quantity-input input").value = "";
    } else {
      alert("Please fill in all fields");
    }
  });

// Newsletter subscription
document
  .querySelector(".newsletter-form button")
  ?.addEventListener("click", function () {
    const emailInput = document.querySelector(".newsletter-form input");
    if (emailInput.value.trim()) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter your email");
    }
  });

// Search functionality
document.querySelector(".search-btn")?.addEventListener("click", function () {
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput.value.trim()) {
    alert("Searching for: " + searchInput.value);
  }
});

// User panel buttons
document.querySelector(".join-btn")?.addEventListener("click", function () {
  alert("Join page would open here");
});

document.querySelector(".login-btn")?.addEventListener("click", function () {
  alert("Login page would open here");
});

// Service card click
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", function () {
    alert("Service details page would open here");
  });
});
