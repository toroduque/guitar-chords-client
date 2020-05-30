import React from 'react'
import * as styled from './FingerPosition.style'

interface IProps {
    pressedStrings: any[],
    currentIndex: number
}

const FingerPosition = ({ pressedStrings, currentIndex }: IProps) => {
    const fingerPosition = pressedStrings.find(item => item.index === currentIndex)

    return (
        <React.Fragment>
            {
                fingerPosition &&
                    <styled.FingerPositionWrapper>
                    { fingerPosition.finger }
                </styled.FingerPositionWrapper>
            }
        </React.Fragment>
    
    )
}


export default FingerPosition