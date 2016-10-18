import React, { PropTypes } from 'react';
import Square from './Square';

class BoardSquare extends React.Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
		this.getSquareStyle = this.getSquareStyle.bind(this);
	}

	handleClick() {
		this.props.handleClick(this.props.x, this.props.y);
	}

	getSquareStyle() {
		const sizeInPercentage = (1 / this.props.height) * 100;
		return {
			height: `${sizeInPercentage}%`,
			width: `${sizeInPercentage}%`,
		};
	}

	render() {
		return (
			<div className="boardSquare"
				onClick={this.handleClick}
				style={this.getSquareStyle()}>
				<Square alive={this.props.alive} />
			</div>
		);
	}
}

BoardSquare.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	alive: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired
};

export default BoardSquare;
