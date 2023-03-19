import React from 'react';
import img from "../memento/img.png";
import img_1 from "../memento/img_1.png";
import img_2 from "../memento/img_2.png";
import img_3 from "../memento/img_3.png";

const State = () => {

    class OrderStatus {
        name: string
        nextStatus: any

        constructor(name: string, nextStatus: any) {
            this.name = name;
            this.nextStatus = nextStatus;
        }

        next() {
            return new this.nextStatus()
        }
    }

    class WaitingForPayment extends OrderStatus {
        constructor() {
            super('waitingForPaiment', Shipping);
        }
    }

    class Shipping extends OrderStatus {
        constructor() {
            super('Shipping', Delibered);
        }
    }

    class Delibered extends OrderStatus {
        constructor() {
            super('Delibered ', Delibered);
        }
    }

    class Order {
        // обєкт заказу
        state:any
        constructor() {
            this.state = new WaitingForPayment()
        }

        nextState() {
            this.state = this.state.next()
        }
    }

    const myOrder = new Order()
    console.log(myOrder.state.name)

    myOrder.nextState()
    console.log(myOrder.state.name)

    myOrder.nextState()
    console.log(myOrder.state.name)

    return (
        <div>
            <h1>state</h1>
            <h2>
                поведінковий патерн що дозволяє обєктам
                змінювати свою поведінку в залежності від стану

            </h2>

            <a href="https://www.youtube.com/watch?v=W_11rR4UFNw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=23">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class OrderStatus {
        name: string
        nextStatus: any

        constructor(name: string, nextStatus: any) {
            this.name = name;
            this.nextStatus = nextStatus;
        }

        next() {
            return new this.nextStatus()
        }
    }

    class WaitingForPayment extends OrderStatus {
        constructor() {
            super('waitingForPaiment', Shipping);
        }
    }

    class Shipping extends OrderStatus {
        constructor() {
            super('Shipping', Delibered);
        }
    }

    class Delibered extends OrderStatus {
        constructor() {
            super('Delibered ', Delibered);
        }
    }

    class Order {
        // обєкт заказу
        state:any
        constructor() {
            this.state = new WaitingForPayment()
        }

        nextState() {
            this.state = this.state.next()
        }
    }

    const myOrder = new Order()
    console.log(myOrder.state.name)

    myOrder.nextState()
    console.log(myOrder.state.name)

    myOrder.nextState()
    console.log(myOrder.state.name)
            `}</pre></div>

        </div>
    );
};

export default State;