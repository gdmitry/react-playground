import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../server/data/environment';
import Tile from '../Tile';
// import classes from './index.scss';

export default function ViewerTiles() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ViewerTilesQuery {
          allTrainers {
            id
            ...Tile_trainerData
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <div>
            {props.allTrainers.map(data => (
              <Tile key={data.id} trainerData={data} />
            ))}
          </div>
        );
      }}
    />
  );
}

ViewerTiles.propTypes = {
  allTrainers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      specialty: PropTypes.string,
    }),
  ),
};
