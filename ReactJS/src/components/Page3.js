import React, {Component} from 'react';

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
        return (
            <div className='container'>
                <h4 className='center'>Page 3</h4>
                <h5 className='center'>Params : {this.state.id}</h5>
            </div>
        );
    }
}

export default Page3;
