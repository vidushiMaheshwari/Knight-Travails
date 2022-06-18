import {knight_moves} from "./constants.mjs"
import {Algorithms} from "./Algorithms.mjs"
import {ChessSquare} from "./ChessSquare.mjs"

export class ChessBoard {
    constructor(width=8, height=8, startSquare=null, endSquare=null) {
        this.width = width              // analogous to columns
        this.height = height            // analogous to rows
        this.startSquare = startSquare
        this.endSquare = endSquare
        this.numUnblocked = width * height;
        this.solve = null

        let board = []
        for (let i = 0; i < height; i++) {
            board.push([])
            for (let j = 0; j < width; j++) {
                board[i].push(new ChessSquare(i, j))
            }
        }
        this.board = board
    }

    getPossibleNext(x, y) {
        let rList = []
        for (let i = 0; i < knight_moves.length; i++) {
            let new_x = x - knight_moves[i][0];
            let new_y = y - knight_moves[i][1];
            if (new_x >= 0 && new_x < this.width && new_y >= 0 && new_y < this.height) {
                // present in board
                if(!this.board[new_x][new_y].blocked) {
                    rList.push(this.board[new_x][new_y])
                }
            }
        }
        return rList
    }

    solver() {
        let map;
        if (this.solve == null || this.solve[0] != this.startSquare) {
            var result = Algorithms.dijkstra(this);
            if (result[1] == true) {
                this.solve = [this.startSquare, result[0]];
            }
            map = result[0];
        } else {
            map = this.solve[1];
        }

        if (!map.has(this.endSquare)) {
            throw TypeError(errors.unsolvable);
        }

        let path = [];
        let curr = this.endSquare;
        let numMoves = map.get(this.endSquare)[1];

        while (curr != null) {
            path.push(curr);
            curr = map.get(curr)[0];
        }
        return [path.reverse(), numMoves];
    }
}

let chessBoard = new ChessBoard(100, 100);
chessBoard.startSquare = chessBoard.board[Math.floor(Math.random() * 100)][Math.floor(Math.random() * 100)];
console.log(chessBoard.startSquare);
for (let i = 0; i < 10; i++) {
    chessBoard.endSquare = chessBoard.board[Math.floor(Math.random() * 100)][Math.floor(Math.random() * 100)];
    console.log(chessBoard.endSquare, chessBoard.solver()[1]);
}