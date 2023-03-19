import React from 'react';


import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'

const Adapter = () => {

    class Engine2{
        simpleInterface(){
            console.log(`Engine 2.0 simple`)
        }
    }

    class EngineV8{
        complicatedInterface(){
            console.log(`Engine V8 `)
        }
    }

    class EngineV8Adapter{
        //і тут адаптуємо complecatedInterface до simple
        // щоб в спільному класі був лише один метод
        engine:any
        constructor(engine:any) {
            this.engine = engine
        }
        simpleInterface(){
            this.engine.complicatedInterface()
        }
    }
    class Auto{
        //і тепер звідси ми викликаємо лише simpleInterface
        // без всякої хірабори
        engine:any
        startEngine(engine:any){
            engine.simpleInterface()
        }
    }

    //запуск простого норм
    const myCar = new Auto()
    const aldEngine = new Engine2()
    myCar.startEngine(aldEngine)

    //запуск адаптера норм
    const myCar2 = new Auto()
    const engineAdapter = new EngineV8Adapter(new EngineV8())
    myCar2.startEngine(engineAdapter);

    //запуск без адаптера помилка
    const myCar3 = new Auto();
    const engineAdapter3 = new EngineV8()
    // myCar3.startEngine(engineAdapter3) //закоментив бо бє помилку

    return (
        <div>
            <h1>адаптер</h1>
            <h2>структурний шаблон</h2>
            <h3>
                обгортає не сумісний з чимось обєкт і робить його
                самостійним(адаптує його до сумісності)
            </h3>
            <a href="https://www.youtube.com/watch?v=w6O9Kr41frc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=10">link</a>
            <div><img src={img}></img></div>
            <div><img src={img_1}></img></div>
            <div><img src={img_2}></img></div>
            <div><img src={img_3}></img></div>
            <div><img src={img_4}></img></div>
            <div><pre>{`
                class Engine2{
        simpleInterface(){
            console.log(\`Engine 2.0 simple\`)
        }
    }

    class EngineV8{
        complicatedInterface(){
            console.log(\`Engine V8 \`)
        }
    }

    class EngineV8Adapter{
        //і тут адаптуємо complecatedInterface до simple
        // щоб в спільному класі був лише один метод
        engine:any
        constructor(engine:any) {
            this.engine = engine
        }
        simpleInterface(){
            this.engine.complicatedInterface()
        }
    }
    class Auto{
        //і тепер звідси ми викликаємо лише simpleInterface
        // без всякої хірабори
        engine:any
        startEngine(engine:any){
            engine.simpleInterface()
        }
    }

    //запуск простого норм
    const myCar = new Auto()
    const aldEngine = new Engine2()
    myCar.startEngine(aldEngine)

    //запуск адаптера норм
    const myCar2 = new Auto()
    const engineAdapter = new EngineV8Adapter(new EngineV8())
    myCar2.startEngine(engineAdapter);

    //запуск без адаптера помилка
    const myCar3 = new Auto();
    const engineAdapter3 = new EngineV8()
    // myCar3.startEngine(engineAdapter3) //закоментив бо бє помилку
`}</pre></div>
        </div>
    );
};

export default Adapter;