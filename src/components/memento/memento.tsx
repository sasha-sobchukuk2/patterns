import React from 'react';


import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Momento = () => {


    class Memento {
        // обєкт зберігача
        value: any

        constructor(value: any) {
            this.value = value
        }
    }

    const creator = {
        save: (value: any) => new Memento(value),
        restore: (memento: any) => memento.value
    }

    class Caretaker {

        values: any[]

        constructor() {
            this.values = [];
        }

        addMemento(memento: any) {
            this.values.push(memento);
        }

        getMemento(index: number) {
            return this.values[index];
        }
    }

    const careTaker = new Caretaker()
    careTaker.addMemento(creator.save({name: 'sasha'}))
    careTaker.addMemento(creator.save({name: 'sasha2'}))
    careTaker.addMemento(creator.save({name: 'sasha3'}))
    careTaker.addMemento(creator.save({name: 'sasha3'}))

    // console.log(1111, careTaker.getMemento(2))
    console.log(creator.restore(careTaker.getMemento(2)))

    return (
        <div>
            <h1>memento -знімок</h1>
            <div>поведінковий дозволяє зберігати та відновлювати попередні стани обєкта</div>

            <a href="https://www.youtube.com/watch?v=kAY-ozumlr4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=18">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class Memento {
        // обєкт зберігача
        value: any

        constructor(value: any) {
            this.value = value
        }
    }

    const creator = {
        save: (value: any) => new Memento(value),
        restore: (memento: any) => memento.value
    }

    class Caretaker {

        values: any[]

        constructor() {
            this.values = [];
        }

        addMemento(memento: any) {
            this.values.push(memento);
        }

        getMemento(index: number) {
            return this.values[index];
        }
    }

    const careTaker = new Caretaker()
    careTaker.addMemento(creator.save({name: 'sasha'}))
    careTaker.addMemento(creator.save({name: 'sasha2'}))
    careTaker.addMemento(creator.save({name: 'sasha3'}))
    careTaker.addMemento(creator.save({name: 'sasha3'}))

    // console.log(1111, careTaker.getMemento(2))
    console.log(creator.restore(careTaker.getMemento(2)))
            `}</pre></div>


        </div>
    );
};

export default Momento;