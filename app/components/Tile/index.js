import React from 'react';
import PropTypes from 'prop-types';
// import { fetchGraphQL } from '../../../server/data/environment';
// import classes from './index.scss';
import { createFragmentContainer, graphql } from 'react-relay';

export function Tile(props) {
  const { id, name, specialty } = props.trainerData;

  return (
    <div>
      <div>{name}</div>
      <div>{specialty}</div>
      <div>{id}</div>
    </div>
  );
}

Tile.propTypes = {
  trainerData: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    specialty: PropTypes.string,
  }),
};

export default createFragmentContainer(Tile, {
  trainerData: graphql`
    fragment Tile_trainerData on Trainer {
      id
      name
      specialty
    }
  `,
});
