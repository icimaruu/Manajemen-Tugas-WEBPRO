export default function KartuTugas({ tugas, onHapus, onUbahStatus }) {
  return (
    <div className={`task-item ${tugas.done ? 'completed' : ''}`}>
      <div>
        <span className={`task-title ${tugas.done ? 'done' : ''}`}>
          {tugas.title}
        </span>
        <span className="badge-priority">{tugas.priority}</span>
      </div>
      <div className="btn-action-group">
        <button onClick={() => onUbahStatus(tugas.id)} className="btn-toggle">
          {tugas.done ? 'Batal' : 'Selesai'}
        </button>
        <button onClick={() => onHapus(tugas.id)} className="btn-delete">
          Hapus
        </button>
      </div>
    </div>
  );
}