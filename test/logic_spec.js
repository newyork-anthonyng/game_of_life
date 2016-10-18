import Logic from '../src/Logic';
import { expect } from 'chai';

describe('Logic', () => {
	const gridSize = 10;
	let grid;

	beforeEach(() => {
		Logic.setGridSize(gridSize);
		grid = Array(Math.pow(gridSize, 2));
		grid.fill(false);
	});

	afterEach(() => {
		grid = null;
	});

	it('should kill cells with no live neighbors', () => {
		grid[11] = true;
		grid[80] = true;

		const nextGrid = Logic.getNextGrid(grid);
		const aliveSquaresCount = nextGrid.filter((square) => square).length;
		expect(aliveSquaresCount).to.equal(0);
	});

	it('should kill cells with one live neighbor', () => {
		grid[11] = true;
		grid[12] = true;
		grid[80] = true;
		grid[81] = true;

		const nextGrid = Logic.getNextGrid(grid);
		const aliveSquaresCount = nextGrid.filter((square) => square).length;
		expect(aliveSquaresCount).to.equal(0);
	});

	it('should keep alive cells with two neighbors', () => {
		grid[2] = true;
		grid[11] = true;
		grid[12] = true;

		const nextGrid = Logic.getNextGrid(grid);
		expect(nextGrid[12]).to.be.true;
	});

	it('should keep alive three adjacent cells', () => {
		grid[11] = true;
		grid[12] = true;
		grid[1] = true;

		const nextGrid = Logic.getNextGrid(grid);
		expect(nextGrid[11]).to.be.true;
		expect(nextGrid[12]).to.be.true;
		expect(nextGrid[1]).to.be.true;
	});

	it('should kill cells with more than three neighbors', () => {
		// surround grid[11] with 4 neighbors
		grid[11] = true;
		grid[12] = true;
		grid[21] = true;
		grid[10] = true;
		grid[1] = true;

		const nextGrid = Logic.getNextGrid(grid);
		expect(nextGrid[11]).to.be.false;
		expect(nextGrid[1]).to.be.true;
		expect(nextGrid[10]).to.be.true;
		expect(nextGrid[12]).to.be.true;
		expect(nextGrid[21]).to.be.true;
	});

	it('should resurrect dead cells with exactly three neighbors', () => {
		// surround grid[11] with 3 neighbors
		grid[0] = true;
		grid[1] = true;
		grid[10] = true;

		const nextGrid = Logic.getNextGrid(grid);
		const aliveSquaresCount = nextGrid.filter((square) => square).length;
		expect(aliveSquaresCount).to.equal(4);
		expect(nextGrid[11]).to.be.true;
	});
});
