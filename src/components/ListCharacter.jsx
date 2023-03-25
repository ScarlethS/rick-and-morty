import React, { useState } from "react";
import "./ListCharacter.css";
import { ModalDetailsCharacter } from "./ModalDetailsCharacter";

const ListCharacteres = ({ character, setSearchName, searchName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleInputSearch = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search by Name"
          className="search-box-input"
          value={searchName}
          onChange={handleInputSearch}
        />
      </div>

      <div className="container-cards">
        {character ? (
          character.map((item) => (
            <div className="cards" key={item.id}>
              <div className="container-info">
                <div className="name">
                  <span>{item.name}</span>
                </div>
                <img
                  className="character-image"
                  src={item.image}
                  onClick={() => {
                    setShowModal(true);
                  }}
                />
                <div className="episodes">
                  <span>Episodes:</span>
                  <p>
                    {item.episode
                      .map((ep) => ep.split("/").slice(-1)[0])
                      .join(", ")}
                  </p>
                </div>
                <div className="status">
                  {item.status === "Alive" ? (
                    <p className="alive">{item.status}</p>
                  ) : item.status === "Dead" ? (
                    <p className="dead">{item.status}</p>
                  ) : (
                    <p className="unknow">{item.status}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>There is nothing here</p>
        )}
      </div>
      {showModal && <ModalDetailsCharacter closeModal={setShowModal} />}
    </>
  );
};

export default ListCharacteres;
