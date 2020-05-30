import React from 'react';
import FretBoard from './components/FretBoard'
import './App.css';

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

function App() {
  return (
    <FretBoard chord={mockChord}/>
  );
}

export default App;
