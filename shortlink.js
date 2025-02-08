async function redirectShortLink() {
    // Ambil path dari URL setelah domain (misalnya `/portfolio`)
    let shortCode = window.location.pathname.substring(1); 

    if (!shortCode) return; // Jika tidak ada path, keluar

    try {
        // Ambil data dari shortlinks.json
        const response = await fetch('/data/shortlinks.json');
        const shortlinks = await response.json();

        // Cek apakah path dalam daftar shortlinks
        if (shortlinks[shortCode]) {
            window.location.href = shortlinks[shortCode]; // Redirect ke halaman tujuan
        }
    } catch (error) {
        console.error("Gagal mengambil shortlink:", error);
    }
}

// Panggil fungsi saat halaman dimuat
redirectShortLink();
