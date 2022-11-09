import { gql } from "@apollo/client";

const GET_PAGES = () => {
    query =`query allPosts {
        posts{
          nodes{
            id
            slug
            title
          }
        }
      }`
    return ( query );
}
 
export default GET_PAGES;