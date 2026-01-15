// Toggle filter sections
document.querySelectorAll(".filter-section h3").forEach((heading) => {
  heading.addEventListener("click", function () {
    const section = this.parentElement;
    const content = Array.from(section.children).slice(1);
    content.forEach((el) => {
      el.style.display = el.style.display === "none" ? "block" : "none";
    });
  });
});

// Wishlist functionality
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.style.color = this.style.color === "red" ? "#333" : "red";
  });
});

// Filter tags remove
document.querySelectorAll(".tag").forEach((tag) => {
  tag.addEventListener("click", function () {
    this.style.display = "none";
  });
});

// Clear all filters
document
  .querySelector(".clear-filter")
  ?.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".tag").forEach((tag) => {
      tag.style.display = "none";
    });
    document
      .querySelectorAll(".checkbox-label input:checked")
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
  });

// View toggle
document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".view-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Search functionality
document.querySelector(".search-btn")?.addEventListener("click", function () {
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput.value.trim()) {
    alert("Searching for: " + searchInput.value);
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
    }
  });
