
// Write a function that computes the running total of a list.
export const totalList = (xs) => {

	return xs.reduce((acc, curr) => acc + curr)
}

const tests = [
	[totalList, [[1, 2, 3, 4, 5]], 15],
	[totalList, [[1, 2, 3, 4, 5, 6]], 21],
	[totalList, [[1]], 1],
	[totalList, [[1, 3, 5, 123, 331, 391, 0]], 854],
]

export default tests

