import { gql } from "@apollo/client";

const GET_PAGE =
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

 
export default GET_PAGE;