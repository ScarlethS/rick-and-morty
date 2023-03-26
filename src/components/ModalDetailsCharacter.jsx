import React from "react";
import "./ModalDetailsCharacter.css";

export const ModalDetailsCharacter = ({ closeModal }) => {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <div className="modal-content">
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
            <div className="container-details-character">
              <div className="details-card">
                <h2 className="card-name">Rick Sanchez</h2>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  alt="Rick Sanchez"
                  className="card-image"
                />
                <div className="content-details">
                  <div className="details-status">
                    <span>Alive</span>
                  </div>
                  <div className="details-gender">
                    <span>Female: Male</span>
                  </div>
                  <div className="details-origin">
                    <span>Origin: Earth (C-137)</span>
                  </div>
                  <div className="details-location">
                    <span>Location: Citadel of Ricks</span>
                  </div>
                  <div className="details-species">
                    <span>Species: Human</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
