import React from 'react';
import img from "./img.png";
import img_1 from "./img_1.png";
import img_2 from "./img_2.png";
import img_3 from "./img_3.png";

const Command = () => {

    class Driver {
        command

        constructor(command: any) {
            this.command = command;
        }

        execute() {
            this.command.execute()
        }
    }

    class Engine {
        state

        constructor() {
            this.state = false
        }

        on() {
            this.state = true
        }

        off() {
            this.state = false
        }
    }

    class OnStartCommand {
        engine: any

        constructor(engine:any) {
            this.engine = engine
        }
        execute(){
            this.engine.on()
        }
    }
    class OnSwitchOffCommand {
        engine:any
        constructor(engine:any) {
            this.engine = engine
        }
        execute(){
            this.engine.of()
        }
    }

    const engine = new Engine()

    console.log(engine);

    // створили екземпляр специфічної команди
    // і передали їй двигун щоб вона знала що запускати
    const onStartCommand = new OnStartCommand(engine)

    // створили користувача або водія і передали йому
    //команду запуску двигуна
    const driver = new Driver(onStartCommand)
    driver.execute()
    console.log(engine)


    return (
        <div>
            <h1>
                command
            </h1>
            <h2>
                поведінковий паттерн що допомагає інкапсулювати
                деякі дії і необхідні для них дані , і таким чином відділити клієнта від получателя
                , або іншими словами перетворює запити в обєкти, що дозволяє передавати їх як аргументи в методи
            </h2>
            <a href="https://www.youtube.com/watch?v=jWsyfeOkv9Q&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=21">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>


            <div><pre>{`
    class Driver {
        command

        constructor(command: any) {
            this.command = command;
        }

        execute() {
            this.command.execute()
        }
    }

    class Engine {
        state

        constructor() {
            this.state = false
        }

        on() {
            this.state = true
        }

        off() {
            this.state = false
        }
    }

    class OnStartCommand {
        engine: any

        constructor(engine:any) {
            this.engine = engine
        }
        execute(){
            this.engine.on()
        }
    }
    class OnSwitchOffCommand {
        engine:any
        constructor(engine:any) {
            this.engine = engine
        }
        execute(){
            this.engine.of()
        }
    }

    const engine = new Engine()

    console.log(engine);

    // створили екземпляр специфічної команди
    // і передали їй двигун щоб вона знала що запускати
    const onStartCommand = new OnStartCommand(engine)

    // створили користувача або водія і передали йому
    //команду запуску двигуна
    const driver = new Driver(onStartCommand)
    driver.execute()
    console.log(engine)
            `}</pre></div>

        </div>
    );
};

export default Command;