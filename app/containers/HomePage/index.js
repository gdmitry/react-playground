import React from 'react';
import { FormattedMessage } from 'react-intl';
import Tiles from 'components/Tiles';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <Tiles />
    </h1>
  );
}
