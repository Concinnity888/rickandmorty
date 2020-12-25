import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const CardCharacter = (props) => {
  let isFullDescription = props.fullDescription;
  let status = props.status === 'Alive' || props.status === 'Dead' ? props.status : false;
  const objStatus = {
    'Alive': 'CardCharacter__status_green',
    'Dead': 'CardCharacter__status_red'
  }

  return (
    <article className={`CardCharacter${isFullDescription ? ' CardCharacter_big' : ''}`}>
      {isFullDescription && <Link className="ButtonBack" to="/">Назад</Link>}

      <img className="CardCharacter__image" src={props.image} alt={props.name} id={props.id} />

      {!isFullDescription ?
        <Link className="CardCharacter__link" to={`/character${props.id}`} onClick={props.onClick}>
          <h2 className="CardCharacter__name">{props.name}</h2>
        </Link>
        :
        <div className="CardCharacter__desc">
          <div>
            <h2 className="CardCharacter__name CardCharacter__name_small">{props.name}</h2>
            <div className="CardCharacter__wrap-status">
              {status && <span className={`CardCharacter__status ${objStatus[status]}`}>{props.status} - </span>}
              <span>{props.species}</span>
            </div>
          </div>

          <dl>
            <dt>Gender</dt>
            <dd>{props.gender}</dd>

            <dt>Location</dt>
            <dd>{props.location}</dd>
          </dl>
        </div>
      }
    </article>
  );
};
