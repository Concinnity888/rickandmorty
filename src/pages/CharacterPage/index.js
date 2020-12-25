import React from 'react';

import { CardCharacter } from '../../components/CardCharacter';

export const CharacterPage = ({ character }) => {
  return (
    <div>
      {character && <CardCharacter name={character.name} image={character.image} status={character.status} species={character.species} gender={character.gender} location={character.location.name} fullDescription />}
    </div>
  );
};
