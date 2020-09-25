import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    render() {
        console.log(this.props);
        if (this.props.data.loading) {
            return (<div>Loading books . . .</div>)
        } else {
            let books =  this.props.data.books.map(book => <li key={book.id} onClick={(e)=>this.setState({selected:book.id})}>{book.name}</li>)
            return (
                <div>
                    <ul id='book-list'>
                        {books}
                    </ul>
                    <BookDetails bookId={this.state.selected}/>
                </div>
            );
        }
    }
}

export default graphql(getBooksQuery)(BookList);
