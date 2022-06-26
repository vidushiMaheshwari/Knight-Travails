import { queue_capacity } from "./constants.mjs";

export class Queue {

    // I believe we should change the capacity to be dynamically changed according to the size of the board (in some sort of proportion)
    constructor(capacity=queue_capacity) {
        this.backingArray = [null];
        this.size = 0;
        this.front = 0;
        this.capacity = capacity;
    }

    enqueue(element) {
        if (this.size < this.capacity) {
            this.backingArray[(this.front + this.size)%this.capacity] = element;
        } else {
            this.capacity *= 2;
            let new_backing = []
            for(let i = 0; i < this.size; i++) {
                new_backing.push(this.backingArray[(this.front + i)%this.size]);
            }
            new_backing.push(element);
            this.front = 0;
            this.backingArray = new_backing;
        }
        this.size++;
    }

    dequeue() {
        // removes from the front (puts a null at the point)
        let rval = this.backingArray[this.front];
        this.backingArray[this.front] = null;
        if (this.size > 1) {
            this.front = (this.front + 1) % this.capacity
        }
        this.size--;
        return rval;
    }
}