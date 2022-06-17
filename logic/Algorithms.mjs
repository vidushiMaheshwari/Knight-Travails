import threshold from "./constants.js"

export class Algorithms {   
    static dijkstra(chessBoard) {
        let startSquare = chessBoard.startSquare;
        let endSquare = chessBoard.endSquare;
        let visitedSet = new Set();
        let pathMap = new Map();
        let pq = new PriorityQueue();
        let endFound = false;

        let size = chessBoard.numUnblocked;
        let thresholdSize = size * threshold
        pq.enqueue([startSquare, null, 0]);

        while (pq.size != 0 && visitedSet.size < size && (!endFound || visitedSet.size > thresholdSize)) {
            let curr = pq.dequeue();
            if (!visitedSet.has(curr[0])) {

                if (curr[0] === endSquare) {
                    endFound = true;
                }

                visitedSet.add(curr[0]);
                pathMap.set(curr[0], [curr[1], curr[2]])

                chessBoard.getPossibleNext(curr.x, curr.y).foreach(chessSquare => {
                    if (!visitedSet.has(chessSquare)) {
                        pq.enqueue([chessSquare, curr, curr[2] + 1]);
                    }
                });
            }
        }

        return [pathMap, !endFound || visitedSet.size > threshold];
    }
}