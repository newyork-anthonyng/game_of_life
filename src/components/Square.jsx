import React from 'react';

function Square({ alive }) {
	const myClass = alive ? 'square alive' : 'square';

	return (
		<div className={myClass} />
	);
}

Square.propTypes = {
	alive: React.PropTypes.bool
};

export default Square;
