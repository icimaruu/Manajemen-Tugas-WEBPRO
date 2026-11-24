export default function RingkasanTugas({ daftarTugas }) {
  const total = daftarTugas.length;
  const inProgress = daftarTugas.filter((t) => t.status === 'In Progress').length;
  const completed = daftarTugas.filter((t) => t.status === 'Completed').length;
  const pending = daftarTugas.filter((t) => t.status === 'Pending').length;

  return (
    <section className="summary-section">
      <div className="summary-card stat-total">
        <div className="stat-icon-wrapper bg-indigo">
          <i className="bi bi-collection-fill"></i>
        </div>
        <div className="stat-details">
          <span className="stat-label">Total Tugas</span>
          <h3 className="stat-value">{total}</h3>
          <span className="stat-hint">{total > 0 ? `${total} penugasan aktif` : 'Belum ada data'}</span>
        </div>
      </div>

      <div className="summary-card stat-progress">
        <div className="stat-icon-wrapper bg-blue">
          <i className="bi bi-hourglass-split"></i>
        </div>
        <div className="stat-details">
          <span className="stat-label">In Progress</span>
          <h3 className="stat-value">{inProgress}</h3>
          <span className="stat-hint">Sedang dikerjakan</span>
        </div>
      </div>

      <div className="summary-card stat-completed">
        <div className="stat-icon-wrapper bg-green">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <div className="stat-details">
          <span className="stat-label">Completed</span>
          <h3 className="stat-value">{completed}</h3>
          <span className="stat-hint">Telah selesai</span>
        </div>
      </div>

      <div className="summary-card stat-pending">
        <div className="stat-icon-wrapper bg-amber">
          <i className="bi bi-clock-history"></i>
        </div>
        <div className="stat-details">
          <span className="stat-label">Pending</span>
          <h3 className="stat-value">{pending}</h3>
          <span className="stat-hint">Belum dimulai</span>
        </div>
      </div>
    </section>
  );
}
