export default function Header() {
  return (
    <header className="app-header">
      <div className="header-navbar">
        <div className="brand-container">
          <span className="brand-icon">
            <i className="bi bi-check2-square"></i>
          </span>
          <div>
            <h1 className="brand-title">TaskFlow</h1>
            <span className="brand-tagline">Manajemen Tugas Akademik</span>
          </div>
        </div>

        <div className="user-profile-badge">
          <div className="user-avatar">
            <i className="bi bi-person-fill"></i>
          </div>
          <div className="user-info">
            <span className="user-name">Farizqy Akhram Nugraha</span>
            <span className="user-role">NIM: 103022400132 • Mahasiswa</span>
          </div>
        </div>
      </div>

      <div className="hero-banner">
        <div className="hero-content">
          <span className="hero-pill">
            <i className="bi bi-layers-fill me-1"></i> Modul 6 React Dasar • Integrasi Desain W4
          </span>
          <h2 className="hero-title">Kelola Tugas Perkuliahan Anda</h2>
          <p className="hero-subtitle">
            Aplikasi frontend interaktif berbasis React dengan 5 komponen terstruktur, controlled form, dan pemantauan status penugasan akademik secara real-time.
          </p>
        </div>
      </div>
    </header>
  );
}
