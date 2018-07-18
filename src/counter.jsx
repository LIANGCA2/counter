import React, {Component} from 'react';


class CountClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    add() {
        this.setState({count: this.state.count + 1})
        this.props.updateSumCount(1);

        console.log(this.state.count);
    }

    sub() {
        this.setState({count: this.state.count - 1})
        this.props.updateSumCount(-1);
        console.log(this.state.count);
    }

    render() {
        return (<p>
            <button onClick={(this.sub).bind(this)}>-</button>
            <button onClick={(this.add).bind(this)}>+</button>
            <span>   count: {this.state.count}</span>
        </p>)
    }

    // counter() {
    //     return (<div>
    //         <button onClick={(this.sub).bind(this)}>-</button>
    //         <button onClick={(this.add).bind(this)}>+</button>
    //         <span>   count: {this.state.count}</span>
    //     </div>)
    // }
}

export default CountClick;