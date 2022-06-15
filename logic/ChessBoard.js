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
        pNext = this.board[x][y].getPossibleNext()

        let rList = []

        // validate the pNext array::
        pNext.forEach(chessSquare => {
            if (!chessSquare.blocked) {
                if (chessSquare.x > 0 && chessSquare.x < this.width && chessSquare.y > 0 && chessSquare.y < this.height) {
                    rList.push(chessSquare)
                }
            }
        });

        return rList
    }

    createGraph() {
        
    }
}