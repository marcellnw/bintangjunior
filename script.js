// === Toggle Burger Menu ===
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// === Form Submit Handling ===
function handleSubmit(e) {
  e.preventDefault();
  alert("Terima kasih! Data konsultasi Anda sudah terkirim.");
  e.target.reset();
  return false;
}

// === Animasi Scroll (Fade-in) ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
