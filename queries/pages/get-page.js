import { gql } from "@apollo/client";

export const GET_PAGE =
    gql`
    query GET_PAGE($uri:String){
       page:pageBy(uri:$uri) {
            slug
            id
            title
            content
            }
        }
    `

 
export const GET_PATHS = 
gql`
query GET_PATHS {
    pages {
            nodes{
                id
                title
                uri
            }
    }
}
`