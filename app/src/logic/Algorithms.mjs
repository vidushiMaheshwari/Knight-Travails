import {threshold} from "./constants.mjs"
// import {PriorityQueue} from "./PriorityQueue.mjs"
import {Queue} from "./Queue.mjs"

export class Algorithms {   
    static dijkstra(chessBoard) {
        let startSquare = chessBoard.startSquare;
        let endSquare = chessBoard.endSquare;
        let visitedSet = new Set();
        let pathMap = new Map();
        let pq = new Queue(chessBoard.numUnblocked*0.1); //initial size of array is 10% of the chessBoard blocks (can change this to anything)
        // let pq = new PriorityQueue(endSquare);

        let size = chessBoard.numUnblocked;
        let thresholdSize = size * threshold
        pq.enqueue([startSquare, null, 0]);

        let endFound = null;
        while (pq.size != 0 && visitedSet.size < size) {
            let curr;
            if (endFound) {
                curr = endFound;
                endFound = null;
            } else {
                curr = pq.dequeue();
            }
            
            if (!visitedSet.has(curr[0])) {
                visitedSet.add(curr[0]);
                pathMap.set(curr[0], [curr[1], curr[2]]);

                if (curr[0] == endSquare && visitedSet.size < thresholdSize) {
                    return [pathMap, false];
                }

                chessBoard.getPossibleNext(curr[0].x, curr[0].y).forEach(chessSquare => {
                    if (!visitedSet.has(chessSquare)) {
                        if (chessSquare == endSquare) {
                            endFound = [chessSquare, curr[0], curr[2] + 1];
                        } else {
                            pq.enqueue([chessSquare, curr[0], curr[2] + 1]);
                        }
                    }
                });
            }
        }
        return [pathMap, true];
    }
}