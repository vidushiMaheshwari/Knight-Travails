import { knight_moves } from "./constants.mjs"
import { Algorithms } from "./Algorithms.mjs"
import { ChessSquare } from "./ChessSquare.mjs"
import { errors } from "./constants.mjs"

export class ChessBoard {
    constructor(rows=8, columns=8) {
        this.rows = rows;
        this.columns = columns;
        this.startSquare = null;
        this.endSquare = null;
        this.numUnblocked = rows * columns;
        this.solve = null;

        let board = []
        for (let i = 0; i < rows; i++) {
            board.push([])
            for (let j = 0; j < columns; j++) {
                board[i].push(new ChessSquare(i, j))
            }
        }
        this.board = board
    }

    getPossibleNext(row, column) {
        let rList = []
        for (let i = 0; i < knight_moves.length; i++) {
            let new_row = row - knight_moves[i][0];
            let new_column = column - knight_moves[i][1];
            if (new_row >= 0 && new_row < this.rows && new_column >= 0 && new_column < this.columns) {
                // present in board
                if(!this.board[new_row][new_column].blocked) {
                    rList.push(this.board[new_row][new_column])
                }
            }
        }
        return rList
    }

    solver() {
        let map;
        if (this.solve === null || this.solve[0] !== this.startSquare) {
            var result = Algorithms.dijkstra(this);
            if (result[1] === true) {
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

        while (curr !== null) {
            path.push(curr);
            curr = map.get(curr)[0];
        }
        return [path.reverse(), numMoves];
    }
}

//let chessBoard = new ChessBoard(8, 8);
//chessBoard.startSquare = chessBoard.board[0][0];
//console.log(chessBoard.startSquare);
//for (let i = 0; i < 8; i++) {
//    for (let j = 0; j < 8; j++) {
//        chessBoard.endSquare = chessBoard.board[i][j];
//        console.log(chessBoard.endSquare, chessBoard.solver()[1]);
//    }
//}