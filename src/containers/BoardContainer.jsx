import React from 'react';
import Board from '../components/Board';

class BoardContainer extends React.Component {
	constructor() {
		super();

		const initialGrid = new Array(100);
		initialGrid.fill(false);
		this.state = { grid: initialGrid };
		this.interval = null;

		this.updateSquare = this.updateSquare.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
	}

	componentDidUpdate(prevProp) {
		const shouldStartTimer = (!prevProp.isPlaying && this.props.isPlaying);
		const shouldStopTimer = (prevProp.isPlaying && !this.props.isPlaying);

		if(shouldStartTimer) {
			this.startTimer();
		} else if(shouldStopTimer) {
			this.stopTimer();
		}
	}

	startTimer() {
		this.interval = setInterval(() => {
			const newGrid = this.state.grid.map((square) => {
				return !square;
			});
			this.setState({ grid: newGrid });
		}, 1000);
	}

	stopTimer() {
		clearInterval(this.interval);
		this.interval = null;
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

BoardContainer.propTypes = {
	isPlaying: React.PropTypes.bool.isRequired
};

export default BoardContainer;
