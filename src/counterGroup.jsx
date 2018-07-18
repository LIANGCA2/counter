import React, {Component} from 'react';
import CountClick from "./counter"

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sumCount: 0
        }
    }

    updateSumCount = (count) => {
        this.setState({sumCount: this.state.sumCount + count})
    }

    render() {
        var allCounter = [];
        for (var i = 0; i < this.props.number; i++) {
            allCounter.push(<CountClick updateSumCount={(e) => this.updateSumCount(e)} key={i}/>);
        }
        return (<div>

                {allCounter}
                <p>{this.state.sumCount}</p>
            </div>
        )
    }
}

export default Group;