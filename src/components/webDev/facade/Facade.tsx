import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'
import img_5 from './img_5.png'

const Facade = () => {

    class Conveyor {
        //якщо таким принципом то просто прийдеться
        // запускати їх всі разом

        setBody() {
            console.log(`Body set!`)
        }

        setEngine() {
            console.log(`Engine set!`)
        }

        getEngine() {
            console.log(`getEngine!`)
        }

        getInterior() {
            console.log(`getInterior!`)
        }

        setInterior() {
            console.log(`Interior set!`)
        }

        setExterior() {
            console.log(`setExterior!`)
        }

        getExterior() {
            console.log(`getExterior!`)
        }

        setWheels() {
            console.log(`setWheels!`)
        }

        getWheels() {
            console.log(`getWheels!`)
        }

        paint() {
            console.log(`Car painted!`)
        }
    }

    class ConveyorFacade {
        //а це вже фасад і тут всі методи зібрані в один
        // метод
        car: any
        constructor(car: any) {
            this.car = car
        }

        assembleCar() {
            this.car.setBody()
            this.car.setEngine()
            this.car.setInterior()
            this.car.setExterior()
            this.car.setWheels()
            this.car.paint()
        }
        changeEngine(){
            //якщо вдруг тре буде поломку ладити
            this.car.getEngine()
            this.car.setEngine()
        }
        changeInterior(){
            this.car.getInterior()
            this.car.setInterior()
        }
    }
    const conveyor = new ConveyorFacade(new Conveyor());
    //і тепер при виклику викликаємо лише один метод для створення
    // суть в тому що в середині викликається дуже багато
    // методів але ми оперуємо лише 3-ма зовнішніми
    let car = conveyor.assembleCar();
    car = conveyor.changeEngine()
    car = conveyor.changeInterior()
    console.log(car)




    return (
        <div>
            <h1>фасад</h1>
            <h2>
                його задача сховати складну логіку
                за простим фасадом.
                тобто багато функцій логіки в середині,
                а на зовні кілька методів що в різній
                послідовності запускають
                ту всю складну логіку.
            </h2>
            <a href="https://www.youtube.com/watch?v=AWXBbIK-KMo&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=8">link</a>
            <div><img src={img} alt=""/></div>
            <div><img src={img_2} alt=""/></div>
            <div><img src={img_3} alt=""/></div>
            <div><img src={img_4} alt=""/></div>
            <div><img src={img_5} alt=""/></div>
            <div><pre>{`
    class Conveyor {
        //якщо таким принципом то просто прийдеться
        // запускати їх всі разом

        setBody() {
            console.log(\`Body set!\`)
        }

        setEngine() {
            console.log(\`Engine set!\`)
        }

        getEngine() {
            console.log(\`getEngine!\`)
        }

        getInterior() {
            console.log(\`getInterior!\`)
        }

        setInterior() {
            console.log(\`Interior set!\`)
        }

        setExterior() {
            console.log(\`setExterior!\`)
        }

        getExterior() {
            console.log(\`getExterior!\`)
        }

        setWheels() {
            console.log(\`setWheels!\`)
        }

        getWheels() {
            console.log(\`getWheels!\`)
        }

        paint() {
            console.log(\`Car painted!\`)
        }
    }

    class ConveyorFacade {
        //а це вже фасад і тут всі методи зібрані в один
        // метод
        car: any
        constructor(car: any) {
            this.car = car
        }

        assembleCar() {
            this.car.setBody()
            this.car.setEngine()
            this.car.setInterior()
            this.car.setExterior()
            this.car.setWheels()
            this.car.paint()
        }
        changeEngine(){
            //якщо вдруг тре буде поломку ладити
            this.car.getEngine()
            this.car.setEngine()
        }
        changeInterior(){
            this.car.getInterior()
            this.car.setInterior()
        }
    }
    const conveyor = new ConveyorFacade(new Conveyor());
    //і тепер при виклику викликаємо лише один метод для створення
    // суть в тому що в середині викликається дуже багато
    // методів але ми оперуємо лише 3-ма зовнішніми
    let car = conveyor.assembleCar();
    car = conveyor.changeEngine()
    car = conveyor.changeInterior()
    console.log(car)
            `}</pre></div>
        </div>
    );
};

export default Facade;