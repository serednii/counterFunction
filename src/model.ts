


interface ICreateCounterReturn {
    counter: number,
    increment: ()=>void
    decrement: ()=>void
    reset: ()=>void
    getCounter: ()=>number
}

export function createCounter(initialCounter: number):ICreateCounterReturn {
    return {
        counter: initialCounter,
        increment: function () {
             if(this.counter<10)this.counter++;
        },
        decrement: function () {
            if(this.counter>0)this.counter--;
        },
        reset: function () {
            this.counter = initialCounter;
        },
        getCounter: function () {
            return this.counter
        }
    }
}

