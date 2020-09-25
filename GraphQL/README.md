# GraphQL


## Setup

**Step 1)** Inside your project directory create two folders, **client** and **server**

### Server side

**Step 2)** Inside server, initialize project with npm using : 
```
npm init
```
Set **server.js** as the starting point, and complete the initialization process.


**Step 3)** Next install the required dependencies using the following commands : 
```
npm install express
npm install mongoose
npm install cors
npm install express-graphql
npm install graphql
npm install lodash
npm install nodemon --save-dev
```

**Step 4)** Next create **server.js** file, and copy code from **server.js** from repo.

<details>
  <summary>server.js</summary>
  
  ```javascript
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// Allow Cross Origin Requests
app.use(cors());

// MONGOOSE
mongoose.connect(`mongodb://localhost/graphQL`, {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    // Connected
    console.log("Connected to MongoDB !");
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
  ```
</details>


**Step 5)** Create **models** and **schema** folders as per requirements (if needed copy code from repo for samples of each).

<details>
  <summary>sampleSchema.js</summary>
  
  ```javascript
const graphql = require('graphql');
const _ = require('lodash');

// Dummy data
var books = [
    {name: 'Name of the wind',genre: 'Fantasy', id: '1', aid:'1'},
    {name: 'The Final Empire',genre: 'Fantasy', id: '2', aid:'2'},
    {name: 'The Long Earth',genre: 'Sci-fi', id: '3', aid:'3'},
    {name: 'The Hero of Ages',genre: 'Fantasy', id: '4', aid:'2'},
    {name: 'The Color of Magic',genre: 'Fantasy', id: '5', aid:'3'},
    {name: 'The Light Fantastic',genre: 'Fantasy', id: '6', aid:'3'},
];

var authors = [
    {name: 'Patrick Rothfuss', age:44, id: '1'},
    {name: 'Brandon Sanderson', age:42, id: '2'},
    {name: 'Terry Pratchett', age:66, id: '3'},
]

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList,
    GraphQLSchema, 
    GraphQLID,
    GraphQLInt } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, {id: parent.aid});
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, {aid: parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // Code to get data from db
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // Code to get data from db
                return _.find(authors, {id: args.id});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
  ```
</details>

### Client side

**Step 6)** Inside the client folder run the following command : 
```
npx create-react-app .
```


**Step 7)** Remove **logo.svg**, **App.css** and **App.test.js**


**Step 8)** Next install the required dependencies for client using the following commands : 
```
npm install apollo-boost
npm install graphql
npm install react-apollo
```

**Step 9)** Copy code from **App.js** in repo to your local file.
<details>
  <summary>App.js</summary>
  
  ```javascript
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

  ```
</details>


**Step 10)** Inside src folder create **components** and **queries** folders.
<details>
  <summary>queries.js</summary>
  
  ```javascript
import {gql} from 'apollo-boost';


const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`


const getBookQuery = gql`
query($id:ID) {
    book(id:$id) {
        id
        name
        genre
        author{
            id
            name
            age
            books {
                name
                id 
            }
        }
    }
}
`

const addBookMutation = gql`
mutation($name:String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        id
    }
}
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};
  ```
</details>

## Running the Project

You can run the project using the following commands
* Inside server, use **nodemon server.js** or **node server.js** to run the server
* Inside client, use **npm start** to run the client
