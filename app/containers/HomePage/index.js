import React from 'react';
import { FormattedMessage } from 'react-intl';
import ViewerTiles from 'components/ViewerTiles';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <ViewerTiles />
    </h1>
  );
}
