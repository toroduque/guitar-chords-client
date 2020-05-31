import React from 'react';
import { render } from '@testing-library/react';
import FretBoard from './FretBoard';

test('renders Testing this', () => {
  const { getByText } = render(<FretBoard />);
  const linkElement = getByText(/3/i);
  expect(linkElement).toBeInTheDocument();
});
