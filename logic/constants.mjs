const knight_moves = [[2, -1], [2, 1], [-2, 1], [-2, -1], [1, -2], [1, 2], [-1, 2], [-1, -2]]

const errors = {
    unsolvable : 'The knight cannot reach the position in this state'
}

const threshold = 0.7

export {knight_moves, errors, threshold};