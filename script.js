/**
 * Fungsi untuk mengarahkan pesanan ke WhatsApp
 * @param {string} product - Nama produk yang ingin dipesan
 */
function orderWA(product) {
    const phoneNumber = "0882009549480"; // GANTI DENGAN NOMOR WHATSAPP ANDA
    let message = "";

    if (product === 'Halo' || product === 'Tanya') {
        message = encodeURIComponent("Halo Unimo Dimsum! Saya ingin bertanya mengenai menu premium Anda.");
    } else {
        message = encodeURIComponent(`Halo! Saya tertarik untuk memesan: "${product}". Apakah stoknya tersedia hari ini?`);
    }

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Membuka tab baru untuk WhatsApp
    window.open(whatsappURL, '_blank');
}

/**
 * Script untuk mendeteksi scroll dan memberikan shadow pada navbar
 */
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl', 'py-2');
        nav.classList.remove('p-4');
    } else {
        nav.classList.remove('shadow-xl', 'py-2');
        nav.classList.add('p-4');
    }
});