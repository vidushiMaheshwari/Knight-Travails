import knight_moves from "./constants.js"
import {Algorithms} from "./Algorithms.mjs"
import {ChessSquare} from "./ChessSquare.mjs"

class ChessBoard {
    constructor(width=8, height=8, startSquare=null, endSquare=null) {
        this.width = width
        this.height = height
        this.startSquare = startSquare
        this.endSquare = endSquare
        this.numUnblocked = width * height;
        this.solve = null

        let board = []
        for (let i = 0; i < width; i++) {
            board.push([])
            for (let j = 0; j < height; j++) {
                board[i].push(new ChessSquare(i, j))
            }
        }
        this.board = board
    }

    getPossibleNext(x, y) {
        let rList = []
        for (let i = 0; i < knight_moves.length(); i++) {
            new_x = x - knight_moves[i][0]
            new_y = y - knight_moves[i][1]
            if (new_x > 0 && new_x < this.width && new_y > 0 && new_y < this.height) {
                // present in board
                if(!this.board[new_x][new_y].blocked) {
                    rList.push(this.board[new_x][new_y])
                }
            }
        }
        return rList
    }

    solver(chessBoard) {
        if (this.solve == None || this.solve[0] != this.startSquare) {
            var result = Algorithms.dijkstra(chessBoard);
            if (result[1] == true) {
                this.solve = [startSquare, result[0]];
            }
        }
        
        let map = result[0];
        if (!map.has(endSquare)) {
            throw TypeError(errors.unsolvable);
        }

        let path = [];
        let curr = this.endSquare;
        let numMoves = map.get(this.endSquare)[1]

        while (curr != null) {
            path.push(curr);
            curr = map.get(curr)[0];
        }
        return [path.reverse(), numMoves];
    }
}

let chessBoard = new ChessBoard();
console.log(chessBoard);