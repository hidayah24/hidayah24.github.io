window.onload = async function () {
    document.body.innerHTML += "<p>Script berjalan...</p>";

    let shortCode = window.location.pathname.substring(1);
    document.body.innerHTML += `<p>Shortlink diminta: ${shortCode}</p>`;

    if (!shortCode) {
        document.body.innerHTML += "<p>Tidak ada shortlink yang diminta. Keluar.</p>";
        return;
    }

    try {
        document.body.innerHTML += "<p>Mengambil data shortlink...</p>";

        const response = await fetch('./shortlinks.json');
        const shortlinks = await response.json();

        document.body.innerHTML += `<p>Data JSON: ${JSON.stringify(shortlinks)}</p>`;

        if (shortlinks[shortCode]) {
            document.body.innerHTML += `<p>Redirecting ke: ${shortlinks[shortCode]}</p>`;

            // Tambahkan delay agar redirect tidak diblokir Chrome Mobile
            setTimeout(() => {
                window.location.href = shortlinks[shortCode];
            }, 1000);
        } else {
            document.body.innerHTML += "<p>Shortlink tidak ditemukan.</p>";
        }
    } catch (error) {
        document.body.innerHTML += `<p>Error: ${error}</p>`;
    }
};
