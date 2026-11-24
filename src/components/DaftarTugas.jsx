import { useState } from 'react';
import KartuTugas from './KartuTugas';

export default function DaftarTugas({ daftarTugas, onHapus, onUbahStatus }) {
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [filterCourse, setFilterCourse] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Saring data berdasarkan filter dan pencarian
  const filteredList = daftarTugas.filter((tugas) => {
    const matchStatus = filterStatus === 'Semua' || tugas.status === filterStatus;
    const matchCourse = filterCourse === 'Semua' || tugas.course === filterCourse;
    const matchSearch =
      tugas.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tugas.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tugas.description && tugas.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchStatus && matchCourse && matchSearch;
  });

  // Kebutuhan conditional rendering: Tampilkan teks bila daftar kosong
  if (daftarTugas.length === 0) {
    return (
      <section className="list-container">
        <div className="empty-box">
          <i className="bi bi-inbox empty-icon"></i>
          <h4 className="empty-text">Belum ada data tugas</h4>
          <p className="empty-subtext">Semua tugas telah diselesaikan atau dihapus. Silakan tambahkan tugas baru melalui formulir di atas.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="list-container">
      {/* Header List & Controls */}
      <div className="list-header">
        <div className="list-title-group">
          <h3 className="list-title">
            <i className="bi bi-card-checklist text-primary me-2"></i>
            Daftar Penugasan
          </h3>
          <span className="badge-count">
            Menampilkan {filteredList.length} dari {daftarTugas.length} tugas
          </span>
        </div>

        {/* Toolbar Filter & Pencarian */}
        <div className="list-toolbar">
          {/* Input Pencarian */}
          <div className="search-input-wrapper">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              placeholder="Cari tugas atau mata kuliah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Hapus pencarian"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            )}
          </div>

          {/* Filter Dropdown Mata Kuliah */}
          <div className="filter-select-wrapper">
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="filter-select"
            >
              <option value="Semua">Semua Mata Kuliah</option>
              <option value="Pemrograman Web">Pemrograman Web</option>
              <option value="Rekayasa Web">Rekayasa Web</option>
              <option value="Proyek Fullstack">Proyek Fullstack</option>
              <option value="Basis Data Lanjut">Basis Data Lanjut</option>
            </select>
          </div>
        </div>

        {/* Tabs Status */}
        <div className="status-tabs">
          {['Semua', 'In Progress', 'Pending', 'Completed'].map((statusTab) => {
            const count = statusTab === 'Semua' 
              ? daftarTugas.length 
              : daftarTugas.filter((t) => t.status === statusTab).length;

            return (
              <button
                key={statusTab}
                className={`tab-btn ${filterStatus === statusTab ? 'active' : ''}`}
                onClick={() => setFilterStatus(statusTab)}
              >
                {statusTab}
                <span className="tab-pill">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render List atau Hasil Saring Kosong */}
      {filteredList.length === 0 ? (
        <div className="empty-box">
          <i className="bi bi-search empty-icon"></i>
          <h4 className="empty-text">Tidak ada tugas yang sesuai</h4>
          <p className="empty-subtext">Coba ubah kata kunci pencarian atau sesuaikan filter status/mata kuliah.</p>
          <button
            className="btn-reset-filter"
            onClick={() => {
              setFilterStatus('Semua');
              setFilterCourse('Semua');
              setSearchQuery('');
            }}
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="task-grid">
          {filteredList.map((tugas) => (
            <KartuTugas
              key={tugas.id}
              tugas={tugas}
              onHapus={onHapus}
              onUbahStatus={onUbahStatus}
            />
          ))}
        </div>
      )}
    </section>
  );
}
