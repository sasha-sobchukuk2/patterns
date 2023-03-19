import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Strategy = () => {

    function baseStrategy(amount:number){
        return amount
    }
    function premiupStrategy(amount:number){
         return amount * 0.8
    }
    function platinumStrategy(amount:number){
        return amount* 0.65
    }

    class AutoCart {
        //слас контексту
        discount:Function
        amount:number
        //клас контексту
        constructor(discount:Function) {
            this.discount= discount
            this.amount = 0
        }
        checkout(){
            return this.discount(this.amount)
        }
        setAmount(amount:number){
            this.amount = amount
        }
    }

    const baseCustomer = new AutoCart(baseStrategy)
    const premiupCustomer = new AutoCart(premiupStrategy)
    const platinumCustomer = new AutoCart(platinumStrategy)

    baseCustomer.setAmount(1000)
    console.log(baseCustomer.checkout())

    premiupCustomer.setAmount(1000)
    console.log(premiupCustomer.checkout())

    platinumCustomer.setAmount(1000)
    console.log(platinumCustomer.checkout())



    return (
        <div>
            <h1>
                strategy
            </h1>
             <h2>
                 поведінковий
             </h2>
            <h3>
                опреділяє схожі алгоритми і поміщає їх
                в кожний окремий клас, після чого можна переключатись
                між алгоритмами в ході виконання програми
            </h3>
            <h4>
                як? коли? нашо?
                в основному при розширенні апки, щоб не перетворити
                 код в нечитаєму мівіну.
            </h4>
            <a href="https://www.youtube.com/watch?v=te-teUr0N_w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=17">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>

            <div><pre>{`
    function baseStrategy(amount:number){
        return amount
    }
    function premiupStrategy(amount:number){
         return amount * 0.8
    }
    function platinumStrategy(amount:number){
        return amount* 0.65
    }

    class AutoCart {
        //слас контексту
        discount:Function
        amount:number
        //клас контексту
        constructor(discount:Function) {
            this.discount= discount
            this.amount = 0
        }
        checkout(){
            return this.discount(this.amount)
        }
        setAmount(amount:number){
            this.amount = amount
        }
    }

    const baseCustomer = new AutoCart(baseStrategy)
    const premiupCustomer = new AutoCart(premiupStrategy)
    const platinumCustomer = new AutoCart(platinumStrategy)

    baseCustomer.setAmount(1000)
    console.log(baseCustomer.checkout())

    premiupCustomer.setAmount(1000)
    console.log(premiupCustomer.checkout())

    platinumCustomer.setAmount(1000)
    console.log(platinumCustomer.checkout())

            `}</pre></div>
        </div>
    );
};

export default Strategy;