import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'

const AbstractFactory = () => {

    function bmwProducer(kind:string){
        return kind === 'sport'
            ?sportCarFactory
            :familyCarFactory
    }
    function sportCarFactory(){
        return new I1()
    }
    function familyCarFactory(){
        return new I2()
    }

    class I1{
        info(){
            return "I1 is sport car"
        }
    }
    class I2{
        info(){
            return "I2 is famaly car"
        }
    }
    // @ts-ignore
    const produce = new bmwProducer('sport')

    const myCar = new produce()
    console.log(myCar.info)
    return (
        <div>
            <h1>abstract factory</h1>
            <h2>
                фабрика що створює інтерфейс
                що групує інші фабрики, які
                логічно пов`язані між собою
            </h2>
            <h3>
                свого робо абстракція
                для фабрики і фабричного методу
            </h3>
            <a href="https://www.youtube.com/watch?v=LDA4riuzgiw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=4">link</a>

            <div><img src={img}></img></div>
            <div><img src={img_1}></img></div>
            <div><img src={img_2}></img></div>
            <pre>{`
    function bmwProducer(kind:string){
        return kind === 'sport'
            ?sportCarFactory
            :familyCarFactory
    }
    function sportCarFactory(){
        return new I1()
    }
    function familyCarFactory(){
        return new I2()
    }

    class I1{
        info(){
            return "I1 is sport car"
        }
    }
    class I2{
        info(){
            return "I2 is famaly car"
        }
    }
    // @ts-ignore
    const produce = new bmwProducer('sport')
            
            `}</pre>
        </div>
    );
};

export default AbstractFactory;