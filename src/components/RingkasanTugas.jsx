export default function RingkasanTugas({ totalTugas }) {
  return (
    <div className="summary-box">
      <strong>Ringkasan:</strong> Total tugas saat ini adalah <strong>{totalTugas}</strong> buah.
    </div>
  );
}