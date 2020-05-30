import styled from 'styled-components'

export const FretBoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    width: 18rem;
    margin: 1rem;
	grid-template-rows: repeat(4, auto); 
`

export const Fret = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #4b4b4b;

    &:nth-child(1n) {
        border-left: solid 1px #4b4b4b;
    }

    &:nth-child(4n) {
        border-bottom: solid 1px #4b4b4b;
    }

    &:nth-child(n+21):nth-child(-n+24) {
        border-left: solid 1px #4b4b4b;
        border-top: none;
        border-bottom: none;
    }
`

export const FingerPosition = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: tomato;
    margin-left: -100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`