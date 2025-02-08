window.onload = async function () {

    let shortCode = window.location.pathname.substring(1);

    if (!shortCode) {
        return;
    }

    try {

        const response = await fetch('./shortlinks.json');
        const shortlinks = await response.json();


        if (shortlinks[shortCode]) {

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
