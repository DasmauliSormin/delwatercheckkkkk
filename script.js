document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const issue = document.getElementById("issue").value;

  if (!location || !issue) {
    alert("Mohon lengkapi semua kolom!");
    return;
  }

  // Simulasi laporan terkirim
  document.getElementById("result").textContent =
    `✅ Laporan berhasil dikirim untuk: ${location}. Terima kasih atas kontribusimu!`;

  // Reset form
  document.getElementById("reportForm").reset();
});
