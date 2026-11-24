import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RingkasanTugas from './components/RingkasanTugas';
import FormTambahTugas from './components/FormTambahTugas';
import DaftarTugas from './components/DaftarTugas';
import Footer from './components/Footer';

export default function App() {
  // State daftar tugas dengan data inisial realistis yang selaras dengan Tugas W4
  const [daftarTugas, setDaftarTugas] = useState([
    {
      id: 1,
      title: 'Modul 4 Skeleton UI Bootstrap',
      course: 'Pemrograman Web',
      category: 'Individu',
      priority: 'High',
      deadline: '2026-11-25',
      status: 'In Progress',
      description: 'Membangun kerangka frontend responsive (dashboard, list, form).'
    },
    {
      id: 2,
      title: 'Implementasi REST API & Prisma',
      course: 'Pemrograman Web',
      category: 'Individu',
      priority: 'Medium',
      deadline: '2026-11-28',
      status: 'Pending',
      description: 'Integrasi database PostgreSQL lokal dan migrasi skema.'
    },
    {
      id: 3,
      title: 'Analisis Kebutuhan Perangkat Lunak',
      course: 'Rekayasa Web',
      category: 'Kelompok',
      priority: 'High',
      deadline: '2026-11-30',
      status: 'In Progress',
      description: 'Menyusun dokumen spesifikasi kebutuhan perangkat lunak (SRS).'
    },
    {
      id: 4,
      title: 'Setup Repository GitHub Organisasi',
      course: 'Proyek Fullstack',
      category: 'Kelompok',
      priority: 'Low',
      deadline: '2026-11-20',
      status: 'Completed',
      description: 'Inisialisasi repo tim, branch protection, dan setup CI/CD pipeline.'
    },
    {
      id: 5,
      title: 'Perancangan Normalisasi Database 3NF',
      course: 'Basis Data Lanjut',
      category: 'Praktikum',
      priority: 'Medium',
      deadline: '2026-11-18',
      status: 'Completed',
      description: 'Skema ERD konseptual ke fisik untuk sistem transaksi e-commerce.'
    },
    {
      id: 6,
      title: 'Modul 6 React Komponen & State',
      course: 'Pemrograman Web',
      category: 'Individu',
      priority: 'High',
      deadline: '2026-12-05',
      status: 'In Progress',
      description: 'Pengembangan arsitektur komponen React, controlled form, dan interaktivitas state.'
    }
  ]);

  // Handler: Tambah tugas baru ke dalam state array
  const handleTambahTugas = (tugasBaru) => {
    setDaftarTugas([tugasBaru, ...daftarTugas]);
  };

  // Handler: Hapus tugas berdasarkan id
  const handleHapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Handler: Ubah status pengerjaan tugas
  const handleUbahStatusTugas = (id, statusBaru) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, status: statusBaru } : tugas
      )
    );
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-container">
        <RingkasanTugas daftarTugas={daftarTugas} />
        <div className="app-content-grid">
          <aside className="form-column">
            <FormTambahTugas onTambahTugas={handleTambahTugas} />
          </aside>
          <section className="list-column">
            <DaftarTugas
              daftarTugas={daftarTugas}
              onHapus={handleHapusTugas}
              onUbahStatus={handleUbahStatusTugas}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
