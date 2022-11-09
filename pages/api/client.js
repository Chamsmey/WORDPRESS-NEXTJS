import { ApolloClient, InMemoryCache } from "@apollo/client";


const defaultOptions= {
    watchQuery:{
        fetchPolicy:'no-cache',
        errorPolicy:'ignore',
    },
    query:{
        fetchPolicy:'no-cache',
        errorPolicy:'all'
    }
}
const cache = new InMemoryCache({
    resultCaching:false
})
const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_URL+'/admin/graphql',
    cache,
    defaultOptions
});

export default client;