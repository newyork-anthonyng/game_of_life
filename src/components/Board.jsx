import React from 'react';
import BoardSquare from './BoardSquare';

class Board extends React.Component {
	constructor() {
		super();

		this.renderSquare = this.renderSquare.bind(this);
		this._getSquareProps = this._getSquareProps.bind(this);
	}

	renderSquare(i) {
		return (
			<BoardSquare key={i} {...this._getSquareProps(i)} />
		);
	}

	_getSquareProps(i) {
		const height = Math.sqrt(this.props.grid.length);
		const x = i % height;
		const y = Math.floor(i / height);
		const alive = this.props.grid[i];
		const handleClick= (x, y) => { this.props.handleSquareClick(x, y); };

		return {
			height,
			x,
			y,
			alive,
			handleClick
		};
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
