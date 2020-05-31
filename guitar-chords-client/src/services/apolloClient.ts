import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: 'https://at1y7ctd8g.execute-api.us-east-1.amazonaws.com/dev/graphql'
})
