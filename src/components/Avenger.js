import React from "react";
import { Link } from "react-router-dom";
import './Avenger.css';


function Avenger({ avenger }) {
  return (
    <div className="hero-container">
      <div className="card">
        <Link to={`/avengers/${avenger.id}`} className="list-group-item">
          <img
            src={avenger.file_photo}
            alt={avenger.vigilante_title}
            className="img-fluid custom-movie-poster"
          />
        </Link>
        <div className="list-group-item">
          <h5 className="mb-1">{avenger.vigilante_title}</h5>
          <p className="mb-0">{avenger.power_scale}</p>
        </div>
      </div>
    </div>
  );
}

export default Avenger;
