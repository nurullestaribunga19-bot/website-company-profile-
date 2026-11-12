# JABUTAS - Company Profile UMKM Website

Website company profile untuk UMKM **Jabutas (By Sabina Collection)** - Tas Ulos Handmade & Wastra Nusantara dari Medan, Sumatera Utara.

## 📋 Informasi Mahasiswa

| Data | Detail |
|------|--------|
| **Nama** | Bunga Nurul Lestari |
| **NIM** | 240103011 |
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
