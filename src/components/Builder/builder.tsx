import React from 'react';


import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_4 from './img_4.png'
import img_5 from './img_5.png'

const Builder = () => {

    class Car{
        autoPilot:boolean
        parcktronic:boolean
        signaling :boolean
        engine:any

        constructor() {
            this.autoPilot = false
            this.parcktronic = false
            this.signaling = false
        }
    }
    class CarBuilder{
        car:Car
        constructor() {
            this.car = new Car()
        }
        addAutoPilot(autoPilot:boolean){
            this.car.autoPilot = autoPilot
            return this
        }
        addPacktronic(packtronic:boolean){
            this.car.parcktronic = packtronic
            return this
        }
        addSignaling(signaling:boolean){
            this.car.autoPilot = signaling
            return this
        }
        updateEngine(engine:any){
            this.car.engine = engine
            return this
        }
        build(){
            return this.car
        }
    }

    const myCar = new CarBuilder()
        .addAutoPilot(true)
        .addPacktronic(true)
        .addSignaling(false)
        .updateEngine('new engine')
        .build()

    console.log(myCar)

    return (
        <div>
             <h1>builder</h1>
            <h2>структурний</h2>
            <h3>для створення обєктів зі складними станами
            .також може мати director, але тут його не буде

            </h3>
            <h4>
                 створення обєктів ініціалізацію яких
                важко помістити в конструкторі
            </h4>
            <h5> підсумок,
                патерн за допомогою якого ми можемо зробити копію
                обєкта, скрізь де нам це необхідно,
                не змінюючи базової структури
            </h5>

            <div>
                <a href="https://www.youtube.com/watch?v=P36gibfPaXs&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=6">link</a>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_4} alt=""/></div>
                <div><img src={img_5} alt=""/></div>
                <pre>{`
    class Car{
        autoPilot:boolean
        parcktronic:boolean
        signaling :boolean
        engine:any

        constructor() {
            this.autoPilot = false
            this.parcktronic = false
            this.signaling = false
        }
    }
    class CarBuilder{
        car:Car
        constructor() {
            this.car = new Car()
        }
        addAutoPilot(autoPilot:boolean){
            this.car.autoPilot = autoPilot
            return this
        }
        addPacktronic(packtronic:boolean){
            this.car.parcktronic = packtronic
            return this
        }
        addSignaling(signaling:boolean){
            this.car.autoPilot = signaling
            return this
        }
        updateEngine(engine:any){
            this.car.engine = engine
            return this
        }
        build(){
            return this.car
        }
    }

    const myCar = new CarBuilder()
        .addAutoPilot(true)
        .addPacktronic(true)
        .addSignaling(false)
        .updateEngine('new engine')
        .build()

    console.log(myCar)
                `}</pre>

                
            </div>
        </div>
    );
};

export default Builder;