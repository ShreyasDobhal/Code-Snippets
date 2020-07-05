import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../actions/productActions'

class Page3 extends Component{
    state= {
        id: null
    }
    componentDidMount() {
        console.log(this.props.match.params.userId);
        this.setState({
            id:this.props.match.params.userId
        });
    }
    render() {
        console.log('Props',this.props);
        if (this.props.products.length>0)
            this.props.deleteProduct(this.props.products[0].id);
        return (
            <div className='container'>
                <h4 className='center'>Page 3</h4>
                <h5 className='center'>Params : {this.state.id}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        deleteProduct: (id)=> {
            dispatch(deleteProduct(id))
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Page3);
