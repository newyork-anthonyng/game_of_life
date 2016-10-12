import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	Simulate
} from 'react-addons-test-utils';
import BoardSquare from '../../src/components/BoardSquare';
import { expect } from 'chai';

describe('BoardSquare', () => {
	it('should render a square', () => {
		const component = renderIntoDocument(<BoardSquare />);
		const square = findRenderedDOMComponentWithClass(component, 'square');

		expect(square).to.be.ok;
	});

	it('should run callback with coordinates when clicked', () => {
		let handleClickInvoked = false;
		const handleClick = (x, y) => { handleClickInvoked = `${x}, ${y}` };
		const component = renderIntoDocument(<BoardSquare handleClick={handleClick} x={3} y={5} />);
		const square = findRenderedDOMComponentWithClass(component, 'square');

		Simulate.click(square);
		expect(handleClickInvoked).to.equal('3, 5');
	});
});

