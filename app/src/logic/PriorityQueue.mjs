export class PriorityQueue {
    constructor(endSquare) {
        this.backingArray = [null];
        this.size = 0;
        this.endSquare = endSquare;
    }

    distance(index) {
        let currSquare = this.backingArray[index][0];
        return Math.pow(this.endSquare.x - currSquare.x, 2) + Math.pow(this.endSquare.y - currSquare.y, 2);
    }

    elementComparison(index1, index2) {
        return this.backingArray[index1][2] > this.backingArray[index2][2] || 
            (this.backingArray[index1][2] == this.backingArray[index2][2] && this.distance(index1) > this.distance(index2));
    }

    enqueue(chessSquareDistance) {
        this.backingArray.push(chessSquareDistance);
        this.size++;
        let index = this.size;
        let parentIndex = Math.floor(index / 2);
        while (parentIndex > 0 && this.elementComparison(parentIndex, index)) {
            let temp = this.backingArray[parentIndex];
            this.backingArray[parentIndex] = this.backingArray[index];
            this.backingArray[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor(index / 2);
        }
    }

    dequeue() {
        let removed = this.backingArray[1];
        if (this.size > 1) {
            this.backingArray[1] = this.backingArray.pop();
        } else {
            this.backingArray.pop();
        }
        this.size--;
        
        let index = 1;
        let greater = index * 2;
        while (greater <= this.size) {
            if (greater < this.backingArray.length - 1 && this.elementComparison(greater, greater + 1)) {
                greater += 1;
            }
            if (this.elementComparison(index, greater)) {
                let temp2 = this.backingArray[index];
                this.backingArray[index] = this.backingArray[greater];
                this.backingArray[greater] = temp2;
            } else {
                break;
            }
            index = greater
            greater *= 2;
        }

        return removed;
    }
}