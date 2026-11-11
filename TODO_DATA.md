# TODO_DATA: Pelacakan Data Asli & Berkas Pengguna

Dokumen ini mencatat semua data yang membutuhkan verifikasi langsung dari pengguna atau berkas tambahan, guna mematuhi **Aturan Emas: Jangan mengarang fakta, angka, nama perusahaan, atau sertifikat palsu.**

---

## 1. Data Profil & Pengalaman (dari LinkedIn)
* [ ] **Pengalaman Kerja / Magang Resmi:**
  * Organisasi / Perusahaan: `[ISI: dari LinkedIn]`
  * Peran & Divisi: `[ISI: contoh Front-end Intern]`
  * Periode: `[ISI: Bulan Tahun - Bulan Tahun]`
  * Deskripsi & Pencapaian: `[ISI: Ringkasan pekerjaan]`
* [ ] **Pengalaman Organisasi / Kepanitiaan Kampus IPB:**
  * Nama Himpunan / Lembaga (misal: HIMATI / BEM SV IPB / Kepanitiaan): `[ISI: ...]`
  * Jabatan & Kontribusi: `[ISI: ...]`
* [ ] **Sertifikasi & Lisensi:**
  * Sertifikat Dicoding / BNSP / Cisco / AWS / dll: `[ISI: Nama sertifikasi, penerbit, tahun]`
  * Berkas gambar/PDF sertifikat untuk lightbox: simpan di `/public/experience/`
* [ ] **CV Resmi:**
  * Letakkan file PDF di `/public/cv.pdf` untuk tombol "Download CV"

---

## 2. Screenshot & Foto Proyek
* [x] **AksesKota (Live):** Diambil via Chrome headless (`/public/projects/akseskota/`)
* [x] **Railuma (Live):** Diambil via Chrome headless (`/public/projects/railuma/`)
* [x] **SADAR-EDU (Live):** Diambil via Chrome headless (`/public/projects/sadar-edu/`)
* [ ] **RFID Absence System v2 (Hardware):**
  * Foto fisik perangkat IoT (NodeMCU ESP8266 + RFID RC522 + LCD 16x2 menyala). Letakkan di `/public/projects/rfid-absence-system/circuit-real.webp`
  * Tangkapan layar dashboard web admin Laravel (daftar karyawan, KPI score, log absensi). Letakkan di `/public/projects/rfid-absence-system/dashboard-real.webp`
* [ ] **1% Better Mobile (Android):**
  * Screenshot aplikasi dari emulator / HP Android (Home challenge, streak screen, proof upload, leaderboard). Letakkan di `/public/projects/one-percent-mobile/`

---

## 3. Kontak Pribadi
* [ ] **Email Kontak:**
  * Giffa dapat mencantumkan alamat email preferensi (misal: `giffa.indr@...` atau email akademik IPB). Saat ini tombol email mengarah ke `mailto:syaikhanigiffa@gmail.com` (dapat disesuaikan di `content/profile.ts`).

---

*Catatan: Semua komponen UI telah dilengkapi fallback dan placeholder elegan sehingga website dapat langsung di-build dan dideploy ke Vercel tanpa error.*
