
// Given an array of numbers, and a number n, split the array into slices of lenght n
// eg. [1, 2, 3, 4, 5, 6, 7], 2 -> [[1, 2], [3, 4], [5, 6], [7]]
export const splitEvery = (xs, n) => {
	const response = []

	for (let i = 0; i < xs.length; i++) {
		const chunk = []
		for (let j = 0; j < n; j++) {
			if (i < xs.length) {
				chunk.push(xs[i])
			}
			if (j < n - 1) {
				i++
			}
		}
		response.push(chunk)
	}

	return response
}

const tests = [
	[splitEvery, [[1, 2, 3, 4, 5, 6, 7], 2], [[1, 2], [3, 4], [5, 6], [7]]],
	[splitEvery, [[1], 1], [[1]]],
	[splitEvery, [[1, 2, 3, 4, 5, 6, 7], 3], [[1, 2, 3], [4, 5, 6], [7]]],
]

export default tests
