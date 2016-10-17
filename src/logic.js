const Logic = (function() {
	const getNextGrid = function(grid) {
		const newGrid = grid.slice();

		for(let i = 0; i < newGrid.length; i++) {
			const neighbors = getNeighbors(grid, i);
			const aliveNeighborsCount = neighbors.filter((square) => square).length;

			const isCurrentSquareAlive = grid[i];
			if(isCurrentSquareAlive) {
				newGrid[i] = kill(aliveNeighborsCount);
			} else {
				newGrid[i] = reproduce(aliveNeighborsCount);
			}
		}

		return newGrid;
	};

	const getNeighbors = function(grid, index) {
		const top = grid[index - 10];
		const bottom = grid[index + 10];
		const left = grid[index - 1];
		const right = grid[index + 1];
		const topLeft = grid[index - 11];
		const topRight = grid[index - 9];
		const bottomLeft = grid[index + 9];
		const bottomRight = grid[index + 11];
		const neighbors = [
			top, bottom, left, right,
			topLeft, topRight, bottomLeft, bottomRight
		];

		return neighbors;
	};

	const kill = function(aliveCount) {
		const isUnderPopulated = aliveCount < 2;
		const isOverPopulated = aliveCount > 3;

		return !(isUnderPopulated || isOverPopulated);
	};

	const reproduce = function(aliveCount) {
		return aliveCount === 3;
	};

	return {
		getNextGrid
	};
})();

export default Logic;
