import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    //as square components no longer maintain state the square components recieve values from the board component
    //so the square components are now controller components, the Board component controls them
    //Square component has been changed to be a function component, this means it does not have state and only has a render method. 
    //Instead of defining a class which extends Component, we write a function that takes props as input and returns what should be rendered
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        //we are replacing the data, not mutating aka directly changing the data's value
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares, });
    }

    renderSquare(i){
        return (
            <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next Player: X';
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* status */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

