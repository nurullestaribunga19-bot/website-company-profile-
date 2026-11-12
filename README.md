# JABUTAS - Company Profile UMKM Website

Website company profile untuk UMKM **Jabutas (By Sabina Collection)** - Tas Ulos Handmade & Wastra Nusantara dari Medan, Sumatera Utara.

## 📋 Informasi Mahasiswa

| Data | Detail |
|------|--------|
| **Nama** | [ISI NAMA ANDA] |
| **NIM** | [ISI NIM ANDA] |
| **Mata Kuliah** | Bisnis Digital - Semester 5 |
| **Tema Tugas** | Menu, Sub Menu, dan Teks |

## 🏪 Nama UMKM

**Jabutas (By Sabina Collection)**
- Bidang: Fashion / Kerajinan Tangan
- Produk: Tas etnik modern dari kain tenun Ulos Batak
- Lokasi: Medan, Sumatera Utara
- Tahun Berdiri: 2017

## 🌐 Link Website Hasil Deploy

**GitHub Pages:** `https://[USERNAME].github.io/[REPO-NAME]/`  
*(Ganti dengan URL GitHub Pages Anda setelah deploy)*

**Vercel (Alternative):** `https://jabutas.vercel.app/`  
*(Website lama sebagai referensi)*

## 📸 Screenshot Tampilan Website

### Beranda (Home)
![Home Page](screenshots/home.png)

### Tentang Kami (About)
![About Page](screenshots/about.png)

### Produk (Products)
![Products Page](screenshots/produk.png)

### Kontak (Contact)
![Contact Page](screenshots/kontak.png)

*(Simpan screenshot di folder `screenshots/` dan commit ke repository)*

## 🗂️ Struktur File

```
jabutas-website/
├── index.html          # Halaman Beranda
├── about.html          # Halaman Tentang Kami (Sejarah, Visi Misi, Profil)
├── produk.html         # Halaman Produk (6 produk + filter kategori)
├── kontak.html         # Halaman Kontak (Info + Form)
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── main.js         # Shared JavaScript (nav, filter, form)
├── img/                # Folder untuk gambar lokal (opsional)
└── README.md           # File ini
```

## ✅ Checklist Ketentuan Tugas

### A. Ketentuan Konten (Teks)
- [x] **Beranda**: Judul utama UMKM, paragraf deskripsi (3+ kalimat), tagline/slogan
- [x] **Tentang Kami**: Sejarah (2+ paragraf + blockquote), Visi (3 poin), Misi (4 poin), Struktur organisasi (4 kartu)
- [x] **Produk**: 6 produk dengan judul & deskripsi (2+ kalimat per produk)
- [x] **Kontak**: Alamat, telepon, email, media sosial, form kontak (nama, email, pesan)

### B. Ketentuan Menu dan Sub Menu
- [x] **4 Menu Utama**: Beranda, Tentang Kami, Produk, Kontak
- [x] **Sub Menu** pada "Tentang Kami" (Sejarah, Visi & Misi, Struktur & Pemilik)
- [x] **Sub Menu** pada "Produk" (Semua, Handbag, Slingbag, Pouch & Custom)
- [x] **Dropdown Hover** di desktop
- [x] **Hamburger Menu** responsif di mobile dengan accordion sub menu

### C. Ketentuan Teknis
- [x] HTML, CSS, JavaScript (Tailwind CSS via CDN)
- [x] Responsif (Desktop & Mobile)
- [x] Struktur file rapi (html terpisah, folder css/, js/, img/)
- [x] Tipografi web (heading, paragraf, list, blockquote, semantic HTML)
- [x] Deploy ke GitHub Pages / Vercel

### D. Ketentuan Pengumpulan
- [ ] Repository GitHub dibuat
- [ ] Website di-deploy ke GitHub Pages
- [ ] README.md lengkap (file ini)
- [ ] Screenshot disertakan

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Semantic markup
- **Tailwind CSS** (CDN) - Utility-first styling
- **Vanilla JavaScript** - Interaktivitas (no framework)
- **Lucide Icons** - Icon set modern
- **Google Fonts** - Playfair Display (serif) + Plus Jakarta Sans (sans)
- **GitHub Pages** - Hosting gratis

## 🚀 Cara Deploy ke GitHub Pages

1. **Buat repository baru di GitHub** (public)
2. **Clone repository** ke lokal:
   ```bash
   git clone https://github.com/[USERNAME]/[REPO-NAME].git
   ```
3. **Copy semua file** project ke folder repository
4. **Commit & push**:
   ```bash
   git add .
   git commit -m "Initial commit: Jabutas company profile website"
   git push origin main
   ```
5. **Aktifkan GitHub Pages**:
   - Buka Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save
6. **Tunggu 1-2 menit**, website akan tersedia di `https://[USERNAME].github.io/[REPO-NAME]/`

## 📱 Fitur Interaktif

1. **Responsive Navbar** - Desktop dropdown hover, Mobile hamburger + accordion
2. **Product Filter** - Filter by kategori (Semua/Handbag/Slingbag/Aksesoris) dengan URL hash sync
3. **Auto-fill Form** - Klik "Tanya Stok" pada produk → otomatis isi form kontak
4. **Form Feedback** - Notifikasi inline (tanpa `alert()`)
5. **Scroll Spy** - Active nav highlight saat scroll
6. **Smooth Animations** - Fade-in-up, hover effects, transitions

## 🎨 Desain & Warna

**Palet Warna "Wastra" (Terracotta/Ulos):**
- Primary: `#b55033` (wastra-600)
- Dark: `#973f27` (wastra-700)
- Light: `#fdf8f6` (wastra-50)

**Palet Warna "Emas" (Aksen):**
- Gold: `#d4af37` (emas-500)

**Tipografi:**
- Heading: Playfair Display (Serif, elegant)
- Body: Plus Jakarta Sans (Sans-serif, readable)

## 📝 Catatan Pengembangan

- Semua gambar menggunakan Unsplash placeholder (ganti dengan foto asli produk)
- Form kontak bersifat simulasi (frontend only), belum terhubung ke backend
- Google Maps embed menggunakan koordinat Medan umum (ganti dengan lokasi asli)
- Kode diorganisir modular: CSS & JS terpisah, reusable di semua halaman

## 📄 Lisensi

Website ini dibuat untuk keperluan tugas mata kuliah **Bisnis Digital Semester 5**.  
Hak cipta konten & desain: **Jabutas / Sabina Collection**.

---

**Dibuat dengan ❤️ untuk UMKM Indonesia**