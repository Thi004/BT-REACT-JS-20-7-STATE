import {Component} from "react";
import {render} from "@testing-library/react";
import {type} from "@testing-library/user-event/dist/type";

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            a: parseFloat(''),
            b: parseFloat(''),
            sum: 0,
            sub: 0,
            multi: 1,
            div: 0,
        }
    }

    render() {
        return (
            <>
                <>Number 1:</>
                <input type="number" value={this.state.a} onChange={(e1) =>
                    this.setState({a: parseFloat(e1.target.value)})
                }/>
                <br/>
                <>Number 2:</>
                <input type="number" value={this.state.b} onChange={(e2) =>
                    this.setState({b: parseFloat(e2.target.value)})
                }/>
                <br/>
                <button onClick={(add) =>
                    this.setState({sum: this.state.a + this.state.b})}
                >Sum
                </button>
                <button onClick={(add) =>
                    this.setState({sub: this.state.a - this.state.b})}
                >Subtraction
                </button>
                <button onClick={(add) =>
                    this.setState({multi: this.state.a * this.state.b})}
                >Multiplication
                </button>
                <button onClick={(add) =>
                    this.setState({div: this.state.a / this.state.b})}
                >Division
                </button>
                <h4>Result: </h4>
                <h5>Sum: {this.state.sum}</h5>
                <h5>Subtraction: {this.state.sub}</h5>
                <h5>Multiplication: {this.state.multi}</h5>
                <h5>Division: {this.state.div}</h5>

            </>
        )
    }
}