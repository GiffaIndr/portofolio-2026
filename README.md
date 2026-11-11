# Website Portofolio Syaikhani Giffa Indrawan (2026)

Portofolio web personal berkonsep *"Editorial Travel Journal meets Painter's Light Studio"* untuk **Syaikhani Giffa Indrawan** (GiffaIndr), pengembang front-end dan mahasiswa Teknologi Rekayasa Perangkat Lunak (TRPL) Sekolah Vokasi IPB University.

Dibangun dengan mematuhi prinsip anti-slop visual (`/design-taste-frontend` & `/antislop-ui`), zero fake data/fabrication, tipografi editorial kontras tinggi, ilustrasi SVG multi-layer depth parallax, analog 35mm film grain, microcopy HUD bernuansa jurnal lapangan, dan transisi interaktif berperforma tinggi.

---

## 🎨 Keputusan Desain & Estetika Visual

### 1. Palet Warna (Kertas Seni & Studio Lukis)
* **Canvas Krem (Fine Art Paper):** `#F3EBDD` (Dark Mode: `#12110E`)
* **Tinta Hitam Pekat (Ink):** `#1B1A17` (Dark Mode: `#F3EBDD`)
* **Butter Yellow (Coretan Marker):** `#F2D13B` (digunakan pada aksen hijau, biru, dan gelap)
* **Terracotta (Studio Pelukis & Genteng Belanda):** `#D9622B`
* **Meadow Green (Lanskap Perbukitan):** `#3E7D2F` (`#1F3D1A` deep)
* **Sky Blue (Cakrawala Belanda):** `#3484C8` hingga `#A7D4F2`

### 2. Tipografi
* **Display / Headline:** *Bodoni Moda* & *Playfair Display* (KAPITAL, condensed, tracking -0.02em)
* **Aksen Italic Skrip:** *Instrument Serif* (Italic, untuk kata penghubung *"crafting"*, *"good"*, *"works"*)
* **Coretan Tangan / Handwritten Notes:** *Caveat* (warna butter yellow atau putih untuk sentuhan personal catatan lapangan)
* **HUD Telemetry / Microcopy:** *JetBrains Mono* (huruf kapital, spasi renggang `letter-spacing: 0.14em`)
* **Body / Konten Teks:** *Inter* (16-18px, line-height 1.6, keterbacaan tinggi)

### 3. Interaksi & Fisika Gerak
* **Preloader:** Garis tulisan tangan *"hello."* tergambar via SVG stroke length, counter digital 0-100%, lalu tirai terbuka ke atas.
* **Hero Multi-Layer Parallax:** 6 layer SVG kedalaman (langit, pegunungan dolo-peaks jauh, teks raksasa terjepit, bukit belakang, kincir angin & rumah genteng merah, padang bunga tulip kuning, dan jalan foreground dengan pesepeda ber-halo HUD).
* **Smooth Scrolling:** Menggunakan `Lenis` dengan kurva inersia lembut dan integrasi `prefers-reduced-motion`.
* **Kursor Kustom:** Menggunakan dual follower (titik instan + lingkaran elastis pegas dengan label kontekstual `VIEW`, `LIVE`, `REPO`, `DRAG`), dinonaktifkan otomatis pada layar sentuh.
* **Studi Kasus Lengkap:** Modal interaktif + rute halaman permanen `/work/[slug]` untuk kemudahan tautan langsung ke HRD/klien.

---

## 🚀 Proyek Unggulan yang Ditampilkan

1. **RFID Absence & Task KPI System v2** (Studi Kasus Unggulan IoT & Fullstack):
   * ESP8266 NodeMCU, MFRC522 RFID reader, LCD 16x2 I2C, Laravel 10, MySQL 8, Tailwind CSS.
   * Gerbang validasi tap-out ketat: hanya diizinkan jika progres tugas harian $\ge 70\%$.
   * Diagram arsitektur SVG interaktif end-to-end terpasang.
2. **AksesKota** (Proyek Tim - Live di [akseskota-web.vercel.app](https://akseskota-web.vercel.app/)):
   * Peta direktori fasilitas publik ramah disabilitas di Kota Bogor.
3. **Railuma** (Live di [railuma.vercel.app](https://railuma.vercel.app/)):
   * Ruang kerja & pembaca Braille berbasis Computer Vision YOLO (`best.pt`) dan validasi kamus KBBI.
4. **SADAR-EDU** (Live di [sadar-edu-v1.vercel.app](https://sadar-edu-v1.vercel.app/)):
   * Platform WebGIS spatial analytics pendidikan lingkungan menggunakan Deck.gl, Mapbox GL, dan React 19.
5. **1% Better Mobile** (Native Android Java, Habit tracking & social accountability).
6. **KAC Play Management** (Laravel 10 Event & Children Club Administration).
7. **P5 Control System** (Next.js Monitoring Kebersihan & Projek Pelajar).

---

## 🛠️ Instalasi & Menjalankan Proyek

### Kebutuhan Sistem
* Node.js v18+ atau v20+ / v22+
* npm

### Langkah Menjalankan
```bash
# 1. Masuk ke folder proyek
cd "c:\mystuff\Portofolio 2026"

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev

# Buka http://localhost:3000 pada browser Anda.
```

### Build Produksi
```bash
npm run build
npm run start
```

---

## 📸 Menjalankan Skrip Pengambilan Screenshot Otomatis
Website live (AksesKota, Railuma, SADAR-EDU) dapat diambil tangkapan layar otomatisnya kapan saja menggunakan skrip Chrome headless bawaan:

```bash
node scripts/screenshots.mjs
```

---

## 📝 Panduan Memperbarui Data Diri & Portofolio

Semua konten dipisahkan secara bersih dari kode komponen:
* **Profil, Pengalaman, Pendidikan:** Edit di file `content/profile.ts`.
* **Proyek, Fitur, Tangkapan Layar:** Tambahkan atau ubah data di `content/projects.ts`.
* **Daftar Berkas yang Perlu Dilengkapi Pengguna:** Lihat `TODO_DATA.md`.
