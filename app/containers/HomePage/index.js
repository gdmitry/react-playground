import React from 'react';
import { FormattedMessage } from 'react-intl';
import Example from 'components/Example';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <Example />
    </h1>
  );
}
