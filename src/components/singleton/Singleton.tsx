import React from 'react';

const Singleton = () => {

    //variant0
    const instance1 = {
        name: 'singleton'
    }
    const instance2 = {
        name: 'singleton2'
    }
    //instance 1 !== instance2

    // 1 variant
    let instanceV1: any;

    class Counter {
        instanceV1: any

        constructor() {
            if (!instanceV1) instanceV1 = this;
            return instanceV1;
        }
    }

    //2 variant
    class Counter2 {
        // @ts-ignore
        count: number
        private static instance: any

        constructor() {
            if (typeof Counter2.instance === 'object') {
                return Counter2.instance;
            }
            this.count = 0;
            Counter2.instance = this;
            return this
        }

        getCounter() {
            return this.count
        }

        increaseCounter() {
            return this.count++
            // return this.count ?this.count++:0
        }
    }


    return (
        <div>
            <h1>Singleton</h1>
            <h2 className='type'>породжуючий патерн</h2>
            <h3>
                обєкт що є в системі в одному екземплярі
            </h3>
            <h4>потрібний коли в системі має бути
                обєкт в лише одному екземплярі</h4>
            <h5></h5>


            <img src="img.png" alt=""/>
            <img src="img_1.png" alt=""/>
            <img src="img_2.png" alt=""/>
            <img src="img_4.png" alt=""/>
            <img src="img_5.png" alt=""/>
            <img src="img_6.png" alt=""/>
            <a href="https://www.youtube.com/watch?v=GrYs0qDQEp0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=2">link</a>
            <pre>
            {`
                //variant0
    const instance1 = {
        name:'singleton'
    }
    const instance2 = {
        name:'singleton2'
    }
    //instance 1 !== instance2

    // 1 variant
    let instanceV1:any;
    class Counter{
        instanceV1:any
        constructor() {
            if(!instanceV1) instanceV1 = this;
            return instanceV1;
        }
    }
    //2 variant
    class Counter2 {
        // @ts-ignore
        count:number
        private static instance:any
        constructor() {
            if(typeof Counter2.instance ==='object'){
                return Counter2.instance;
            }
            this.count = 0;
            Counter2.instance = this;
            return this
        }
        getCounter(){
            return this.count
        }
        increaseCounter(){
            return this.count++
            // return this.count ?this.count++:0
        }
    }       
    `}

            </pre>

        </div>
    );
};

export default Singleton;