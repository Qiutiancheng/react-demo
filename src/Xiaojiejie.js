import React, {Component} from "react";
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue:'Qiutiancheng',
            list:['金花','银花']
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteService = this.deleteService.bind(this)
        this.addService = this.addService.bind(this)
    }
    

    render(){
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.inputChange}></input>
                <button onClick={this.addService}>Add</button>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return (
                            <XiaojiejieItem 
                                key={item+index} 
                                content={item} 
                                index={index}
                                deleteService={this.deleteService}
                                />
                        )
                    })}
                </ul>
            </div>
        )
    }
    
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    addService(){
        if(!this.state.inputValue) return
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteService(index){
        const {list} = this.state
        list.splice(index,1)
        this.setState({list})
    }
}

export default Xiaojiejie