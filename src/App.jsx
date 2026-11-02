import { useState } from 'react';
import './App.css'; // <-- Import file CSS di sini
import Header from './components/Header';
import RingkasanTugas from './components/RingkasanTugas';
import FormTambahTugas from './components/FormTambahTugas';
import DaftarTugas from './components/DaftarTugas';

export default function App() {
  const [daftarTugas, setDaftarTugas] = useState([
    { id: 1, title: 'Mengerjakan Modul 6 React Dasar', priority: 'High', done: false },
    { id: 2, title: 'Setup Repository GitHub', priority: 'Medium', done: true }
  ]);

  const handleTambahTugas = (tugasBaru) => {
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const handleHapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const handleUbahStatusTugas = (id) => {
    setDaftarTugas(daftarTugas.map((tugas) => 
      tugas.id === id ? { ...tugas, done: !tugas.done } : tugas
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <RingkasanTugas totalTugas={daftarTugas.length} />
      <FormTambahTugas onTambahTugas={handleTambahTugas} />
      <DaftarTugas daftarTugas={daftarTugas} onHapus={handleHapusTugas} onUbahStatus={handleUbahStatusTugas} />
    </div>
  );
}