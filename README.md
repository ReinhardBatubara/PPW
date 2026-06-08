# 🛍️ DelDeals - Platform Marketplace & Promosi Lokal IT Del

[![Laravel](https://img.shields.io/badge/Laravel-11.9-red?style=for-the-badge&logo=laravel)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.2%2B-blue?style=for-the-badge&logo=php)](https://php.net)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=for-the-badge&logo=vite)](https://vite.dev)

**DelDeals** adalah platform web e-commerce & marketplace lokal yang dirancang khusus untuk memfasilitasi civitas akademika **Institut Teknologi Del (IT Del)** dalam melakukan transaksi jual-beli, promosi barang bekas, sewa peralatan, serta berbagi informasi penawaran (*deals*) menarik di sekitar kampus Laguboti.

Proyek ini dikembangkan menggunakan **Laravel 11** dengan arsitektur modern, berkinerja tinggi, dan responsif.

---

## 🌟 Fitur Utama (Direncana & Dikembangkan)

### 🔑 1. Sistem Otentikasi Pengguna
*   **Registrasi & Login Akun:** Akses masuk aman bagi mahasiswa, dosen, staf, dan alumni IT Del.
*   **Profil Pengguna:** Manajemen data pribadi, riwayat unggahan iklan/deals, dan daftar produk favorit.

### 🏷️ 2. Manajemen Listing & Promosi (CRUD)
*   **Katalog Deals Multi-Kategori:** Kategori produk fleksibel mulai dari buku kuliah, gadget, makanan/minuman, kos, hingga jasa/tutorial.
*   **Unggah Iklan Mudah:** Fitur mengunggah foto produk, menetapkan harga, deskripsi barang, dan kontak penjual.

### 🔍 3. Pencarian & Filter Cerdas
*   **Pencarian Instan:** Menemukan barang/jasa dengan cepat berdasarkan kata kunci.
*   **Filter Spesifik:** Penyaringan pencarian berdasarkan rentang harga, kondisi barang (baru/bekas), kategori, dan reputasi penjual.

### 💬 4. Hubungan Penjual & Pembeli (Integrasi Kontak)
*   **Hubungi Penjual:** Integrasi tombol pintas ke WhatsApp atau Telegram penjual untuk mempercepat negosiasi transaksi.
*   **Sistem Tanya Jawab:** Kolom diskusi/komentar di setiap halaman produk untuk mengajukan pertanyaan sebelum membeli.

### 🛡️ 5. Moderasi & Admin Dashboard
*   **Review Iklan:** Validasi listing oleh admin sebelum dipublikasikan untuk mencegah konten terlarang.
*   **Manajemen Kategori:** Admin dapat menambah atau memodifikasi kategori produk secara dinamis.

---

## 🛠️ Tech Stack & Arsitektur

*   **Backend Framework:** Laravel 11.x
*   **Frontend Engine:** Blade Templating Engine, Tailwind CSS, & Alpine.js
*   **Asset Bundler:** Vite 5.x
*   **Database Relasional:** MySQL (default) / SQLite (untuk pengujian)
*   **Otentikasi:** Laravel Breeze / Custom Session

---

## 📂 Struktur Utama Folder `DelDeals`

```bash
DelDeals/
├── app/
│   ├── Http/Controllers/    # Berisi logika bisnis aplikasi
│   └── Models/              # Model data Eloquent (User, Deal, Category, dll)
├── config/                  # Pengaturan konfigurasi framework Laravel
├── database/
│   ├── migrations/          # Definisi skema tabel database
│   └── seeders/             # Data sampel awal (kategori default, dummy user)
├── resources/
│   ├── views/               # Tampilan UI berbasis Blade template
│   ├── css/                 # Aset styles (Tailwind CSS)
│   └── js/                  # Aset Javascript (Alpine.js)
├── routes/
│   └── web.php              # Rute navigasi halaman web
└── vite.config.js           # Konfigurasi build tool Vite
```

---

## ⚙️ Cara Instalasi & Menjalankan Proyek Lokal

Ikuti petunjuk di bawah ini untuk mengaktifkan repositori di komputer Anda:

### 1. Prasyarat Sistem
*   **PHP >= 8.2** terpasang.
*   **Composer** (Manajer dependensi PHP).
*   **Node.js & NPM** (Untuk kompilasi aset CSS/JS).
*   Server database (MySQL/MariaDB).

### 2. Kloning Repositori
```bash
git clone https://github.com/ReinhardBatubara/PPW.git
cd PPW/DelDeals
```

### 3. Instal Dependensi PHP
```bash
composer install
```

### 4. Instal Dependensi Node & Frontend
```bash
npm install
```

### 5. Setup File Lingkungan (`.env`)
Salin file konfigurasi contoh:
```bash
cp .env.example .env
```
Buka file `.env` di text editor Anda, lalu sesuaikan koneksi database Anda:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_deldeals
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 6. Generate Kunci Aplikasi
```bash
php artisan key:generate
```

### 7. Jalankan Migrasi Database
Buat database bernama `db_deldeals` terlebih dahulu di MySQL server Anda, lalu migrasikan tabelnya:
```bash
php artisan migrate
```

### 8. Jalankan Server Lokal
Jalankan backend Laravel dan frontend builder:

**Terminal 1 (Laravel Server):**
```bash
php artisan serve
```

**Terminal 2 (Vite Builder):**
```bash
npm run dev
```

Buka peramban Anda lalu akses **`http://127.0.0.1:8000`**.

---

## 🏛️ Lisensi
Aplikasi ini dikembangkan sebagai bagian dari tugas mata kuliah **Pengembangan Perangkat Lunak Web (PPW)** di **IT Del**. Lisensi di bawah **MIT License**.
