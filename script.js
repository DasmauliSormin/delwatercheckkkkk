document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const issue = document.getElementById("issue").value;

  if (!location || !issue) {
    alert("Mohon lengkapi semua kolom!");
    return;
  }

  // Kirim data ke Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbzr1EtlCEPvstLxEGGFNabGnAVTubxUnAU5k4KFZSxflbZGPd39AJzIJcWUpxlOPh7P/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      location: location,
      issue: issue,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("result").textContent = "✅ Laporan berhasil dikirim. Terima kasih!";
      document.getElementById("reportForm").reset();
    })
    .catch((error) => {
      document.getElementById("result").textContent = "❌ Gagal mengirim laporan. Coba lagi nanti.";
      console.error("Error:", error);
    });
});
