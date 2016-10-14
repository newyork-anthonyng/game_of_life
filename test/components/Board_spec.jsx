import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedDOMComponentsWithClass,
	Simulate
} from 'react-addons-test-utils';
import Board from '../../src/components/Board';
import { expect } from 'chai';

describe('Board', () => {
	it('should render a board with squares', () => {
		const grid = new Array(10);
		const component = renderIntoDocument(<Board grid={grid} />);
		const board = findRenderedDOMComponentWithClass(component, 'board');
		const squares = scryRenderedDOMComponentsWithClass(component, 'square');

		expect(board).to.be.ok;
		expect(squares.length).to.equal(10);
	});

	it('should have no alive squares if grid is all false', () => {
		const grid = new Array(10);
		grid.fill(false);
		const component = renderIntoDocument(<Board grid={grid} />);
		const aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');

		expect(aliveSquares.length).to.equal(0);
	});

	it('should have alive squares if grid has true', () => {
		const grid = new Array(10);
		grid.fill(false);
		grid[1] = true;
		grid[8] = true;

		const component = renderIntoDocument(<Board grid={grid} />);
		const aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');

		expect(aliveSquares.length).to.equal(2);
	});

	it('should run callback when square is clicked', () => {
		let handleSquareClickInvoked = false;
		const cb = (x, y) => { handleSquareClickInvoked = `${x}, ${y}` };

		const grid = new Array(10);
		const component = renderIntoDocument(<Board grid={grid} handleSquareClick={cb} />);
		const squares = scryRenderedDOMComponentsWithClass(component, 'square');

		Simulate.click(squares[0]);
		expect(handleSquareClickInvoked).to.equal('0, 0');

		Simulate.click(squares[1]);
		expect(handleSquareClickInvoked).to.equal('1, 0');
	});
});
