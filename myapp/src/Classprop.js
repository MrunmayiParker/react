import React, { Component } from 'react';

class Classprop extends Component {
    render() {
        return (
            <div>
                <h1>hello {this.props.name} from {this.props.place}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Classprop;