import React, { useState, useEffect } from 'react'
import { GET_CHORDS } from '../../services/queries'
import { useQuery } from '@apollo/react-hooks'
import FingerPosition from '../FingerPosition'

import * as styled from './FretBoard.style'

const FretBoard = () => {
    const { loading, error, data } = useQuery(GET_CHORDS)
    const [ selectedChord, setSelectedChord ] = useState('')

    useEffect(() => {
        if (data) {
            const initialChord = data.getChords[0]
            setSelectedChord(initialChord)
        }
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const renderFrets = (chord : any) => {
        const pressedStrings = getPressedStringsIndices(chord.position)
        const NUMBER_OF_FRETS = 24 // 4 Frets per string (6)
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

            const StringIndex = -1 + fret
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

    const handleOnChange = (event : any) => {
        const selected = event.target.value
        const foundChord = data.getChords.find((c: any) => c.root === selected)

        setSelectedChord(foundChord)
    }

    return (
        <React.Fragment>
            <label>Choose chord</label>

            <select name="chords" defaultValue={selectedChord} onChange={handleOnChange}>
                { data.getChords.map((chord: any) => (
                    <option value={chord.root}>{`${chord.root} ${chord.quality}`}</option>
                ))}
            </select>
           
            <styled.FretBoardWrapper>
                { selectedChord && renderFrets(selectedChord) }
            </styled.FretBoardWrapper>
        </React.Fragment>
    )
}

export default FretBoard