window.onload = async function () {
    console.log("Script berjalan...");

    // Ambil path setelah domain
    let shortCode = window.location.pathname.substring(1);
    console.log("Shortlink yang diminta:", shortCode);

    if (!shortCode) {
        console.log("Tidak ada shortlink, keluar.");
        return;
    }

    try {
        console.log("Mengambil data shortlink...");
        const response = await fetch('./shortlinks.json');
        const shortlinks = await response.json();
        console.log("Data JSON:", shortlinks);

        if (shortlinks[shortCode]) {
            console.log(`Redirecting ke: ${shortlinks[shortCode]}`);
            window.location.href = shortlinks[shortCode];
        } else {
            console.log("Shortlink tidak ditemukan.");
            document.body.innerHTML = "<h2>Shortlink tidak ditemukan</h2>";
        }
    } catch (error) {
        console.error("Gagal mengambil shortlink:", error);
    }
};
