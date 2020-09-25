import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})
// run npm install apollo-boost react-apollo graphql
function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>GraphQL Book List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;
