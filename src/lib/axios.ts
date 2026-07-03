

// TODO: Create axios instance with base configuration
// Hint: Use environment variables for API URL and API key
// Reference: https://axios-http.com/docs/instance

/*
// Artinya: "Buat satu instance Axios khusus untuk project ini."
// Semua request nanti menggunakan instance ini.
// baseURL: import.meta.env.VITE_BASE_URL,
//Artinya: Jangan menulis URL secara hardcode. Ambil dari .env.
// Kalau suatu saat Anda pindah ke API lain atau versi API berubah, cukup ubah .env tanpa menyentuh kode.
// headers: { >> Header adalah informasi tambahan yang ikut dikirim ke server.
// accept: "application/json",
// Artinya: "Saya ingin jawaban dalam format JSON."
// Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
Artinya:
Ambil token dari .env, lalu kirim sebagai Bearer Token pada setiap request.
Jadi Anda tidak perlu menambahkan token lagi di setiap api.get(...).
*/
import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export default api;
// axios.ts → menyimpan konfigurasi Axios agar semua request API menggunakan pengaturan yang sama.
