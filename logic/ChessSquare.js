class ChessSquare{
    constructor(x, y, blocked=false) {
        this.x = x;
        this.y = y
    }

    getPossibleNext() {
        return [new ChessSquare(this.x + 2, this.y - 1),
                new ChessSquare(this.x + 2, this.y + 1),
                new ChessSquare(this.x - 2, this.y - 1),
                new ChessSquare(this.x - 2, this.y + 1),
                new ChessSquare(this.x + 1, this.y - 2),
                new ChessSquare(this.x + 1, this.y + 2),
                new ChessSquare(this.x - 1, this.y - 2),
                new ChessSquare(this.x - 1, this.y + 2)];
    }

    // getPossibleNext(ChessBoard) {
    //     let pNext = this.#possibleNext()
    //     let rList = []
    //     pNext.forEach(
    //         (chessSquare) => {
    //             if (ChessBoard.get )
    //         }
    //     )
    // }

}