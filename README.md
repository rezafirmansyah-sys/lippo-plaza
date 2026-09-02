# Website Company Profile Lippo Plaza (Tugas Pra-PKL RPL)

Website profil perusahaan modern, elegan, responsif, dan bernuansa teknologi digital untuk **Lippo Plaza** (Pusat Perbelanjaan / Shopping Mall). Dibuat khusus sebagai pemenuhan tugas **Pra-PKL Jurusan Rekayasa Perangkat Lunak (RPL)**.

---

## 🌟 Fitur Utama Website

1. **Beranda / Hero Section**:
   - Hero banner modern bertema shopping mall dengan dark-overlay elegan.
   - Sambutan resmi, subjudul, deskripsi, tombol Call-to-Action (CTA), dan kartu sorotan keunggulan mall.
2. **Tentang Kami**:
   - Profil Lippo Plaza, Visi & 4 Misi terstruktur, serta 4 Nilai Pelayanan (*Excellence, Hospitality, Innovation, Safety & Comfort*).
3. **Layanan Unggulan (Services)**:
   - 5 Layanan utama: *Shopping, Food & Beverage, Entertainment, Parking System*, dan *Digital Information*.
4. **Direktori Tenant / Toko**:
   - Filter interaktif berbasis JavaScript untuk 6 kategori (*Fashion, Electronics, Beauty, Food & Beverage, Lifestyle, Entertainment*).
   - Kartu tenant rapi dilengkapi label lantai, visualisasi gambar ritel, dan badge placeholder representatif.
5. **Fasilitas Mall**:
   - 8 Fasilitas lengkap (*Area Parkir, Toilet Higienis, Mushola, Lift Penumpang, Escalator, Food Court/Kuliner, Customer Service, Area Publik*).
6. **Event & Informasi Terbaru**:
   - Berita terkini seputar Event Mall, Promo Diskon Tenant, dan Kegiatan Komunitas.
7. **Kontak & Lokasi**:
   - Info kontak manajemen resmi (Nama, Alamat, Telepon, Email, Jam Operasional).
   - Form kontak interaktif dengan validasi input dan popup modal notifikasi sukses.
   - Peta interaktif Google Maps.
8. **Footer & Back to Top**:
   - Navigasi lengkap, tautan media sosial, hak cipta 2026, dan tombol *back-to-top* melayang.

---

## 🎨 Palet Desain & Estetika

- **Warna Utama**: Putih Bersih (`#FFFFFF`, `#F8FAFC`) dan Deep Navy Blue (`#0B1B3D`).
- **Warna Aksen**: Royal Gold (`#C5A059`, `#D4AF37`) untuk memberikan kesan mall kelas atas.
- **Tipografi**: Google Fonts *Plus Jakarta Sans*.
- **Ikonografi**: Bootstrap Icons v1.11.3.
- **Animasi**: AOS (Animate on Scroll) untuk transisi halus saat halaman di-scroll.

---

## 📁 Struktur Direktori

```text
├── index.html        # Halaman utama profil perusahaan (HTML5 Semantik)
├── css/
│   └── style.css     # File stylesheet kustom & palet warna elegan
├── js/
│   └── main.js       # File JavaScript untuk filter tenant, modal form, dan scroll effect
├── vercel.json       # Konfigurasi deployment instan untuk platform Vercel
└── README.md         # Dokumentasi proyek Pra-PKL RPL
```

---

## 🚀 Panduan Menjalankan & Membuka Proyek

### Cara 1: Buka Langsung di Browser
1. Klik ganda pada file `index.html` atau klik kanan > **Open with** > **Google Chrome / Microsoft Edge**.

### Cara 2: Menggunakan VS Code / Live Server
1. Buka folder proyek di VS Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan file `index.html` dan pilih **Open with Live Server**.

---

## 🌐 Panduan Publikasi / Deploy (GitHub & Vercel)

### A. Deploy ke GitHub Pages:
1. Inisialisasi git dan push ke repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete lippo plaza company profile for Pra-PKL RPL"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka repository di GitHub > tab **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Website akan live dalam beberapa menit di URL `https://USERNAME.github.io/NAMA-REPO/`.

### B. Deploy ke Vercel:
1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik tombol **Add New...** > **Project**.
3. Import repository GitHub website ini.
4. Klik tombol **Deploy**. Vercel akan otomatis mendeteksi konfigurasi `vercel.json` dan memberikan domain aktif instan gratis.

---

## 👨‍💻 Catatan Penilaian RPL
- Kode terstruktur secara modular dengan komentar penjelasan yang rapi.
- Memenuhi prinsip *clean code*, HTML semantik, CSS variables, dan *mobile-first responsive design*.
