export class PriorityQueue {
    constructor() {
        this.backingArray = [null];
        this.size = 0;
    }

    enqueue(chessSquareDistance) {
        this.backingArray.push(chessSquareDistance);
        this.size++;
        let index = this.size;
        let parentIndex = Math.floor(index / 2);
        while (parentIndex > 0 && this.backingArray[parentIndex][2] > this.backingArray[index][2]) {
            let temp = this.backingArray[parentIndex];
            this.backingArray[parentIndex] = this.backingArray[index];
            this.backingArray[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor(index / 2);
        }
    }

    dequeue() {
        let temp = this.backingArray[1];
        if (this.size > 1) {
            this.backingArray[1] = this.backingArray.pop();
        } else {
            this.backingArray.pop();
        }
        this.size--;
        
        let index = 1;
        let greater = index * 2;
        while (greater <= this.size) {
            if (greater < this.backingArray.length - 1 && this.backingArray[greater][2] > this.backingArray[greater + 1][2]) {
                greater += 1;
            }
            if (this.backingArray[index][2] > this.backingArray[greater][2]) {
                let temp2 = this.backingArray[index];
                this.backingArray[index] = this.backingArray[greater];
                this.backingArray[greater] = temp2;
            } else {
                break;
            }
            index = greater
            greater *= 2;
        }

        return temp;
    }
}