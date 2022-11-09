import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import client from "./api/client";
import RootLayout from "./layout";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RootLayout>
      <Component {...pageProps} />
      </RootLayout>
    </ApolloProvider>
  );
}

export default MyApp;
