import React, {Component} from 'react';
import CountClick from "./counter"

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sumCount: 0,
            couterNumber:0
        }
    }

    couterNum=(event)=>{
        if(event.target.value==""){
            this.setState({sumCount: 0});
        }
        this.setState({couterNumber: event.target.value});
    }





    updateSumCount = (count) => {
        this.setState({sumCount: this.state.sumCount + count})
    }

    render() {
        var allCounter = [];
        for (var i = 0; i < this.state.couterNumber; i++) {
            allCounter.push(<CountClick updateSumCount={(e) => this.updateSumCount(e)} git{i}/>);
        }
        return (<div>
                <input type = "text" onChange={(this.couterNum).bind(this)}></input>
                {allCounter}
                <p >{this.state.sumCount}

                </p>
            </div>
        )
    }






}

export default Group;