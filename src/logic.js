const Logic = (function() {
	let gridSize;

	const setGridSize = function(size) {
		gridSize = size;
	};

	const getNextGrid = function(grid) {
		return grid.map((square, i) => {
			if(square) {
				return shouldKill(countNeighbors(grid, i));
			} else {
				return shouldReproduce(countNeighbors(grid, i));
			}
		});
	};

	const countNeighbors = function(grid, i) {
		const neighbors = getNeighbors(grid, i);
		return neighbors.filter((square) => square).length;
	};

	const getNeighbors = function(grid, index) {
		const top = grid[index - gridSize];
		const bottom = grid[index + gridSize];
		const left = grid[index - 1];
		const right = grid[index + 1];
		const topLeft = grid[index - gridSize - 1];
		const topRight = grid[index - gridSize + 1];
		const bottomLeft = grid[index + gridSize - 1];
		const bottomRight = grid[index + gridSize + 1];
		const neighbors = [
			top, bottom, left, right,
			topLeft, topRight, bottomLeft, bottomRight
		];

		return neighbors;
	};

	const shouldKill = function(aliveCount) {
		const isUnderPopulated = aliveCount < 2;
		const isOverPopulated = aliveCount > 3;

		return !(isUnderPopulated || isOverPopulated);
	};

	const shouldReproduce = function(aliveCount) {
		return aliveCount === 3;
	};

	return {
		setGridSize,
		getNextGrid
	};
})();

export default Logic;
