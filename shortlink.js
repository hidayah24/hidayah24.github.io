async function redirectShortLink() {
    console.log("Script dimulai..."); // Cek apakah script dijalankan

    let shortCode = window.location.pathname.substring(1);
    console.log("Shortlink yang diminta:", shortCode); // Cek apakah path terdeteksi

    if (!shortCode) {
        console.log("Tidak ada shortlink yang diminta. Keluar.");
        return;
    }

    try {
        console.log("Memulai fetch ke JSON...");
        const response = await fetch('./shortlinks.json');
        console.log("Fetch berhasil, parsing JSON...");

        const shortlinks = await response.json();
        console.log("Data JSON yang didapat:", shortlinks);

        if (shortlinks[shortCode]) {
            console.log(`Redirecting ke: ${shortlinks[shortCode]}`);
            window.location.href = shortlinks[shortCode]; // Redirect
        } else {
            console.log("Shortlink tidak ditemukan.");
            document.body.innerHTML = "<h2>Shortlink tidak ditemukan</h2>";
        }
    } catch (error) {
        console.error("Error saat fetch JSON:", error);
    }
}

redirectShortLink();
