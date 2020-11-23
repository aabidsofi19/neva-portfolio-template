import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY= gql`
query Products{
  Products{
    id
    name
    brand
    }
  }
`

