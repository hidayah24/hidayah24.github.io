window.onload = async function () {
    console.log("Script berjalan...");

    let shortCode = window.location.pathname.substring(1);
    console.log("Shortlink yang diminta:", shortCode);

    if (!shortCode) {
        console.log("Tidak ada shortlink, keluar.");
        document.querySelector("h2").innerText = "Shortlink tidak ditemukan.";
        document.querySelector(".loading-text").innerText = "Cek kembali alamat yang Anda masukkan.";
        return;
    }

    try {
        console.log("Mengambil data shortlink...");
        const response = await fetch('/data/shortlinks.json');
        const shortlinks = await response.json();

        console.log("Data JSON:", shortlinks);

        if (shortlinks[shortCode]) {
            console.log(`Redirecting ke: ${shortlinks[shortCode]}`);

            // Ubah teks agar lebih menarik saat loading
            document.querySelector("h2").innerText = "Redirecting...";
            document.querySelector(".loading-text").innerText = "Anda akan segera diarahkan.";

            // Tambahkan delay 2 detik agar animasi loading terlihat
            setTimeout(() => {
                window.location.href = shortlinks[shortCode];
            }, 2000);
        } else {
            console.log("Shortlink tidak ditemukan.");
            document.querySelector("h2").innerText = "Shortlink tidak ditemukan.";
            document.querySelector(".loading-text").innerText = "Cek kembali alamat yang Anda masukkan.";
        }
    } catch (error) {
        console.error("Gagal mengambil shortlink:", error);
        document.querySelector("h2").innerText = "Terjadi kesalahan.";
        document.querySelector(".loading-text").innerText = "Silakan coba lagi nanti.";
    }
};
