import React, { Component } from 'react';

class XiaojiejieItem extends Component { 
    constructor(props){
        super(props)
        this.deleteService = this.deleteService.bind(this)
    }
    render() { 
        return (
            <li onClick={this.deleteService}>
                {this.props.content}
            </li>
        )
    }

    deleteService(){
        this.props.deleteService(this.props.index)
    }
}

export default XiaojiejieItem;