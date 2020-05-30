import React from 'react'
import FingerPosition from '../FingerPosition'
import * as styled from './FretBoard.style'

interface IProps {
    chord: any
}

const FretBoard = ({ chord } : IProps) => {

    const renderFrets = (chord : any) => {
        const pressedStrings = getPressedStringsIndices(chord.position)
        const NUMBER_OF_FRETS = 24
        const frets = Array(NUMBER_OF_FRETS).fill(0).map((_,i) => (
            <styled.Fret key={i}>
                <FingerPosition 
                    pressedStrings={pressedStrings} 
                    currentIndex={i}
                />
            </styled.Fret>
        ))
        return frets
    }

    const getPressedStringsIndices = (position : any) => {
        const indicesArr = []

        if (position.E.fret > 0) {
            const { fret, finger } = position.E
            const StringIndex = 0 + fret
            indicesArr.push({ index: StringIndex, finger })
        }

        if (position.A.fret > 0) {
            const { fret, finger } = position.A
            const StringIndex = 3 +  fret
            indicesArr.push({ index: StringIndex, finger })
        }

        if (position.D.fret > 0) {
            const { fret, finger } = position.D
            const StringIndex = 7 + fret
            indicesArr.push({ index: StringIndex, finger })
        }

        if (position.G.fret > 0) {
            const { fret, finger } = position.G
            const StringIndex = 11 + fret
            indicesArr.push({ index: StringIndex, finger })
        }

        if (position.B.fret > 0) {
            const { fret, finger } = position.B
            const StringIndex = 15 + fret
            indicesArr.push({ index: StringIndex, finger })
        }

        if (position.e.fret > 0) {
            const { fret, finger } = position.e
            const StringIndex = 19 + fret
            indicesArr.push({ index: StringIndex, finger })
        }

        return indicesArr
    }

    return (
        <styled.FretBoardWrapper>
           {
               renderFrets(chord)
           }
        </styled.FretBoardWrapper>
    )
}

export default FretBoard