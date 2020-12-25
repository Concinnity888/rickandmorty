import React from 'react';

import { CardCharacter } from '../../components/CardCharacter';

import './style.css';

export const HomePage = ({ data, onClickLink }) => {
  return (
    <ul className="ListCharacters">
      {data && data.map(item => (
        <li className="ListCharacters__item" key={item.id}>
          <CardCharacter name={item.name} image={item.image} id={item.id} onClick={() => onClickLink(item)} />
        </li>
      ))}
    </ul>
  );
};
