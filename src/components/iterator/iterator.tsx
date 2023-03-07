import React from 'react';
import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'

const  Iterator = () => {

    class Iterator {

        index:number
        elements:unknown[]
        constructor(elements:unknown[]) {
            this.index = 0;
            this.elements = elements;
        }
        next(){
            return this.elements[this.index++]
        }
        hasNext(){
            return this.index < this.elements.length
        }
    }
    const collection = new Iterator(['Audi','Bmw','Tesla',"mercedes "])

    while(collection.hasNext()){
        console.log(collection.next())
    }
    
    class IteratorObj {

        index:number
        elements:any
        keys:any
        constructor(elements:any) {
            this.index = 0;
            this.elements = elements;
            this.keys = Object.keys(elements);
        }
        next(){
            return this.elements[this.keys[this.index++]]
        }
        hasNext(){
            return this.index < this.keys.length;
        }
    }
    const collectionObj = new IteratorObj(
        {
            audio:{model:'audio',color:'black',price:1},
            bwm:{model:'bwm',color:'red',price:2},
            tesla:{model:'tesla',color:'green',price:3},
        })

    while(collectionObj.hasNext()){
        console.log(collectionObj.next())
    }





    return (
        <div>
            <h1>iterator</h1>
            <h2>
                поведінковий паттерн
                що дає можлиість послідовно обходити елементи
                не розкриваючи їх внутрішнє представлення.
                як плеєр перебариє пісні.
                суть в тому щоб обійти колекцію, і вивести це
                обходження в окремий клас
                3 ключових методи :
                <li>first()</li>
                <li>next()</li>
                <li>current()</li>

            </h2>
            <h3>
                ми не змінюємо саму колекцію, а створюжмо
                для перебору окремий клас
            </h3>
            <a href="https://www.youtube.com/watch?v=bjH4NHItd3U&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=15">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
                <div><img src={img_4} alt=""/></div>
            </div>
            <div><pre>{`
    class Iterator {

        index:number
        elements:unknown[]
        constructor(elements:unknown[]) {
            this.index = 0;
            this.elements = elements;
        }
        next(){
            return this.elements[this.index++]
        }
        hasNext(){
            return this.index < this.elements.length
        }
    }
    const collection = new Iterator(['Audi','Bmw','Tesla',"mercedes "])

    while(collection.hasNext()){
        console.log(collection.next())
    }
    
    class IteratorObj {

        index:number
        elements:any
        keys:any
        constructor(elements:any) {
            this.index = 0;
            this.elements = elements;
            this.keys = Object.keys(elements);
        }
        next(){
            return this.elements[this.keys[this.index++]]
        }
        hasNext(){
            return this.index < this.keys.length;
        }
    }
    const collectionObj = new IteratorObj(
        {
            audio:{model:'audio',color:'black',price:1},
            bwm:{model:'bwm',color:'red',price:2},
            tesla:{model:'tesla',color:'green',price:3},
        })

    while(collectionObj.hasNext()){
        console.log(collectionObj.next())
    }
            `}</pre></div>

        </div>
    );
};

export default Iterator;