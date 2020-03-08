import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

// const client = new ApolloClient({
//   uri: "/graphql"
// });

// client
//   .query({
//     query: gql`
//       {
//         getUsers {
//           id
//           firstName
//           lastName
//           email
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  // <ApolloProvider client={client}>
  <App />,
  // </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
