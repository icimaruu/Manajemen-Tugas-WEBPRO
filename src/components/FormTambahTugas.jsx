import { useState } from 'react';

export default function FormTambahTugas({ onTambahTugas }) {
  const [judul, setJudul] = useState('');
  const [mataKuliah, setMataKuliah] = useState('Pemrograman Web');
  const [kategori, setKategori] = useState('Individu');
  const [prioritas, setPrioritas] = useState('Medium');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('Pending');
  const [deskripsi, setDeskripsi] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul.trim()) {
      setErrorMsg('Nama / Judul tugas wajib diisi!');
      return;
    }

    const tugasBaru = {
      id: Date.now(),
      title: judul.trim(),
      course: mataKuliah,
      category: kategori,
      priority: prioritas,
      deadline: deadline || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      status: status,
      description: deskripsi.trim() || 'Tidak ada deskripsi tambahan.'
    };

    onTambahTugas(tugasBaru);

    // Reset form
    setJudul('');
    setMataKuliah('Pemrograman Web');
    setKategori('Individu');
    setPrioritas('Medium');
    setDeadline('');
    setStatus('Pending');
    setDeskripsi('');
    setErrorMsg('');
  };

  return (
    <section className="form-card">
      <div className="form-card-header">
        <div className="form-header-title">
          <i className="bi bi-plus-circle-fill text-primary"></i>
          <div>
            <h3>Tambah Tugas Baru</h3>
            <p>Masukkan rincian penugasan akademik untuk ditambahkan ke daftar</p>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="alert-error">
          <i className="bi bi-exclamation-triangle-fill"></i>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="task-form-grid">
        {/* Judul Tugas */}
        <div className="form-group full-width">
          <label htmlFor="taskTitle" className="form-label">
            Nama / Judul Tugas <span className="text-danger">*</span>
          </label>
          <input
            id="taskTitle"
            type="text"
            className="form-control"
            placeholder="Contoh: Modul 6 React Komponen & State..."
            value={judul}
            onChange={(e) => {
              setJudul(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
          />
        </div>

        {/* Mata Kuliah */}
        <div className="form-group">
          <label htmlFor="courseSelect" className="form-label">
            Mata Kuliah <span className="text-danger">*</span>
          </label>
          <select
            id="courseSelect"
            className="form-select"
            value={mataKuliah}
            onChange={(e) => setMataKuliah(e.target.value)}
          >
            <option value="Pemrograman Web">Pemrograman Web</option>
            <option value="Rekayasa Web">Rekayasa Web</option>
            <option value="Proyek Fullstack">Proyek Fullstack</option>
            <option value="Basis Data Lanjut">Basis Data Lanjut</option>
          </select>
        </div>

        {/* Kategori Tugas */}
        <div className="form-group">
          <label htmlFor="categorySelect" className="form-label">
            Kategori Tugas
          </label>
          <select
            id="categorySelect"
            className="form-select"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="Individu">Tugas Individu</option>
            <option value="Kelompok">Tugas Kelompok / Proyek Tim</option>
            <option value="Praktikum">Laporan Praktikum</option>
            <option value="Ujian">Persiapan Ujian / Kuis</option>
          </select>
        </div>

        {/* Tingkat Prioritas */}
        <div className="form-group">
          <label htmlFor="prioritySelect" className="form-label">
            Tingkat Prioritas <span className="text-danger">*</span>
          </label>
          <select
            id="prioritySelect"
            className="form-select"
            value={prioritas}
            onChange={(e) => setPrioritas(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
        </div>

        {/* Tenggat Waktu (Deadline) */}
        <div className="form-group">
          <label htmlFor="dueDate" className="form-label">
            Tenggat Waktu (Deadline)
          </label>
          <input
            id="dueDate"
            type="date"
            className="form-control"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        {/* Status Awal */}
        <div className="form-group full-width">
          <label htmlFor="statusSelect" className="form-label">
            Status Awal
          </label>
          <select
            id="statusSelect"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending (Belum Dikerjakan)</option>
            <option value="In Progress">In Progress (Sedang Dikerjakan)</option>
            <option value="Completed">Completed (Selesai)</option>
          </select>
        </div>

        {/* Deskripsi / Catatan */}
        <div className="form-group full-width">
          <label htmlFor="taskDescription" className="form-label">
            Deskripsi atau Catatan Tambahan
          </label>
          <textarea
            id="taskDescription"
            rows="2"
            className="form-control"
            placeholder="Tuliskan instruksi atau catatan pengerjaan tugas..."
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>

        {/* Tombol Simpan */}
        <div className="form-actions full-width">
          <button type="submit" className="btn-primary-action">
            <i className="bi bi-plus-lg"></i>
            Tambah Tugas
          </button>
        </div>
      </form>
    </section>
  );
}
