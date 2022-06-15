class Algorithms {   
    static Dijkstra(startSquare, chessBoard) {
        let visitedSet = new Set();
        let shortestPath = new Map();
        let previous = new Map();
        let pq = new PriorityQueue();
        
        let size = shortestPath.size;
        pq.enqueue([startSquare, null, 0]);
                
        while (pq.size != 0 && visitedSet.size < size) {
            let curr = pq.dequeue();
            if (!visitedSet.has(curr[0])) {
                visitedSet.add(curr[0]);
                shortestPath.set(curr[0], curr[2]);
                previous.set(curr[0], curr[1]);

                curr.getPossibleNext().foreach(chessSquare => {
                    if (!visitedSet.has(chessSquare)) {
                        pq.enqueue([chessSquare, curr, curr[2] + 1]);
                    }
                });
            }
        }
        return previous;
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