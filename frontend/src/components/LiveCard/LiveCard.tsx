import "./LiveCard.css";

function LiveCard() {
  return (
    <div className="live-card">

      <div className="live-header">
        <span className="live-status"></span>
        <p>Event</p>
      </div>

      <h2>david</h2>

      <div className="divider"></div>

      <div className="row">
        <span>📸 Fotos</span>
        <strong>1,248</strong>
      </div>

      <div className="row">
        <span>🎥 Videos</span>
        <strong>312</strong>
      </div>

      <div className="row">
        <span>👥 Invitados</span>
        <strong>186</strong>
      </div>

      <div className="divider"></div>

      <button>Abrir álbum</button>

    </div>
  );
}

export default LiveCard;