import React from 'react';
import Board from '../components/Board';

class BoardContainer extends React.Component {
	constructor() {
		super();

		const initialGrid = new Array(100);
		initialGrid.fill(false);
		this.state = { grid: initialGrid };

		this.updateSquare = this.updateSquare.bind(this);
	}

	updateSquare(x, y) {
		const newGrid = this.state.grid.slice();
		const index = (y * 10) + x;
		newGrid[index] = !newGrid[index];

		this.setState({ grid: newGrid });
	}

	render() {
		return (
			<Board
				grid={this.state.grid}
				handleSquareClick={this.updateSquare}
			/>
		);
	}
}

export default BoardContainer;
