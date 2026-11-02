import KartuTugas from './KartuTugas';

export default function DaftarTugas({ daftarTugas, onHapus, onUbahStatus }) {
  if (daftarTugas.length === 0) {
    return <p className="empty-text">Belum ada data tugas</p>;
  }

  return (
    <div>
      {daftarTugas.map((tugas) => (
        <KartuTugas key={tugas.id} tugas={tugas} onHapus={onHapus} onUbahStatus={onUbahStatus} />
      ))}
    </div>
  );
}