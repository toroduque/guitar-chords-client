import { gql } from 'apollo-boost'

export const GET_CHORDS = gql`
    {
        getChords {
            root,
            quality,
            position {
                E { fret, finger },            
                A { fret, finger },
                D { fret, finger },
                G { fret, finger },
                B { fret, finger },
                e { fret, finger }
            }
        }
    }
`