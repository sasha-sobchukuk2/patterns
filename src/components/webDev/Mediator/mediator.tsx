import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Mediator = () => {

    class OfficialDealer {
        custumers:any[]
        constructor() {
            this.custumers = []
        }

        orderAuto(customer:Customer,auto:string,info:string){
            const name = customer.getName()

            console.log(`order name: ${name}.order auto is ${auto}`)
            console.log(`additional info: ${info}`)
            this.addToCustomersList(name)
        }

        addToCustomersList(name:string){
            this.custumers.push(name);
        }
        getCustomerList(){
            return this.custumers;
        }

    }

    class Customer {
        name:string
        dealerMediator:OfficialDealer
        constructor(name:string,dealerMediator:OfficialDealer){
            this.name = name;
            this.dealerMediator = dealerMediator;
        }
        getName(){
            return this.name;
        }
        makeOrder(auto:string,info:string){
            this.dealerMediator.orderAuto(this,auto,info)
        }
    }

    const mediator = new OfficialDealer();

    const sasha = new Customer('sasha', mediator)
    const valya = new Customer('valya', mediator)

    sasha.makeOrder('tesla','with autopilit')

    valya.makeOrder('bmw','with packtronic')

    console.log(mediator.getCustomerList())
    return (
        <div>
            <h1>Mediator</h1>
            <h2>поведінковий</h2>
            <h3>
                 дозволяє зменшити звязок класів між собою
                виносячи звязок в так званий медіатор(посередник)


            </h3>
             <h4>
                 піля реєстрації веде на 2 сторінку потім третю
                 десяту потім на авторизацію і тд.
                 щоб не прописувати в кожній компоненті.
                 і ця спільна компонента управлятиме що за чим
                 і можна буде краще переіспользувати компоненти

             </h4>
            <h5>
                він потрібен щоб зменшити звязність класів між собою

            </h5>

            <a href="https://www.youtube.com/watch?v=tWZfcmmGf1w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=14">link</a>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class OfficialDealer {
        custumers:any[]
        constructor() {
            this.custumers = []
        }

        orderAuto(customer:Customer,auto:string,info:string){
            const name = customer.getName()

            console.log(\`order name: {name}.order auto is {auto}\`)
            console.log(\`additional info: {info}\`)
            this.addToCustomersList(name)
        }

        addToCustomersList(name:string){
            this.custumers.push(name);
        }
        getCustomerList(){
            return this.custumers;
        }

    }

    class Customer {
        name:string
        dealerMediator:OfficialDealer
        constructor(name:string,dealerMediator:OfficialDealer){
            this.name = name;
            this.dealerMediator = dealerMediator;
        }
        getName(){
            return this.name;
        }
        makeOrder(auto:string,info:string){
            this.dealerMediator.orderAuto(this,auto,info)
        }
    }

    const mediator = new OfficialDealer();

    const sasha = new Customer('sasha', mediator)
    const valya = new Customer('valya', mediator)

    sasha.makeOrder('tesla','with autopilit')

    valya.makeOrder('bmw','with packtronic')

    console.log(mediator.getCustomerList())
            `}</pre></div>


        </div>
    );
};

export default Mediator;