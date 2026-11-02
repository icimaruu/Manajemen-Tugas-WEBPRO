import { useState } from 'react';

export default function FormTambahTugas({ onTambahTugas }) {
  const [judul, setJudul] = useState('');
  const [prioritas, setPrioritas] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul.trim()) return;

    onTambahTugas({
      id: Date.now(),
      title: judul,
      priority: prioritas,
      done: false
    });

    setJudul('');
    setPrioritas('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Masukkan nama tugas..."
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="input-text"
      />
      <select value={prioritas} onChange={(e) => setPrioritas(e.target.value)} className="select-priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="btn-add">Tambah</button>
    </form>
  );
}