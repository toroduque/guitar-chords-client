import React from 'react';
import { render } from '@testing-library/react';
import FretBoard from './FretBoard';

const mockChord = {
  root: "C",
  quality: "major",
  position: {
    E: { fret: 0, finger: 0 },
    A: { fret: 3, finger: 3 },
    D: { fret: 2, finger: 2 },
    G: { fret: 0, finger: 0 },
    B: { fret: 1, finger: 1 },
    e: { fret: 0, finger: 0 }
  }
}

test('renders Testing this', () => {
  const { getByText } = render(<FretBoard chord={mockChord} />);
  const linkElement = getByText(/3/i);
  expect(linkElement).toBeInTheDocument();
});
