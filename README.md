# TaskFlow - Aplikasi Manajemen Tugas Kuliah (Frontend React)

Aplikasi web manajemen tugas perkuliahan yang dibangun menggunakan **React** dan **Vite** sebagai pemenuhan **Tugas Pekan 6 (Bab 6: React Dasar) Praktikum Pemrograman Web**. Proyek ini melanjutkan desain antarmuka, struktur data, dan fungsionalitas dari **Tugas Pekan 4 (TaskFlow)**.

---

## 👤 Identitas Pengembang
- **Nama**: Farizqy Akhram Nugraha
- **NIM**: 103022400132
- **Mata Kuliah**: Pemrograman Web (Semester 5)
- **Topik Aplikasi**: Manajemen Tugas Kuliah
- **Entitas Utama**: `Tugas`

---

## 🚀 Fitur Utama
1. **Header & Identitas Pengguna (`Header.jsx`)**:
   - Menampilkan logo branding TaskFlow, navigasi mini, identitas mahasiswa, dan hero banner informatif.
2. **Ringkasan Data Interaktif (`RingkasanTugas.jsx`)**:
   - Menghitung dan menampilkan metrik secara real-time: Total Tugas, Tugas Sedang Dikerjakan (*In Progress*), Selesai (*Completed*), dan Belum Dimulai (*Pending*).
3. **Formulir Controlled Component (`FormTambahTugas.jsx`)**:
   - Menambahkan tugas baru dengan state input terkontrol: Judul Tugas, Mata Kuliah, Kategori, Prioritas (*High/Medium/Low*), Tenggat Waktu (*Deadline*), Status Awal, dan Catatan Tambahan.
4. **Daftar & Penelusuran Tugas (`DaftarTugas.jsx`)**:
   - Render list menggunakan fungsi `.map()` dengan *unique key* (`tugas.id`).
   - Pencarian real-time berdasarkan judul atau mata kuliah.
   - Filter tab berdasarkan status (*Semua*, *In Progress*, *Pending*, *Completed*).
   - Filter dropdown berdasarkan mata kuliah.
   - **Conditional Rendering**: Menampilkan pesan *"Belum ada data tugas"* apabila daftar tugas kosong sesuai instruksi tugas.
5. **Kartu Item Penugasan (`KartuTugas.jsx`)**:
   - Menampilkan kartu detail untuk setiap tugas lengkap dengan badge prioritas, badge mata kuliah, badge kategori, tenggat waktu, serta tombol aksi ubah status dan hapus tugas.
6. **Footer Informasi (`Footer.jsx`)**:
   - Informasi hak cipta dan identitas akademik mahasiswa.

---

## 📁 Struktur Direktori
```text
manajemen-tugas-frontend/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx          # Komponen Header & Hero Banner
│   │   ├── RingkasanTugas.jsx  # Komponen Counter Statistik Tugas
│   │   ├── FormTambahTugas.jsx # Komponen Formulir Input (Controlled)
│   │   ├── DaftarTugas.jsx     # Komponen List & Toolbar Filter
│   │   ├── KartuTugas.jsx      # Komponen Kartu untuk Setiap Item Tugas
│   │   └── Footer.jsx          # Komponen Footer Informasi
│   ├── App.jsx                 # Komponen Utama Pengelola State & Handler
│   ├── App.css                 # Styling Utama TaskFlow (Selaras W4)
│   ├── index.css               # Styling Global & Typography
│   └── main.jsx                # Entry Point React DOM
```

---

## 🛠️ Panduan Menjalankan Project

1. **Clone repository (jika belum)**:
   ```bash
   git clone https://github.com/icimaruu/Manajemen-Tugas-WEBPRO.git
   cd Manajemen-Tugas-WEBPRO/manajemen-tugas-frontend
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173`.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
