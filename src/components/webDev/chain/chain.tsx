import React from 'react';
import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'
import img_5 from './img_4.png'

const Chain = () => {


    class Account{
        name:any
        balance:any
        incomer:any
        pay(orderPrice:number){
            if(this.canPay(orderPrice)){
                console.log(`payd ${orderPrice} using ${this.name}`)
            }else if(this.incomer){
                console.log(`cannot pay using ${this.name}`)
                this.incomer.pay(orderPrice)
            }else {
                console.log(`not enough money`)
            }
        }
        canPay(amount:number){
            return this.balance >=amount
        }
        setNext(account:any) {
            this.incomer  = account
        }

    }

    class Master extends Account {
        name:string
        balance:number
        constructor(balance:number) {
            super();
            this.name = `Master Card`;
            this.balance = balance;
        }
    }

    class Paypal extends Account {
        name:string
        balance:number

        constructor(balance:number) {
            super();
            this.name = `Paypal`
            this.balance = balance

        }
    }
    class Qiwi extends Account {
        name:string
        balance:number

        constructor(balance:number) {
            super();
            this.name = `qiwi`
            this.balance = balance

        }
    }

    const master = new Master(100)
    const paypal = new Paypal(200)
    const qiwi = new Qiwi(500)

    master.setNext(paypal)
    paypal.setNext(qiwi)

    master.pay(238)

    return (
        <div>
            <h1>chain</h1>
            <h2>поведінковий паттерн </h2>
                <h3>
                    дозволяє передавати запити послідовно
                    по ланцюжку обробників.
                    Кожен наступний обробник перевіряє чи може
                    він обробити запити якщо може то обробляж та
                    повертає якщо ні то передає далі
                </h3>
            <a href="https://www.youtube.com/watch?v=stpzkOFoWdY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=16">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
                <div><img src={img_4} alt=""/></div>
                <div><img src={img_5} alt=""/></div>
            </div>
            <div><pre>{`
    class Account{
        name:any
        balance:any
        incomer:any
        pay(orderPrice:number){
            if(this.canPay(orderPrice)){
                console.log(\`payd {orderPrice} using {this.name}\`)
            }else if(this.incomer){
                console.log(\`cannot pay using {this.name}\`)
                this.incomer.pay(orderPrice)
            }else {
                console.log(\`not enough money\`)
            }
        }
        canPay(amount:number){
            return this.balance >=amount
        }
        setNext(account:any) {
            this.incomer  = account
        }

    }

    class Master extends Account {
        name:string
        balance:number
        constructor(balance:number) {
            super();
            this.name = \`Master Card\`;
            this.balance = balance;
        }
    }

    class Paypal extends Account {
        name:string
        balance:number

        constructor(balance:number) {
            super();
            this.name = \`Paypal\`
            this.balance = balance

        }
    }
    class Qiwi extends Account {
        name:string
        balance:number

        constructor(balance:number) {
            super();
            this.name = \`qiwi\`
            this.balance = balance

        }
    }

    const master = new Master(100)
    const paypal = new Paypal(200)
    const qiwi = new Qiwi(500)

    master.setNext(paypal)
    paypal.setNext(qiwi)

    master.pay(238)
            `}</pre></div>
        </div>
    );
};

export default Chain;