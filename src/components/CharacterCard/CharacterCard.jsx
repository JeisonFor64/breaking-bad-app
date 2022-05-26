import React from "react";
import { Link } from "react-router-dom";
import { deleteCharacter } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "../../styles/CharacterCard.module.css";

const CharacterCard = ({ name, img, id }) => {

  const dispatch = useDispatch();

  let onClose = (e) => { // onClose = cerrar
    e.preventDefault()
    dispatch(deleteCharacter(id))
  }

  return (
    <div className={style.card}>
      <div className={style.cardInner}>
        <div className={style.cardFront}>
          <img src={img} alt={name} />
        </div>
        <div className={style.cardBack}>
          <button className={style.closeButton} onClick={(e) => {onClose(e)}}>&times;</button>
          <h1>{name}</h1>
          <Link to={`/details/${id}`}>
            <h2>Details</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;



// function mapDispatchToProps(dispatch) {
//   return {
//     deleteCharacter: characterID => dispatch(deleteCharacter(characterID))
//   }
// }