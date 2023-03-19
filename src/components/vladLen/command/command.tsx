import React from 'react';

const Command = () => {

    class MyMath {
        num: number

        constructor(initValue = 0) {
            this.num = initValue
        }

        square():number {
            return this.num ** 2
        }

        cube():number {
            return this.num ** 3
        }

    }

    class Command {
        subject:MyMath
        commandsExecuted: any[]

        constructor(executedClass: MyMath) {
            this.subject = executedClass
            this.commandsExecuted = []//список всіх команд що були визвані
        }

        execute(commandStr: keyof MyMath) {
            this.commandsExecuted.push(commandStr)
            // @ts-ignore
            return this.subject[commandStr]()
        }

    }

    const command_2 = new Command(new MyMath(2))

    const square = command_2.execute('square')
    const square2 = command_2.execute('square')
    const metadata = command_2.commandsExecuted

    return (
        <div>
            <h1>command</h1>
            <h2>
               суть -  перетворює колбек в обєкт
            </h2>
            <div>result: {square}</div>
            <div>metadata:{metadata}</div>
        </div>
    );
};

export default Command;