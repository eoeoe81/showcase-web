// Event listener untuk tombol Scroll ke Order
document.getElementById("btnScrollOrder").addEventListener("click", function () {
  document.getElementById("custom").scrollIntoView({ behavior: "smooth" });
});

// Event listener untuk tombol Lihat Katalog
document.getElementById("btnCatalog").addEventListener("click", function () {
  showCatalog();
});

// Fungsi Alert Katalog
function showCatalog() {
  alert("Katalog PDF sedang didownload... (Ceritanya hehe 😝)");
}

// Event listener untuk Submit Form
document.getElementById("crochetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah halaman refresh

  // Ambil nilai input (opsional, kalau mau dipakai logic lanjut)
  const nama = this.querySelector('input[placeholder="Siapa namamu?"]').value;

  if (nama) {
    alert(`Yeay! ✨ Request dari kak ${nama} udah masuk. Tunggu chat dari admin ya!`);
  } else {
    alert("Yeay! ✨ Request kamu udah masuk. Tunggu chat dari admin ya!");
  }

  this.reset(); // Kosongkan form setelah kirim
});
