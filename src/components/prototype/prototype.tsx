import React from 'react';


import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Prototype = () => {

    class TeslaCar {
        model:string
        price:string
        interior:string
        autopilot:boolean
        constructor(model:string, price:string, interior:string, autopilot:boolean
        ) {
            this.model = model;
            this.price = price;
            this.interior = interior;
            this.autopilot = autopilot;
        }
        produce(){
            //робить клонуваннь з вже інсуючого,
            // викликається з інстансу
            return new TeslaCar(
                this.model,
                this.price,
                this.interior,
                this.autopilot
            )
        }
    }
    const prototypeCar = new TeslaCar('S',"1$",'black',false)

    const car1 = prototypeCar.produce()
    const car2 = prototypeCar.produce()
    const car3 = prototypeCar.produce()

    car1.interior = 'white'
    car1.autopilot = true

    console.log(car1)

    return (
        <div>
            <h1>prototype</h1>
            <h2 className='type'>
                породжуючий патерн
            </h2>
            <h2>
                 що дозволяє копіювати
            не вдаючись в подробиці їх реалізації
            </h2>
            <h3>тут ми робимо колни обєктів</h3>

            <div><img src={img} alt=""/></div>
            <div><img src={img_1} alt=""/></div>
            <div><img src={img_2} alt=""/></div>
            <div><img src={img_3} alt=""/></div>
            <pre>
                {`
    class TeslaCar {
        model:string
        price:string
        interior:string
        autopilot:boolean
        constructor(model:string, price:string, interior:string, autopilot:boolean
        ) {
            this.model = model;
            this.price = price;
            this.interior = interior;
            this.autopilot = autopilot;
        }
        produce(){
            //робить клонуваннь з вже інсуючого,
            // викликається з інстансу
            return new TeslaCar(
                this.model,
                this.price,
                this.interior,
                this.autopilot
            )
        }
    }
    const prototypeCar = new TeslaCar('S',"1$",'black',false)

    const car1 = prototypeCar.produce()
    const car2 = prototypeCar.produce()
    const car3 = prototypeCar.produce()

    car1.interior = 'white'
    car1.autopilot = true

    console.log(car1)
                `}
            </pre>

        </div>
    );
};

export default Prototype;