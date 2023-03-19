import React from 'react';


import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'

const Bridge = () => {

    class Model {
        color:Color
        constructor(color:Color) {
            this.color = color
        }
    }

    class Color {
        // є мостом
        type:string
        constructor(type:string) {
            this.type = type
        }
        get(){
            return this.type
        }
    }

    class BlackColor extends Color{
        constructor() {
            super("dar-black");
        }
    }

    class RedColor extends Color {
        constructor() {
            super(`red`);
        }
    }

    class Audio extends Model {

        constructor(color:Color) {
            super(color);
        }
        paint(){
            return `Auto: Audi, Color: ${this.color.get()}`
        }
    }

    class Bmw extends Model {
        constructor(color:Color) {
            super(color);
        }
        paint(){
            return  `auto: bmw, color: ${this.color.get()}`
        }
    }

    const blackBmw = new Bmw(new BlackColor())
    console.log(blackBmw.paint())


    return (
        <div>
            <h1>bridge</h1>
            <h2>
                породжуючий патерн
            </h2>
            <h3>
                розділяє одни чи два класи на кілька ієрархій
                 а саме на
                <li>абстракцію</li>
                <li>імплементацію</li>
                що дозволяє змінювати їх без залежноcті один
                від одного
            </h3>
            <h4>
                вся суть в композиції, заміняємо наслідування композицією
                (коли розширяємість проходить в кількох напрямках)
                . для цього один з напрямків виділяємо в окрему абстракцію
                і ссилаємось на неї.
            </h4>
            <a href="https://www.youtube.com/watch?v=pNVuMif0bc0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=12">link</a>
            <div><img src={img} alt=""/></div>
            <div><img src={img_1} alt=""/></div>
            <div><img src={img_2} alt=""/></div>
            <div><img src={img_3} alt=""/></div>
            <div><img src={img_4} alt=""/></div>
            <div><pre>{`
    class Model {
        color:Color
        constructor(color:Color) {
            this.color = color
        }
    }

    class Color {
        // є мостом
        type:string
        constructor(type:string) {
            this.type = type
        }
        get(){
            return this.type
        }
    }

    class BlackColor extends Color{
        constructor() {
            super("dar-black");
        }
    }

    class RedColor extends Color {
        constructor() {
            super(\`red\`);
        }
    }

    class Audio extends Model {

        constructor(color:Color) {
            super(color);
        }
        paint(){
            return \`Auto: Audi, Color: {this.color.get()}\`
        }
    }

    class Bmw extends Model {
        constructor(color:Color) {
            super(color);
        }
        paint(){
            return  \`auto: bmw, color: {this.color.get()}\`
        }
    }

    const blackBmw = new Bmw(new BlackColor())
    console.log(blackBmw.paint())

            `}</pre></div>

        </div>
    );
};

export default Bridge;