export class Algorithms {   

    static Dijkstra(startSquare, chessBoard, endSquare) {
        let visitedSet = new Set();
        let shortestPath = new Map(); // stores the distance Map
        let previous = new Map();
        let pq = new PriorityQueue();
        let endFound = false;

        let size = chessBoard.getVertices();
        pq.enqueue([startSquare, null, 0]);

        while (pq.size != 0 && visitedSet.size < size && !endFound) {
            let curr = pq.dequeue();
            if (!visitedSet.has(curr[0])) {

                if (curr[0] === endSquare) {
                    endFound = true;
                }

                visitedSet.add(curr[0]);
                shortestPath.add(curr[0], curr[2]);
                previous.set(curr[0], curr[1]);

                chessBoard.getPossibleNext(curr.x, curr.y).foreach(chessSquare => {
                    if (!visitedSet.has(chessSquare)) {
                        pq.enqueue([chessSquare, curr, curr[2] + 1]);
                    }
                });
            }
        }

        if (visitedSet.has(endSquare)) {
            return previous;
        } else {
            throw TypeError(errors.unsolvable)
        }
    }

    static getDijkstraPath(startSquare, chessBoard, endSquare) {
        let previous = Dijkstra(startSquare, chessBoard);
        let path = [];
        let curr = endSquare;
        while (curr != null) {
            path.push(curr);
            curr = previous.get(curr);
        }
        return path.reverse();
    }
}