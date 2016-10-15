import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithClass,
	findRenderedComponentWithType,
	Simulate
} from 'react-addons-test-utils';
import Board from '../../src/components/Board';
import BoardContainer from '../../src/containers/BoardContainer';
import { expect } from 'chai';
import sinon from 'sinon';

describe('BoardContainer', () => {
	it('should render a Board', () => {
		const component = renderIntoDocument(<BoardContainer />);
		const board = findRenderedComponentWithType(component, Board);

		expect(board).to.be.ok;
	});

	it('should initially render with no alive squares', () => {
		const component = renderIntoDocument(<BoardContainer />);
		const aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');

		expect(aliveSquares.length).to.equal(0);
	});

	it('should toggle squares between alive and not alive when clicked', () => {
		const component = renderIntoDocument(<BoardContainer />);
		const squares = scryRenderedDOMComponentsWithClass(component, 'square');

		let aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(0);

		Simulate.click(squares[0]);
		Simulate.click(squares[1]);
		aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(2);

		Simulate.click(squares[0]);
		Simulate.click(squares[1]);
		aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(0);
	});

	it('should start a timer', () => {
		const clock = sinon.useFakeTimers();
		const node = document.createElement('div');
		const component = ReactDOM.render(<BoardContainer isPlaying={false} />, node);
		const squares = scryRenderedDOMComponentsWithClass(component, 'square');

		Simulate.click(squares[0]);
		let aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(1);

		ReactDOM.render(<BoardContainer isPlaying={true} />, node);
		clock.tick(1000);
		// In the interval method, the BoardContainer is simply toggling the alive state
		aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(99);

		clock.restore();
	});
});
