import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'



const Flyweight = () => {

    class Auto<T>{
        model:T
        // клас легковеса
        constructor(model:T) {
            this.model = model
        }
    }

    class AutoFactory {
        models:any
        constructor(name?:string) {
            this.models = {}
        }

        create(name:string){
            let model = this.models[name]
            if(model) return model;
            console.log('model')
            this.models[name] = new Auto(name)
            return this.models[name]
        }
        getModels(){
            console.log(this.models) 
        }
    }

    const factory  = new AutoFactory();

    const bmw = factory.create('bmw')
    const audi = factory.create('audi')
    const tesla = factory.create('tesla')
    const tesla2 = factory.create('tesla')

    console.log(factory.getModels())



    return (
        <div>
             <h1>
                 flyweight -легковес
             </h1>
            <h2>структурний паттерн</h2>
            <h3>
                це свого роду кеш,
                дозволяє вмістити більшку кількість оюєктів
                в оперативну память, іншими словами - він дозволяє
                економити ресурси розділяючи спільні дані між собою

            </h3>
            <h4>є сто обєктів з різноюю строктурою
                і в кожному є спільна риса.
                можна винести це свойство окремо
            </h4>
            <h5>
                властивості:
                <li>не змінюваність,
                    це поле не повинно змінюватись
                </li>
                <li>
                    з ними зручніше працювати через фабрики
                </li>
                <div>
                    <div><img src={img} alt=""/></div>
                    <div><img src={img_1} alt=""/></div>
                    <div><img src={img_2} alt=""/></div>
                    <div><img src={img_3} alt=""/></div>
                    <div><img src={img_4} alt=""/></div>
                </div>
                <div><pre>{`

    class Auto<T>{
        model:T
        // клас легковеса
        constructor(model:T) {
            this.model = model
        }
    }

    class AutoFactory {
        models:any
        constructor(name?:string) {
            this.models = {}
        }

        create(name:string){
            let model = this.models[name]
            if(model) return model;
            console.log('model')
            this.models[name] = new Auto(name)
            return this.models[name]
        }
        getModels(){
            console.log(this.models) 
        }
    }

    const factory  = new AutoFactory();

    const bmw = factory.create('bmw')
    const audi = factory.create('audi')
    const tesla = factory.create('tesla')
    const tesla2 = factory.create('tesla')

    console.log(factory.getModels())
                `}</pre></div>

            </h5>
        </div>
    );
};

export default Flyweight;