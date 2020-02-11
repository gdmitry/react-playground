import React, { useState, useEffect } from 'react';
import { fetchGraphQL } from '../../../server/data/environment';
// import classes from './index.scss';

// import { createFragmentContainer, graphql } from 'react-relay';

export function Tiles() {
  const [count, setCount] = useState(0);
  // const { text, author } = props.quote;

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    fetchGraphQL(`
      query {
        allTrainers {
          id,
          name,
          specialty,
          gymId,
          gym {
            name
          }
        }
      }
    `).then(response => {
      console.log(response);
    });
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Tiles;
