import React, { PropTypes } from 'react';
import Square from './Square';

class BoardSquare extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick(this.props.x, this.props.y);
	}

	render() {
		return (
			<div className="boardSquare" onClick={this.handleClick}>
				<Square alive={this.props.alive} />
			</div>
		);
	}
}

BoardSquare.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	alive: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired
};

export default BoardSquare;
