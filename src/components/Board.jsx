import React from 'react';
import BoardSquare from './BoardSquare';

class Board extends React.Component {
	constructor() {
		super();

		this.renderSquare = this.renderSquare.bind(this);
	}

	renderSquare(i) {
		const x = i % 10;
		const y = Math.floor(i / 10);
		const alive = this.props.grid[i];

		const handleClick= (x, y) => { this.props.handleSquareClick(x, y); };

		return (
			<BoardSquare key={i}
				alive={alive}
				x={x}
				y={y}
				handleClick={handleClick} />
		);
	}

	render() {
		const squares = [];
		for(let i = 0; i < this.props.grid.length; i++) {
			squares.push(this.renderSquare(i));
		}

		return (
			<div className="board">
				{squares}
			</div>
		);
	}
}

Board.propTypes = {
	grid: React.PropTypes.array.isRequired,
	handleSquareClick: React.PropTypes.func.isRequired
};

export default Board;
