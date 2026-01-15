// Toggle filter sections
document.querySelectorAll(".filter-section h3").forEach((heading) => {
  heading.addEventListener("click", function () {
    const section = this.parentElement;
    const content = Array.from(section.children).slice(1);
    content.forEach((el) => {
      if (el.style.display === "none") {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  });
});

// Wishlist functionality
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.style.color === "red") {
      this.style.color = "#666";
    } else {
      this.style.color = "red";
    }
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

// Price range apply button
document.querySelector(".apply-btn")?.addEventListener("click", function () {
  const minPrice = document.querySelector(
    ".price-inputs input:first-child"
  ).value;
  const maxPrice = document.querySelector(
    ".price-inputs input:last-child"
  ).value;
  alert(`Price filter applied: $${minPrice} - $${maxPrice}`);
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

// View details links
document.querySelectorAll(".view-details").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Product details page would open here");
  });
});
