import React from 'react';

import img_1 from './img_1.png'
import img from './img.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Factory = () => {

    class Bmw {
        model: string
        price: number
        maxSpeed: number

        constructor(model: string, price: number, maxSpeed: number) {
            this.model = model
            this.price = price
            this.maxSpeed = maxSpeed
        }
    }

    class BMWFactory {
        create(type: string) {
            if (type === 'x5')
                return new Bmw(type, 1, 2)
            if (type === 'x6') {
                return new Bmw(type, 2, 2)
            }
        }
    }

    const factory = new BMWFactory()
    const x5 = factory.create('x5')
    const x6 = factory.create('x6')

    console.log(x5)
    console.log(x6)

    return (
        <div>
            <h1>Factory</h1>
            <h2>задача створення класу
                що буде помагати створювати обєкти
                на основі якихось вхідних даних.
                ісходнгий клас це суперкласі
            </h2>
            <h3>де і коли.
                коли потрібно створювати багато однотипних обєктів
                тобто однаковою структурою але різним даними
            </h3>
            <h4>два класи
                <li>конструктор</li>
                <li>клас що викликає створення з певними параметрами</li>
            </h4>

            <div>
                <div className='imgContainer'><img  src={img} alt=""/></div>
                <div className='imgContainer'><img src={img_1} alt=""/></div>
                <div className='imgContainer'><img src={img_2} alt=""/></div>
                <div className='imgContainer'><img src={img_3} alt=""/></div>
            </div>
            <a href="https://www.youtube.com/watch?v=wmla1hxxvQI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=3">link</a>
            <pre>
                {`   
    class Bmw{
        model:string
        price:number
        maxSpeed:number
        constructor(model:string,price:number,maxSpeed:number) {
            this.model = model
            this.price = price
            this.maxSpeed = maxSpeed
        }
    }

    class BMWFactory {
        create(type:string){
            if(type ==='x5')
                return new Bmw(type,1,2)
            if(type === 'x6'){
                return new Bmw(type,2,2)
            }
        }
    }
    const factory = new BMWFactory()
    const x5 = factory.create('x5')
    const x6 = factory.create('x6')

    console.log(x5)
    console.log(x6)
`}
            </pre>

        </div>
    );
};

export default Factory;