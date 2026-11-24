export default function KartuTugas({ tugas, onHapus, onUbahStatus }) {
  // Format prioritas badge class
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'badge-priority-high';
      case 'Medium':
        return 'badge-priority-medium';
      case 'Low':
        return 'badge-priority-low';
      default:
        return 'badge-priority-medium';
    }
  };

  // Format status badge class
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'badge-status-completed';
      case 'In Progress':
        return 'badge-status-progress';
      case 'Pending':
        return 'badge-status-pending';
      default:
        return 'badge-status-pending';
    }
  };

  const isCompleted = tugas.status === 'Completed';

  return (
    <article className={`task-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="task-card-main">
        {/* Baris Meta: Mata Kuliah, Kategori, Prioritas */}
        <div className="task-meta-row">
          <span className="badge-course">
            <i className="bi bi-book me-1"></i>
            {tugas.course}
          </span>
          <span className="badge-category">{tugas.category}</span>
          <span className={`badge-priority ${getPriorityClass(tugas.priority)}`}>
            {tugas.priority === 'High' && <i className="bi bi-exclamation-circle-fill me-1"></i>}
            {tugas.priority === 'Medium' && <i className="bi bi-dash-circle-fill me-1"></i>}
            {tugas.priority === 'Low' && <i className="bi bi-arrow-down-circle-fill me-1"></i>}
            {tugas.priority} Priority
          </span>
        </div>

        {/* Judul Tugas */}
        <h4 className={`task-title ${isCompleted ? 'title-done' : ''}`}>
          {tugas.title}
        </h4>

        {/* Deskripsi */}
        {tugas.description && (
          <p className="task-desc">{tugas.description}</p>
        )}

        {/* Baris Footer Kartu: Deadline & Status Saat Ini */}
        <div className="task-card-footer">
          <div className="task-deadline">
            <i className="bi bi-calendar3"></i>
            <span>Tenggat: <strong>{tugas.deadline}</strong></span>
          </div>
          <span className={`badge-status ${getStatusClass(tugas.status)}`}>
            {tugas.status === 'Completed' && <i className="bi bi-check2-circle me-1"></i>}
            {tugas.status === 'In Progress' && <i className="bi bi-arrow-repeat me-1"></i>}
            {tugas.status === 'Pending' && <i className="bi bi-pause-circle me-1"></i>}
            {tugas.status}
          </span>
        </div>
      </div>

      {/* Baris Tombol Aksi */}
      <div className="task-card-actions">
        <div className="status-selector-wrapper">
          <label htmlFor={`status-select-${tugas.id}`} className="visually-hidden">Ubah Status</label>
          <select
            id={`status-select-${tugas.id}`}
            value={tugas.status}
            onChange={(e) => onUbahStatus(tugas.id, e.target.value)}
            className="select-status-action"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          onClick={() => onUbahStatus(tugas.id, isCompleted ? 'In Progress' : 'Completed')}
          className={`btn-action-status ${isCompleted ? 'btn-reopen' : 'btn-complete'}`}
          title={isCompleted ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
        >
          <i className={`bi ${isCompleted ? 'bi-arrow-counterclockwise' : 'bi-check-lg'}`}></i>
          {isCompleted ? 'Batal Selesai' : 'Selesai'}
        </button>

        <button
          onClick={() => onHapus(tugas.id)}
          className="btn-action-delete"
          title="Hapus tugas"
        >
          <i className="bi bi-trash3"></i>
          Hapus
        </button>
      </div>
    </article>
  );
}
