async function redirectShortLink() {
    // Ambil path dari URL setelah domain (misalnya `yt` dari `yourdomain.com/yt`)
    let shortCode = window.location.pathname.substring(1);

    if (!shortCode) return; // Jika tidak ada shortlink, keluar

    try {
        // Ambil data dari JSON
        const response = await fetch('./shortlinks.json');
        const shortlinks = await response.json();

        // Cek apakah shortlink ada di database JSON
        if (shortlinks[shortCode]) {
            window.location.href = shortlinks[shortCode]; // Redirect ke URL tujuan
        } else {
            document.body.innerHTML = "<h2>Shortlink tidak ditemukan</h2>";
        }
    } catch (error) {
        console.error("Gagal mengambil shortlink:", error);
    }
}

// Jalankan redirect saat halaman dimuat
redirectShortLink();
