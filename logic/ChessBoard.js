import {knight_moves} from "constants.js"

class ChessBoard {
    constructor(width=8, height=8) {
        this.width = width
        this.height = height

        let board = []
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                board[i][j] = new ChessSquare(i, j)
            }
        }
        this.board = board
    }

    getPossibleNext(x, y) {
        let rList = []
        for (let i = 0; i < knight_moves.length(); i++) {
            new_x = x - knight_moves[i]
            new_y = y - knight_moves[i]
            if (new_x > 0 && new_x < this.width && new_y > 0 && new_y < this.height) {
                // present in board
                if(!this.board[new_x][new_y].blocked) {
                    rList.push(this.board[new_x], new_y)
                }
            }
        }
        return rList
    }

}