import React, { PropTypes } from 'react';
import Board from '../components/Board';

class BoardContainer extends React.Component {
	constructor(props) {
		super(props);

		const initialGrid = new Array(Math.pow(this.props.gridSize, 2));
		initialGrid.fill(false);
		this.state = { grid: initialGrid };
		this.interval = null;

		this.updateSquare = this.updateSquare.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);

		this._shouldStartTimer = this._shouldStartTimer.bind(this);
		this._shouldStopTimer = this._shouldStopTimer.bind(this);
		this._getUpdatedGrid= this._getUpdatedGrid.bind(this);
	}

	componentDidUpdate(prevProp) {
		if(this._shouldStartTimer(prevProp)) {
			this.startTimer();
		} else if(this._shouldStopTimer(prevProp)) {
			this.stopTimer();
		}
	}

	_shouldStartTimer(prevProp) {
		return (!prevProp.isPlaying && this.props.isPlaying);
	}

	_shouldStopTimer(prevProp) {
		return (prevProp.isPlaying && !this.props.isPlaying);
	}

	startTimer() {
		this.interval = setInterval(() => {
			const newGrid = this.props.logic.getNextGrid(this.state.grid);
			this.setState({ grid: newGrid });
		}, this.props.speed);
	}

	stopTimer() {
		clearInterval(this.interval);
		this.interval = null;
	}

	updateSquare(x, y) {
		this.setState({ grid: this._getUpdatedGrid(x, y) });
	}

	_getUpdatedGrid(x, y) {
		const updatedGrid = this.state.grid.slice();
		const index = (y * this.props.gridSize) + x;
		updatedGrid[index] = !updatedGrid[index];

		return updatedGrid;
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
	isPlaying: PropTypes.bool.isRequired,
	gridSize: PropTypes.number.isRequired,
	logic: PropTypes.object.isRequired,
	speed: PropTypes.number.isRequired
};

export default BoardContainer;
