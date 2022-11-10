import { gql } from "@apollo/client";

export const GET_NAVBAR_MENU=gql`
query navbarMenu {
    pages {
      nodes {
        id
        slug
        title
        uri
      }
    }
  }
`