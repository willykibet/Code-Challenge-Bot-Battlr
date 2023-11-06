// BotCard.js
import React from "react";

function BotCard({ record, clickEvent, deleteBot }) {
  const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

  return (
    <div className="col-md-4">
      <div
        className="card mb-4 box-shadow"
        key={record.id}
        onClick={() => clickEvent(record)}
      >
        <img
          className="card-img-top"
          style={{ width: "80%" }}
          src={record.avatar_url}
          alt="Card"
        />
        <div className="card-body">
          <p className="card-text">
            Name: {record.name}
            <i className={botTypeClasses[record.bot_class]} />
          </p>
          <p className="card-text">health: {record.health}</p>
          <p className="card-text">damage: {record.damage}</p>
          <p className="card-text">armor: {record.armor}</p>

          <p className="card-text">{record.catchphrase}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(record);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;